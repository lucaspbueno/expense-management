/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { toggleBlur, toggleError } from '../Redux/actions/loginActions';
import { showErrorExpense } from '../Redux/actions/expenseActions';

function Error({ text }) {
  const dispatch = useDispatch();
  const handleCLick = () => {
    dispatch(toggleError(false));
    dispatch(toggleBlur(false));
    dispatch(showErrorExpense(false));
  };

  return (
    <section
      className="
        h-2/5 hidden sm:flex flex-col justify-around items-center p-2 bg-white
        absolute inset-x-16 bottom-20 rounded-2xl blur-none lg:inset-x-1/4
      "
    >
      <h1>Oops...</h1>
      <p>{ text }</p>
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
