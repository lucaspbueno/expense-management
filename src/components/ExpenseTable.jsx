/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '../images/IconsBoostrap/EditIcon.svg';
import DeleteIcon from '../images/IconsBoostrap/DeleteIcon.svg';
import {
  deleteExpenses,
  editTypeForm,
  toggleSideBar,
} from '../Redux/actions/expenseActions';

function ExpenseTable() {
  const { typeForm } = useSelector((state) => state.Expense);
  const dispatch = useDispatch();
  const {
    showSideBar, expensesForFilter, exchangeRates,
  } = useSelector((state) => state.Expense);

  const deleteExpense = (id) => {
    if (typeForm === 'edit') {
      dispatch(editTypeForm('add'));
    }
    dispatch(deleteExpenses(id));
  };

  const edit = (id) => {
    dispatch(editTypeForm('edit', id));
    dispatch(toggleSideBar(true));
  };

  return (
    <div
      className={ `w-full flex justify-center p-0 m:p-4 lg:p-0 xl:p-4
        transition-filter duration-300 ease-out ${showSideBar && 'hidden lg:flex'}` }
    >
      <div className="w-full max-h-[100vh] overflow-y-auto">
        <table
          className="table table-zebra table-hover table-bordered
          xs:table-xs sm:table-sm md:table-md lg:table-lg"
        >
          <thead className="table-dark">
            <tr className="text-center">
              <th scope="col" className="hidden 2xl:table-cell">Id</th>
              <th scope="col">Value</th>
              <th scope="col" className="hidden m:table-cell">Currency</th>
              <th scope="col" className="hidden md:table-cell">Tag</th>
              <th scope="col" className="hidden 2xl:table-cell">Conversion Currency</th>
              <th scope="col" className="hidden xl:table-cell">Description</th>
              <th scope="col" className="hidden 2xl:table-cell">Payment Method</th>
              <th scope="col" className="hidden 2xl:table-cell">Exchange rate used</th>
              <th scope="col">Converted value</th>
              <th scope="col" className="hidden sm:table-cell">Date</th>
              <th scope="col">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              expensesForFilter
              && expensesForFilter.map((
                { id, valor, currency, tag, description, paymentMethod, date },
              ) => {
                const currencyValue = Object.values(exchangeRates)
                  .find((rate) => rate.code === currency);
                const { name, ask } = currencyValue;
                const extractedName = name.match(/^[^/]+/)[0];
                return (
                  <tr key={ id } className="text-center">
                    <td className="hidden 2xl:table-cell">{id}</td>
                    <td>{Number(valor).toFixed(2)}</td>
                    <td className="hidden m:table-cell">{extractedName}</td>
                    <td className="hidden md:table-cell">{tag}</td>
                    <td className="hidden 2xl:table-cell">Real</td>
                    <td className="hidden xl:table-cell">{description}</td>
                    <td className="hidden 2xl:table-cell">{paymentMethod}</td>
                    <td className="hidden 2xl:table-cell">{Number(ask).toFixed(2)}</td>
                    <td>{`R$ ${(valor * ask).toFixed(2)}`}</td>
                    <td className="hidden sm:table-cell">{date}</td>
                    <td>
                      <button type="button" onClick={ () => edit(id) }>
                        <img src={ EditIcon } alt="Pencil Icon" />
                      </button>

                      <button type="button" onClick={ () => deleteExpense(id) }>
                        <img src={ DeleteIcon } alt="Icon of a trash can" />
                      </button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpenseTable;
