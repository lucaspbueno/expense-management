/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';
import ProfileIcon from '../images/IconsBoostrap/ProfileIcon.svg';
import PasswordIcon from '../images/IconsBoostrap/PasswordIcon.svg';

function LoginAuthentication() {
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

  const hadleClick = () => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const rule = 6;
    if (!regexEmail.test(email) || password.length < rule) {
      console.log('Error');
    }
  };

  return (
    <form className="h-screen flex flex-col justify-between p-4">
      <span className="flex flex-col">
        <label>
          Email:
          <label className="input-group">
            <span><img src={ ProfileIcon } alt="Profile Icon" /></span>
            <input
              type="email"
              name="email"
              value={ email }
              placeholder="email@gmail.com"
              className="input input-bordered input-primary w-full"
              onChange={ handleChange }
            />
          </label>
        </label>
        <label className="mt-4">
          Passoword:
          <label className="input-group">
            <span><img src={ PasswordIcon } alt="Password Icon" /></span>
            <input
              type="password"
              name="password"
              value={ password }
              placeholder="******"
              className="input input-bordered input-primary w-full"
              onChange={ handleChange }
            />
          </label>
        </label>
        {/* <label className="flex flex-col">
          Email
          <input
            type="email"
            placeholder="email@gmail.com"
            className="input input-bordered input-primary"
          />
        </label>
        <label className="flex flex-col mt-8">
          Password
          <input
            type="password"
            placeholder="******"
            className="input input-bordered input-primary"
          />
        </label> */}
      </span>
      <button
        type="button"
        className="btn btn-outline btn-primary"
        onClick={ hadleClick }
      >
        Login
      </button>
    </form>
  );
}

export default LoginAuthentication;
