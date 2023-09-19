import { useSelector } from 'react-redux';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import ExpenseTable from '../components/ExpenseTable';
import Error from '../components/Error';
import '../Css/Expense.css';

function Expense() {
  const { showError, isBlur } = useSelector((state) => state.Expense);
  return (
    <section
      className={ `h-screen w-screen overflow-hidden
      transition-filter duration-300 ease-out
      ${isBlur && 'lg:filter-blur-[7px] lg:bg-lightGray'}` }
    >
      <Header />
      <main className="h-[93%] flex">
        <SideBar />
        <ExpenseTable />
      </main>
      { showError && <Error /> }
    </section>
  );
}

export default Expense;
