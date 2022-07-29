import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Error from '../extras/error/error';
import { getSession } from '../../storage/session';
import Logo from '../logo/logo';
import { postUserToApi } from '../../redux/login/login';
import './signup.scss';

function SignUp() {
  const message = 'Username doesnt match';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: '',
    confirmed: '',
  });
  const logged = getSession('session');
  const state = useSelector((store) => store.login);

  useEffect(() => {
    if (logged.token !== null) {
      navigate('/');
    } else if (state.message === 'User Created Successfully') {
      navigate('/login');
    }
  }, [state]);

  const check = user.username !== user.confirmed;
  const auth = user.username === user.confirmed && user.username.length >= 4;

  return (
    <section className="signup-section">
      <div className="signup-bg">
        <Logo />
        <form
          className="log-form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(postUserToApi(user.username));
          }}
        >
          <input
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Confirm username"
            value={user.confirmed}
            onChange={(e) => {
              setUser({ ...user, confirmed: e.target.value });
            }}
          />
          <button type="submit" disabled={!auth}>Sign up</button>
          {check && <Error message={message} />}
          <p>
            Already have an account?
            <a href="/login">Sign in</a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
