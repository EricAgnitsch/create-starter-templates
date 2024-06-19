import { createSupabaseClient } from '@/supabase/client';
import { LoginRequest } from '@/types/login/LoginRequest';
import { User } from '@supabase/supabase-js';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface AuthContextType {
  user: User | null;
  authLoading: boolean;
  signIn: (loginRequest: LoginRequest) => Promise<void>;
  signOut: () => Promise<void>;
  getSession: () => Promise<string | undefined>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const supabase = createSupabaseClient();

  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(true);

  useEffect(() => {
    refreshUserSession();
  }, []);

  const refreshUserSession = () => {
    setAuthLoading(true);
    supabase.auth
      .getUser()
      .then(({ data }) => setUser(data.user))
      .catch((error) => console.error('Error fetching user:', error))
      .finally(() => setAuthLoading(false));
  };

  const getSession = async () => {
    const response = await supabase.auth.getSession();
    return response.data.session?.access_token;
  };

  const signIn = async (loginRequest: LoginRequest) => {
    const data = {
      email: loginRequest.email,
      password: loginRequest.password,
    };

    await supabase.auth.signInWithPassword(data);
    refreshUserSession();
  };

  const signOut = async () => {
    setAuthLoading(true);
    await supabase.auth.signOut();
    setUser(null);
    setAuthLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, authLoading, signIn, signOut, getSession }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
