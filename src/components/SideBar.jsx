import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  addExpense,
  editExpense,
  editTypeForm,
  loadingCurrencies,
  loadingExchangeRates,
  showErrorExpense,
  toggleSideBar,
} from '../Redux/actions/expenseActions';
import fetchApi from '../services/api';
import Input from './Input';
import Select from './Select';
import Error from './Error';
import Alert from './Alert';

function SideBar() {
  const [form, setForm] = useState({
    valor: '',
    currency: '',
    description: '',
    paymentMethod: '',
    date: '',
    id: 1,
  });
  const { valor, currency, description, paymentMethod, date } = form;
  const dispatch = useDispatch();
  const {
    showSideBar,
    currencies,
    showError, typeForm, expenses, idToEdit } = useSelector((state) => state.Expense);

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const initialLoading = async () => {
    const { currenciesFiltered, exchangeRates } = await fetchApi();
    console.log(
      'currenciesFiltered:',
      currenciesFiltered,
    );
    console.log('exchangeRates:', exchangeRates);
    dispatch(loadingCurrencies(currenciesFiltered));
    dispatch(loadingExchangeRates(exchangeRates));
  };

  useEffect(() => {
    initialLoading();
  }, []);

  useEffect(() => {
    if (typeof idToEdit !== 'string') {
      const expense = expenses.find(({ id }) => id === idToEdit);
      setForm({
        ...expense,
      });
    }
  }, [idToEdit]);

  const verifyForm = () => {
    if (!valor || !currency || !description || !paymentMethod || !date) {
      dispatch(showErrorExpense(true));
      return false;
    }
    dispatch(showErrorExpense(false));
    return true;
  };

  const clearForm = () => {
    setForm({
      valor: '',
      currency: '',
      description: '',
      paymentMethod: '',
      date: '',
    });
  };

  const handleClick = () => {
    const isFormValid = verifyForm(); // Verifica se o formulário é válido
    if (isFormValid) {
      const expense = { ...form };
      dispatch(addExpense(expense));
      clearForm();
      dispatch(toggleSideBar(false));
    }
  };

  const handleEdit = () => {
    dispatch(editExpense(form));
    clearForm();
    dispatch(editTypeForm('add'));
  };

  const arr = ['Money', 'Credit Card', 'Debit Card'];

  return (
    <>
      <aside
        className={ `w-full lg:flex
      transition-filter duration-300 ease-out
      ${showError && 'sm:blur-[7px] sm:pointer-events-none sm:bg-lightGray'}
      ${!showSideBar && 'hidden'}` }
      >
        <form className="flex flex-col p-5">
          <div>
            <Input
              type="number"
              name="valor"
              value={ valor }
              placeholder="Value"
              handleChange={ handleChange }
              showError={ showError }
            />

            <Select
              name="currency"
              value={ currency }
              handleChange={ handleChange }
              firstItem="Choose a currency"
              array={ currencies }
            />

            <Input
              type="text"
              name="description"
              value={ description }
              placeholder="Description"
              handleChange={ handleChange }
              showError={ showError }
            />

            <Select
              name="paymentMethod"
              value={ paymentMethod }
              handleChange={ handleChange }
              firstItem="Choose Payment Method"
              array={ arr }
            />

            <Input
              type="date"
              name="date"
              value={ date }
              handleChange={ handleChange }
              showError={ showError }
            />
          </div>
          <div className="flex flex-col">
            {
              showError && (
                <Alert text="Complete all fields before adding an expense" />
              )
            }
            <button
              type="button"
              className={ `btn btn-outline btn-primary
              ${typeForm === 'edit' && 'btn-warning'}` }
              onClick={ typeForm === 'add' ? handleClick : handleEdit }
            >
              { `${typeForm === 'add' ? 'Add Expense' : 'Edit Expense'}`}
            </button>
          </div>
        </form>
      </aside>
      {showError && <Error />}
    </>
  );
}

export default SideBar;
