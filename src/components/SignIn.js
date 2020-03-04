import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const SignIn = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitLogin = () => {
    axios
      .post("https://howto-be.herokuapp.com/api/auth/login", user)
      .then((result) => {
        console.log("login", result);
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("user_id", result.data.user_id);
        props.appRefresh();
        props.history.push("/howto");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitRegister = (e) => {
    axios
      .post("https://howto-be.herokuapp.com/api/auth/register", user)
      .then((res) => {
        console.log("register", res);
        submitLogin();
      });
  };

  const submitLogout = (e) => {
    localStorage.clear();
    props.appRefresh();
  };

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <header>
      <nav>
        <Link className="link" to="/about">
          About us
        </Link>
        <Link className="link" to="/howto">
          How To Do It
        </Link>
      </nav>
      {localStorage.getItem("token") == null ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label>Username</label>
          <input
            name="username"
            value={user.username}
            onChange={(e) => handleChange(e)}
          ></input>
          <label>Password</label>
          <input
            name="password"
            value={user.password}
            onChange={(e) => handleChange(e)}
          ></input>
          <button type="submit" onClick={(e) => submitLogin(e)}>
            Sign In
          </button>
          <button onClick={(e) => submitRegister(e)}>Register</button>
        </form>
      ) : (
        <button onClick={() => submitLogout()}>log out</button>
      )}
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    user: state.user,
    error: state.error
  };
};

export default connect(mapStateToProps, {})(SignIn);
