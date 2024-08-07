
import { useAuthContext } from './AuthContext';

function AuthStatus() {
  const { isAuthenticated } = useAuthContext();

  return (
    <div>
      <h1>{isAuthenticated ? 'Logged In' : 'Logged Out'}</h1>
    </div>
  );
}

export default AuthStatus;
