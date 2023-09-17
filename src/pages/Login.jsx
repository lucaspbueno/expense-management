import { useSelector } from 'react-redux';
import InitialPage from '../components/InitialPage';
import LoginForm from '../components/LoginForm';
import Error from '../components/Error';

function Login() {
  const { showError, isBlur } = useSelector((state) => state.Login);
  return (
    <section
      className={ `flex transition-filter duration-300 ease-out
      ${isBlur && 'sm:filter-blur-[7px] sm:bg-lightGray'}` }
    >
      <InitialPage />
      <article className="w-screen hidden lg:flex">
        <LoginForm />
      </article>
      { showError && <Error /> }
    </section>
  );
}

export default Login;
