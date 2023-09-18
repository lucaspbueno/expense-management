/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showErrorExpense } from '../Redux/actions/expenseActions';

function Alert({ text }) {
  const dispatch = useDispatch();
  const { showError } = useSelector((state) => state.Expense);

  const removeAlert = () => {
    const time = 3000;
    setTimeout(() => {
      dispatch(showErrorExpense(false));
    }, time);
  };
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (showError) {
      removeAlert();
      const maxTime = 3000;
      const interval = 10;
      const steps = maxTime / interval;
      const progressInterval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 100 / steps);
      }, interval);
      setTimeout(() => {
        clearInterval(progressInterval);
      }, maxTime);
    }
  }, [showError]);

  return (
    <div className="flex flex-col alert alert-error mb-5 h-30 sm:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 m-0" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>{text}</span>
      <progress className="progress  w-56" value={ progress } max="100" />
    </div>
  );
}

export default Alert;
