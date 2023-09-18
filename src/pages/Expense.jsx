import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

function Expense() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="w-screen flex">
        <SideBar />
        <ExpenseTable />
      </main>
    </>
  );
}

export default Expense;
