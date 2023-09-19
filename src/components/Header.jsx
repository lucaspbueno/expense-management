import Hamburger from 'hamburger-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideBar } from '../Redux/actions/expenseActions';

function Header() {
  const dispatch = useDispatch();

  const { showSideBar } = useSelector((state) => state.Expense);

  const onToggleSideBar = () => {
    if (showSideBar) return dispatch(toggleSideBar(false));
    dispatch(toggleSideBar(true));
  };

  return (
    <header className="h-[7%] flex items-center bg-violet-950 text-white shadow-lg p-5">
      <button
        className="btn btn-square btn-ghost lg:pointer-events-none lg:hidden"
        onClick={ onToggleSideBar }
      >
        <Hamburger
          toggled={ showSideBar }
          easing="ease-in"
          direction="right"
          size={ 20 }
        />
      </button>
      <h1
        className="btn btn-ghost normal-case text-base sm:text-lg"
      >
        Expense Management
      </h1>
    </header>
  );
}

export default Header;
