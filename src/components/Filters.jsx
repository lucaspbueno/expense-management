/* eslint-disable jsx-a11y/label-has-associated-control */

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changePaymentMethodFilter } from '../Redux/actions/filters.Actions';
import Select from './Select';

function Filters() {
  const dispatch = useDispatch();
  const [PaymentMethodFilter, setPaymentMethodFilter] = useState('');

  const handleChange = ({ target: { value } }) => {
    setPaymentMethodFilter(value);
  };

  useEffect(() => {
    dispatch(changePaymentMethodFilter(PaymentMethodFilter));
  }, [PaymentMethodFilter, dispatch]);

  const arr = ['Money', 'Credit Card', 'Debit Card'];

  return (
    <section className="p-5">
      <form>
        <label className="flex flex-col">
          Payment Method
          <Select
            name="PaymentMethodFilter"
            value={ PaymentMethodFilter }
            handleChange={ handleChange }
            firstItem="Select which method you want to filter by"
            array={ arr }
          />
        </label>
      </form>
    </section>
  );
}

export default Filters;
