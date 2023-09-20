import { useSelector } from 'react-redux';
import InitialPage from '../components/InitialPage';
import LoginForm from '../components/LoginForm';
import Error from '../components/Error';

function Login() {
  const { showError, isBlur } = useSelector((state) => state.Login);
  return (
    <section
      className={ `flex transition-filter duration-300 ease-in-out
      ${isBlur && 'lg:filter-blur-[7px] lg:bg-lightGray'}` }
    >
      <InitialPage />
      <article className="w-screen hidden lg:flex">
        <LoginForm />
      </article>
      { showError && <Error text="Email and/or password are not valid." /> }
    </section>
  );
}

export default Login;
