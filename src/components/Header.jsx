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
    <header className="flex items-center bg-primary text-black">
      <button
        className="btn btn-square btn-ghost lg:pointer-events-none lg:hidden"
        onClick={ onToggleSideBar }
      >
        <Hamburger toggled={ showSideBar } easing="ease-in" />
      </button>
      <h1 className="btn btn-ghost normal-case text-xl">Expense Management</h1>
    </header>
  );
}

export default Header;
