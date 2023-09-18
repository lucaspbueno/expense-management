/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Hamburger from 'hamburger-react';
import { useDispatch } from 'react-redux';
import { toggleSideBar } from '../Redux/actions/expenseActions';

function Header() {
  const dispatch = useDispatch();
  const onToggle = (toggled) => {
    if (toggled) return dispatch(toggleSideBar(true));
    dispatch(toggleSideBar(false));
  };

  return (
    <header>
      <div className="navbar bg-primary text-black">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <Hamburger onToggle={ onToggle } easing="ease-in" />
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg> */}
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
