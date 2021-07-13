import React, { createContext, ReactNode, useEffect, useState } from 'react';

import { auth, firebase } from '../services/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextType);

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children
}: AuthContextProviderProps) => {
  const [user, setUser] = useState<User>();

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const res = await auth.signInWithPopup(provider);

    if (res.user) {
      const { displayName, photoURL, uid } = res.user;

      if (!displayName || !photoURL) {
        throw new Error('Faltam informações na conta Google');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      });
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const { displayName, photoURL, uid } = authUser;

        if (!displayName || !photoURL) {
          throw new Error('Faltam informações na conta Google');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
export type { AuthContextType };
