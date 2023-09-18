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
      className={ `h-screen w-screen p-5
        transition-filter duration-300 ease-out ${showSideBar && 'hidden lg:flex'}
      ${showError && 'sm:blur-[7px] sm:pointer-events-none sm:bg-lightGray'}` }
    >
      <div className="max-h-[79vh] overflow-y-auto overflow-x-hidden">
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Value</th>
              <th scope="col">Currency</th>
              <th scope="col">Description</th>
              <th scope="col">Payment Method</th>
              <th scope="col">Date</th>
              <th scope="col">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              expensesForFilter
              && expensesForFilter.map((
                { id, valor, currency, description, paymentMethod, date },
              ) => (
                <tr key={ description }>
                  <th scope="row">{id}</th>
                  <th>{valor}</th>
                  <td>{currency}</td>
                  <td>{description}</td>
                  <td>{paymentMethod}</td>
                  <td>{date}</td>
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
