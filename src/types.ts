import { User } from 'firebase/auth';

export interface LinkData {
  title: string;
  url: string;
}

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

export type ProctedRouteProps = {
  children: React.ReactNode;
};

export type BioItem = {
  title: string;
  url: string;
};
