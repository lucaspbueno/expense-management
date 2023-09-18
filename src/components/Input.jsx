// eslint-disable-next-line react/prop-types
function Input({ type, name, value, placeholder = '', handleChange, showError }) {
  return (
    <input
      type={ type }
      name={ name }
      value={ value }
      placeholder={ placeholder }
      className={ `input input-bordered input-primary mb-5 w-full
      ${showError === name && 'input-error sm:input-primary'}` }
      onChange={ handleChange }
    />
  );
}

export default Input;
