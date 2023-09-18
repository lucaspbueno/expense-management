/* eslint-disable react/prop-types */
function Select({ name, value, handleChange, firstItem, array }) {
  return (
    <select
      name={ name }
      value={ value }
      className="select select-primary mb-5 w-full"
      onChange={ handleChange }
    >
      <option disabled>{firstItem}</option>
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
