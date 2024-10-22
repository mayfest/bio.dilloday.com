import { User } from 'firebase/auth';

export type AuthContextType = {
  currUser: User | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
  isAuthorized: boolean;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};
