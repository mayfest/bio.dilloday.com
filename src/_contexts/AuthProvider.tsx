import { createContext, useEffect, useState, useCallback } from 'react';
import {
  getAuth,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  User,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { AuthContextType, AuthProviderProps } from '../types/types';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../app';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currUser, setCurrUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const auth = getAuth();

  const signOut = useCallback(async () => {
    try {
      await auth.signOut();
      setCurrUser(null);
      setIsAuthorized(false);
    } catch (error) {
      console.log('Error with sign out', error);
    }
  }, [auth]);

  const checkIfUserIsAuthorized = useCallback(
    async (email: string) => {
      try {
        const bioContentDoc = await getDoc(doc(db, 'bio', 'admin'));
        if (bioContentDoc.exists()) {
          const bioContentData = bioContentDoc.data();
          if (
            bioContentData.users &&
            Array.isArray(bioContentData.users) &&
            bioContentData.users.includes(email)
          ) {
            setIsAuthorized(true);
            setCurrUser(auth.currentUser);
          } else {
            alert(
              'You are not an authorized editor of bio.dilloday.com. If you require access, please contact the site owner: EthanPineda2025@u.northwestern.edu'
            );
            await signOut();
            setIsAuthorized(false);
          }
        } else {
          console.log('Document does not exist');
          await signOut();
          setIsAuthorized(false);
        }
      } catch (error) {
        console.log('Error with checking if user is authorized', error);
        await signOut();
        setIsAuthorized(false);
      }
    },
    [auth, signOut]
  );

  const signInWithGoogle = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (!user.email) {
        await signOut();
        return;
      }

      await checkIfUserIsAuthorized(user.email);
    } catch (error) {
      console.log('Error with sign in with google', error);
    }
  }, [auth, signOut, checkIfUserIsAuthorized]);

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user && user.email) {
            await checkIfUserIsAuthorized(user.email);
            setCurrUser(user);
          } else {
            setCurrUser(null);
            setIsAuthorized(false);
          }
          setLoading(false);
        });
        return () => unsubscribe();
      })
      .catch((error) => {
        console.log('Error with setting persistence', error);
        setLoading(false);
      });
  }, [auth, checkIfUserIsAuthorized]);

  const value = {
    currUser,
    isAuthorized,
    signInWithGoogle,
    signOut,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
