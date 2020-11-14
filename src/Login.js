import userEvent from "@testing-library/user-event";
import { useEffect, useRef } from "react";
import React from "react";
import "./Login.css";

const Login = ({
  email,
  password,
  errorpassword,
  erroremail,
  sethasaccount,
  hasaccount,
  handleSignup,
  setemail,
  setpassword,
  handleLogin,
}) => {
  return (
    <section id="home-login">
      <div class="container-login login">
        <div class="box-login">
          {hasaccount ? <h1>LOGIN</h1> : <h1>REGISTER</h1>}
          <input
            type="text"
            name=""
            placeholder="email"
            autoFocus
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <p className="errorMsg">{erroremail}</p>
          <input
            type="password"
            name=""
            placeholder="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />
          <p className="errorMsg">{errorpassword}</p>
          <div>
            {hasaccount ? (
              <>
  <div className="neon">
                  <span onClick={handleLogin} >Sign in</span>
                </div>
                <p className="buttonpara">
                  don't have an account{" "}
                  <span onClick={() => sethasaccount(!hasaccount)}>
                    &nbsp;Sign Up
                  </span>
                </p>
              </>
            ) : (
              <>
                <div className="neon">
                  <span onClick={handleSignup} >sign up</span>
                </div>

                <p className="buttonpara">
                  already have an account{" "}
                  <span onClick={() => sethasaccount(!hasaccount)}>
                    &nbsp;Sign In
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
