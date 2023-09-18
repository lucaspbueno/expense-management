/* eslint-disable jsx-a11y/label-has-associated-control */

function Filters() {
  return (
    <section className="p-5">
      <h1>Filters</h1>
      <form>
        <label>
          Payment Method
        </label>
        <select
          className="select select-primary mb-5 w-full"
        >
          <option disabled value="">Select which method you want to filter by</option>
          <option value="Money">Money</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
        </select>
      </form>
    </section>
  );
}

export default Filters;
