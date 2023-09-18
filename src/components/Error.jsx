import { useDispatch } from 'react-redux';
import { toggleBlur, toggleError } from '../Redux/actions/loginActions';

function Error() {
  const dispatch = useDispatch();
  const handleCLick = () => {
    dispatch(toggleError(false));
    dispatch(toggleBlur());
  };

  return (
    <section
      className="
        h-2/5 sm:flex flex-col justify-around items-center p-2 bg-white
        absolute inset-x-16 bottom-20 rounded-2xl blur-none lg:inset-x-1/4 hidden
      "
    >
      <h1>Oops...</h1>
      <p>Email and/or password are not valid.</p>
      <button
        type="button"
        className="
          btn btn-outline btn-primary w-full border-x-0 border-b-0 rounded-none p-5
        "
        onClick={ handleCLick }
      >
        OK
      </button>
    </section>
  );
}

export default Error;
