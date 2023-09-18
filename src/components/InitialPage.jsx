import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import LoginImg from '../images/LoginScreen.svg';
import { toggleBlur, toggleError } from '../Redux/actions/loginActions';

function InitialPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showError } = useSelector((state) => state.Login);
  const handleCLick = () => {
    navigate('/Login');
  };

  const hiddenError = () => {
    const rule = 640;
    if (window.innerWidth > rule && showError) {
      dispatch(toggleError(false));
      dispatch(toggleBlur());
    }
  };

  useEffect(() => {
    hiddenError();
  }, []);

  /*  items-center */
  return (
    <section
      className="h-screen w-full flex flex-col p-4 lg:justify-center lg:p-0"
    >
      <img
        src={ LoginImg }
        alt="Login screen background"
        className="h-full mb-16 sm:mb-20 sm:h-1/2 md:mb-30"
      />
      <article className="h-full flex flex-col justify-between lg:hidden">
        <div>
          <h1 className="text-5xl sm:text-6xl">Login</h1>
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
