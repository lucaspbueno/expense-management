import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
function Input({ type, name, value, placeholder = '', handleChange, showError }) {
  const { idToEdit } = useSelector((state) => state.Expense);
  return (
    <input
      type={ type }
      name={ name }
      value={ value }
      placeholder={ placeholder }
      className={ `input input-bordered input-primary mb-5 w-full
      ${showError === name && 'input-error sm:input-primary'}
      ${typeof idToEdit !== 'string' && 'text-warning'}` }
      onChange={ handleChange }
    />
  );
}

export default Input;
