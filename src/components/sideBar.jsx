import { useDispatch, useSelector } from 'react-redux';
import { MenuItem, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { loadingCurrencies } from '../Redux/actions/expenseActions';
import fetchApi from '../services/api';

function SideBar() {
  const [form, setForm] = useState({
    valor: '',
    currency: '',
    description: '',
    paymentMethod: '',
    date: '',
    id: 0,
  });
  const { valor, currency, description, paymentMethod, date } = form;
  const dispatch = useDispatch();
  const { showSideBar, exchangeRates } = useSelector((state) => state.Expense);

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const initialLoading = async () => {
    const data = await fetchApi();
    dispatch(loadingCurrencies(data));
  };

  useEffect(() => {
    initialLoading();
  }, []);

  const verifyForm = () => {
    if (!valor)
  };

  const handleClick = () => {

  };

  return (
    <aside
      className={ `sm:flex
    ${!showSideBar && 'hidden'} h-screen` }
    >
      <form className="w-screen h-full flex flex-col pr-6 pt-0 pl-6">
        <TextField
          margin="normal"
          type="number"
          name="valor"
          value={ valor }
          onChange={ handleChange }
          label="Value"
        />

        <TextField
          margin="normal"
          select
          name="currency"
          value={ currency }
          onChange={ handleChange }
          label="Currency"
          defaultValue="EUR"
        >
          {
            exchangeRates && exchangeRates.map((currencyState) => (
              <MenuItem
                key={ currencyState }
                value={ currencyState }
              >
                {currencyState }
              </MenuItem>
            ))
          }
        </TextField>

        <TextField
          margin="normal"
          type="text"
          name="description"
          value={ description }
          onChange={ handleChange }
          label="Description"
        />

        <TextField
          margin="normal"
          select
          label="Payment Method"
          name="paymentMethod"
          value={ paymentMethod }
          onChange={ handleChange }
          defaultValue="Money"
        >
          <MenuItem value="Money">Money</MenuItem>
          <MenuItem value="Credit Card">Credit Card</MenuItem>
          <MenuItem value="Debit Card">Debit Card</MenuItem>
        </TextField>

        <input
          type="date"
          name="date"
          value={ date }
          onChange={ handleChange }
          className="
            border p-4 mt-4 border-zinc-300 rounde
            hover:border-black focus:border-blue-700 outline-none
          "
        />

        <button
          type="button"
          className="btn btn-outline btn-primary mt-6"
          onClick={ handleClick }
        >
          Add Expense
        </button>
      </form>
    </aside>
  );
}

export default SideBar;
