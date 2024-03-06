import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../Css/index.css";
const SignIn = () => {
  const [emailInpDirty, setEmailDirty] = useState(false);
  const [passwordInpDirty, setPasswordDirty] = useState(false);
  const [emailInp, setEmail] = useState("");
  const [passwordInp, setPassword] = useState("");
  const navigate = useNavigate();
  const completeData = useSelector((state) => state.user);
  const handleEmailChange = (e) => {
    setEmailDirty(true);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPasswordDirty(true);
    setPassword(e.target.value);
  };
  const moveToHome = () => {
    setEmailDirty(true);
    setPasswordDirty(true);
    {
      completeData.map((item) => {
        if (emailInp == item.email && passwordInp == item.password) {
          navigate("/products");
        }
        if (emailInp !== item.email && passwordInp == item.password) {
          alert(
            "You do not have a account with email that you entered Check your email once"
          );
        }
        if (passwordInp !== item.password && emailInp == item.email) {
          alert("You entered wrong password Check it once");
        }
        if (
          passwordInp !== item.password &&
          emailInp !== item.email &&
          emailInp.length !== 0 &&
          passwordInp.length !== 0
        ) {
          alert("Your  don't have a account with given details....! ");
        }
      });
    }
  };

  return (
    <div className="main-container">
      <div className="container1">
        <h1>Sign In</h1>
        <div className="Detail">
          <div className="lb">
            <label>Email*</label>
          </div>
          <input
            type="emailInp"
            className="Input"
            placeholder="Enter your email"
            size={20}
            value={emailInp}
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          {!emailInp.length && emailInpDirty && (
            <span className="validation">Email is empty</span>
          )}
          {!emailInp.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ) &&
            emailInpDirty &&
            emailInp.length !== 0 && (
              <span className="validation">Your entered email is Invalid</span>
            )}
        </div>
        <div className="Detail">
          <div className="lb">
            <label>Password*</label>
          </div>

          <input
            type="password"
            className="Input"
            placeholder="Enter your password"
            size={35}
            value={passwordInp}
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />

          {!passwordInp.length && passwordInpDirty && (
            <span className="validation">Password is empty</span>
          )}
          {passwordInp.length !== 8 &&
            passwordInpDirty &&
            passwordInp.length !== 0 && (
              <span className="validation">
                Your Password should contain 8 digits
              </span>
            )}
          {!passwordInp.match(/\d/) &&
            passwordInpDirty &&
            passwordInp.length !== 0 && (
              <span className="validation">
                Your Password should contain atleast one number
              </span>
            )}
          {!passwordInp.match(/[A-Z]/) &&
            passwordInpDirty &&
            passwordInp.length !== 0 && (
              <span className="validation">
                Your Password should contain a Capital letter
              </span>
            )}
          {!passwordInp.match(/[-+_!@#$%^&*.,() ?]/) &&
            passwordInpDirty &&
            passwordInp.length !== 0 && (
              <span className="validation">
                Your Password should contain a special character
              </span>
            )}
        </div>
        <button onClick={moveToHome} className="btn1">
          Sign in
        </button>
        <div className="moveToForget">
          <span
            onClick={() => {
              navigate("./ForgetPass");
            }}
          >
            Forget Password?
          </span>
        </div>
        <div
          onClick={() => {
            navigate("./SignUp");
          }}
          className="moveToSignUp"
        >
          Don't have an account?{" "}
          <span>
            <b>Sign up</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
