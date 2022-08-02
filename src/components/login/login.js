import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserFromApi } from '../../redux/login/login';
import Logo from '../logo/logo';
import './login.scss';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginState = useSelector((store) => store.login);
  const [user, setUser] = useState({
    username: '',
  });

  useEffect(() => {
    if (loginState.token !== null) {
      navigate('/');
    }
  }, [loginState]);
  return (
    <section className="log-section">
      <div className="log-bg">
        <Logo />
        <form
          className="log-form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(getUserFromApi(user.username));
          }}
        >
          <input
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={(e) => {
              setUser({ username: e.target.value });
            }}
            required
          />

          <button disabled={user.username.length < 4} type="submit">Login</button>
          <p>
            Don&apos;t have an accoount?
            <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
