import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../contexts/AuthContext';

export default function useAuth(): AuthContextType {
  const value = useContext(AuthContext);

  return value;
}
