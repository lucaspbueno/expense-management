import { useNavigate } from 'react-router-dom';
import LoginImg from '../images/LoginScreen.png';

function Login() {
  const navigate = useNavigate();
  const handleCLick = () => {
    navigate('/login');
  };

  return (
    <div className="h-screen flex flex-col justify-between p-4">
      <img src={ LoginImg } alt="Login screen background" />
      <section>
        <h1>Login</h1>
        <h2>Welcome back, we missed you</h2>
      </section>
      <button
        type="button"
        className="btn btn-outline btn-primary"
        onClick={ handleCLick }
      >
        Sign in
      </button>
    </div>
  );
}

export default Login;
