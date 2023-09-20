import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
function Input({ type, name, value, placeholder = '', handleChange }) {
  const { idToEdit, showError } = useSelector((state) => state.Expense);
  return (
    <input
      type={ type }
      name={ name }
      value={ value }
      placeholder={ placeholder }
      className={ `input input-bordered mb-5
      ${typeof idToEdit !== 'string' && 'text-warning'}
      ${!showError && 'input-primary'}
      ` }
      onChange={ handleChange }
    />
  );
}

export default Input;
