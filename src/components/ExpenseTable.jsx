/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '../images/IconsBoostrap/EditIcon.svg';
import DeleteIcon from '../images/IconsBoostrap/DeleteIcon.svg';
import {
  deleteExpenses,
  editTypeForm,
} from '../Redux/actions/expenseActions';

function ExpenseTable() {
  const dispatch = useDispatch();
  const {
    showSideBar, expensesForFilter, showError,
  } = useSelector((state) => state.Expense);

  const deleteExpense = (id) => {
    dispatch(deleteExpenses(id));
  };

  const edit = (id) => {
    dispatch(editTypeForm('edit', id));
  };

  return (
    <div
      className={ `w-full flex justify-center p-4
        transition-filter duration-300 ease-out ${showSideBar && 'hidden lg:flex'}
      ${showError && 'sm:blur-[7px] sm:pointer-events-none sm:bg-lightGray'}` }
    >
      <div className="w-full max-h-[100vh] overflow-y-auto">
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col" className="hidden sm:table-cell">Id</th>
              <th scope="col">Value</th>
              <th scope="col" className="hidden m:table-cell">Currency</th>
              <th scope="col" className="hidden sm:table-cell">Description</th>
              <th scope="col">Payment Method</th>
              <th scope="col" className="hidden sm:table-cell">Date</th>
              <th scope="col">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              expensesForFilter
              && expensesForFilter.map((
                { id, valor, currency, description, paymentMethod, date },
              ) => (
                <tr key={ description } >
                  <td className="hidden sm:table-cell">{id}</td>
                  <td >{valor}</td>
                  <td className="hidden m:table-cell">{currency}</td>
                  <td className="hidden sm:table-cell">{description}</td>
                  <td>{paymentMethod}</td>
                  <td className="hidden sm:table-cell">{date}</td>
                  <td className="teste">
                    <button type="button" onClick={ () => edit(id) }>
                      <img src={ EditIcon } alt="Pencil Icon" />
                    </button>

                    <button type="button" onClick={ () => deleteExpense(id) }>
                      <img src={ DeleteIcon } alt="Icon of a trash can" />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpenseTable;
