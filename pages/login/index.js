import React from 'react';
import Link from 'next/link';
import { appendErrors, useForm } from 'react-hook-form';
import { useState } from "react";

const App = () => {

  //const { register, handleSubmit } = useForm();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    email: 'Email is required!',
    password: 'Password is required!'
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const onSubmit = (event) => {
    event.preventDefault();

    const { email, password } = document.forms[0];
    const emailValue = email.value;
    const passwordValue = password.value;

    if (emailValue === undefined || emailValue === null || emailValue === '') {
      setErrorMessages({ name: 'email', message: errors.email });
    }
    else if (passwordValue === undefined || passwordValue === null || passwordValue === '') {
      setErrorMessages({ name: 'password', message: errors.password });
    }
    else {
      setIsSubmitted(true);
      console.log(email.value, password.value);
    }
  };

  const form = (
    <div className="auth-container">
      <div className='auth-form'>
        <div className='auth-form-inner'>
          <h1>Sign in</h1>
          <p className='auth-text'>Enter your email and password to sign in!</p>
          <a href="#" className="btn-google">
            Sign in with Google
          </a>
          <div className="line-breaker">
            <span className="line"></span>
            <span>or</span>
            <span className="line"></span>
          </div>
          <form onSubmit={(onSubmit)}>
            <div className="auth-form-group">
              <label for="email">Email</label>
              <input type="text" placeholder="email@website.com" id="email" name="email" />
              {renderErrorMessage('email')}
            </div>
            <div className="auth-form-group">
              <label for="password">Password</label>
              <input type="password" placeholder="Password" id="password" name="password" minlength="8" />
              {renderErrorMessage('password')}
            </div>
          </form>
          <a href="#" className="auth-reset">Forgot password?</a>
          <button type="submit" onClick={onSubmit} name="submit" className="auth-btn">Sign in</button>
          <div className="auth-bottom">
            Don't registered yet? <Link href="/">Create an Account</Link>
          </div>
        </div>
      </div>
      <div className='auth-side'>
      <div className='auth-side-border'>
      <div className='auth-side-image'><img alt="" src='images.jpg' /></div>
      </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className='next'>
      {isSubmitted ? <Link href="/home"><a>tahir alttan üstten siker</a></Link> : form}
      </div>
    </div>
  );
}
export default App;