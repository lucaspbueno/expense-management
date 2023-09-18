// eslint-disable-next-line react/prop-types
function Input({ type, placeholder, labelText }) {
  return (
    <label className="flex flex-col">
      { labelText }
      <input
        type={ type }
        placeholder={ placeholder }
        className="input input-bordered input-primary w-full max-w-xs"
      />
    </label>
  );
}

export default Input;
