import { useSelector } from 'react-redux';
import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Error from '../components/Error';
import Filters from '../components/Filters';

function Expense() {
  const { showError, isBlur } = useSelector((state) => state.Expense);
  return (
    <section
      className={ `transition-filter duration-300 ease-out
      ${isBlur && 'lg:filter-blur-[7px] lg:bg-lightGray'}` }
    >
      <header>
        <Header />
      </header>
      <main className="w-screen flex">
        <section>
          <SideBar />
          {/* <Filters /> */}
        </section>
        <ExpenseTable />
      </main>
      { showError && <Error /> }
    </section>
  );
}

export default Expense;
