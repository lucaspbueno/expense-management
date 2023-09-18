import { useSelector } from 'react-redux';

/* eslint-disable react/prop-types */
function Select({ name, value, handleChange, firstItem, array }) {
  const { typeForm } = useSelector((state) => state.Expense);
  return (
    <select
      name={ name }
      value={ value }
      className={ `select select-primary mb-5 w-full
      ${typeForm === 'edit' && 'text-warning'}` }
      onChange={ handleChange }
    >
      <option disabled value="">{firstItem}</option>
      {
        array && array.map((currencyState) => (
          <option
            key={ currencyState }
            value={ currencyState }
          >
            {currencyState }
          </option>
        ))
      }
    </select>
  );
}

export default Select;
