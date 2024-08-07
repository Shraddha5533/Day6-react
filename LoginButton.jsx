
import { useAuthContext } from './AuthContext';

function LoginButton() {
  const { login } = useAuthContext();

  return (
    <button onClick={login}>Login</button>
  );
}

export default LoginButton;
