/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Error from './Error';
import { toggleBlur, toggleError } from '../Redux/actions/loginActions';
import ProfileIcon from '../images/IconsBoostrap/ProfileIcon.svg';
import PasswordIcon from '../images/IconsBoostrap/PasswordIcon.svg';

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showError, isBlur } = useSelector((state) => state.Login);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { email, password } = form;

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateCredentials = () => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const rule = 6;
    return !regexEmail.test(email) || password.length < rule;
  };

  const handleClick = () => {
    if (validateCredentials()) {
      dispatch(toggleError(true));
      dispatch(toggleBlur());
    } else {
      navigate('/Expense');
    }
  };

  return (
    <>
      <form
        className={
          `h-screen w-full flex flex-col justify-between p-4
          transition-filter duration-300 ease-out
          ${isBlur && 'sm:blur-[7px] sm:bg-lightGray'}
          ${showError && 'sm:pointer-events-none'}
          lg:justify-center items-center`
        }
      >
        <span className="w-full flex flex-col text-xl xl:items-center lg:text-2xl">
          <label className="form-control flex flex-col xl:w-9/12">
            Email:
            <label className="input-group input-group-lg">
              <span><img src={ ProfileIcon } alt="Profile Icon" /></span>
              <input
                type="email"
                name="email"
                value={ email }
                placeholder="email@gmail.com"
                className={ `input input-bordered input-primary input-lg w-full 
                focus:input-primary
                ${showError && 'input-error sm:input-primary'}` }
                onChange={ handleChange }
              />
            </label>
            <label htmlFor="#" className="label sm:hidden">
              <span className="label-text-alt" />
              <span
                className={ `label-text-alt text-base
                ${showError ? 'text-red-600' : 'hidden'} ` }
              >
                Incorrect email
              </span>
            </label>
          </label>
          <label className="form-control flex flex-col mt-2 xl:w-9/12">
            Password:
            <label className="input-group input-group-lg">
              <span><img src={ PasswordIcon } alt="Password Icon" /></span>
              <input
                type="password"
                name="password"
                value={ password }
                placeholder="******"
                className={ `input input-bordered input-primary input-lg w-full 
                focus:input-primary
                ${showError && 'input-error sm:input-primary'}` }
                onChange={ handleChange }
              />
            </label>
            <label htmlFor="#" className="label sm:hidden">
              <span className="label-text-alt" />
              <span
                className={ `label-text-alt text-base
                ${showError ? 'text-red-600' : 'hidden'} ` }
              >
                Incorrect password
              </span>
            </label>
          </label>
        </span>
        <button
          type="button"
          className="btn btn-outline btn-primary mt-8 btn-lg w-full xl:w-9/12"
          onClick={ handleClick }
        >
          Login
        </button>
      </form>
      { showError && <Error /> }
    </>
  );
}

export default LoginForm;
