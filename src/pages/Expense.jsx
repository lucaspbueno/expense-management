import { useSelector } from 'react-redux';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import ExpenseTable from '../components/ExpenseTable';
import Error from '../components/Error';
import Filters from '../components/Filters';

function Expense() {
  const { showError, isBlur } = useSelector((state) => state.Expense);
  return (
    <section className="h-screen w-screen overflow-hidden">
      <Header />
      <main
        className={ `h-[93%] flex
        transition-filter duration-300 ease-out
        ${isBlur && 'lg:filter-blur-[7px] lg:bg-lightGray'}
        ${showError && 'sm:blur-[7px] sm:pointer-events-none sm:bg-lightGray'}` }
      >
        <SideBar />
        <section className="w-full ">
          <Filters />
          <ExpenseTable />
        </section>
      </main>
      { showError && <Error text="Complete all fields before adding an expense" /> }
    </section>
  );
}

export default Expense;
