import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBlur, toggleError } from '../Redux/actions/loginActions';
import LoginImg from '../images/LoginScreen.svg';
import '../Css/LoginImg.css';

function InitialPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showError, isBlur } = useSelector((state) => state.Login);
  const handleCLick = () => {
    navigate('/Login');
  };

  const hiddenError = () => {
    const rule = 640;
    if (window.innerWidth > rule && showError) {
      dispatch(toggleError(false));
      dispatch(toggleBlur(false));
    }
  };

  useEffect(() => {
    hiddenError();
  }, []);

  /*  items-center */
  return (
    <section
      className={ ` 
    h-screen w-full flex flex-col p-4 lg:justify-center lg:p-0
    transition-filter duration-300 ease-in-out
    ${isBlur && 'sm:blur-[7px] sm:bg-lightGray'}
    ` }
    >
      <img
        src={ LoginImg }
        alt="Login screen background"
        className={ `h-full mb-16 sm:mb-20 sm:h-1/2 md:mb-30 lg:mb-0
          transition-filter duration-300 ease-in-out
          ${isBlur && 'error'}
        ` }
      />
      <article className="h-full flex flex-col justify-between lg:hidden">
        <div>
          <h1 className="text-4xl mb-2 sm:text-5xl">Login</h1>
          <h2
            className="text-3xl sm:text-4xl"
          >
            Welcome back, we missed you
          </h2>
        </div>
        <button
          type="button"
          className="btn btn-outline btn-primary btn-lg mb-2 w-full"
          onClick={ handleCLick }
        >
          Sign in
        </button>
      </article>
    </section>
  );
}

export default InitialPage;
