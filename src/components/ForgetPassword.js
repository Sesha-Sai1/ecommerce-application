import React, { useState } from "react";
import "../Css/index.css";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { passwordChange } from "../store/AuthenticationSlice";

const Reset = () => {
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordInp2Dirty, setPassword2Dirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordInp, setPassword] = useState("");
  const [passwordInp2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const {password} = useSelector((state)=>state.profile)
  const handlePassChange = (e) => {
    setPasswordDirty(true);
    setPassword(e.target.value);
  };
  const handlePass2Change = (i) => {
    setPassword2Dirty(true);
    setPassword2(i.target.value);
  };
  const handleEmailChange = (e) => {
    setEmailDirty(true);
    setEmail(e.target.value);
  };
  const Reset = () => {
    setEmailDirty(true);
    setPasswordDirty(true);
    setPassword2Dirty(true);
    // if(passwordInp === passwordInp2 && passwordInp.length !==0 && passwordInp2.length !==0){
    //     alert("Your password is successfully changed")
    //     navigate('/')
    // }if(passwordInp.length !==0 && passwordInp2.length !==0 && passwordInp !== passwordInp2){
    //     alert('Your passwords are mismatched')
    // }else{

    // }
    dispatch(passwordChange({ passwordInp: passwordInp, email: email }));
    alert("Your password is successfully changed");
    navigate("/");
  };
  return (
    <div className="main-container">
      <div className="container3">
        {/* <form>   */}
        <div className="Detail">
          <label className="lb">Email*</label>{" "}
          <input
            className="sInput"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              handleEmailChange(e);
            }}
            value={email}
          />
          {!email.length && emailDirty && (
            <span className="validation">Email is Required</span>
          )}
          {!email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ) &&
            emailDirty &&
            email.length !== 0 && (
              <span className="validation">Your entered email is Invalid</span>
            )}
        </div>
        <div className="Detail">
          <label className="lb">New Password*</label>
          <input
            className="pInput"
            placeholder="Enter your New Password"
            value={passwordInp}
            type="password"
            onChange={(e) => {
              handlePassChange(e);
            }}
          />
          {!passwordInp.length && passwordDirty && (
            <span className="validation">Password is Required</span>
          )}
          {passwordInp.length !== 8 &&
            passwordDirty &&
            passwordInp.length !== 0 && (
              <span className="validation">
                Your Password should contain 8 digits
              </span>
            )}
          {!passwordInp.match(/\d/) &&
            passwordDirty &&
            passwordInp.length !== 0 && (
              <span className="validation">
                Your passwordInp should contain atleast one number
              </span>
            )}
          {!passwordInp.match(/[A-Z]/) &&
            passwordDirty &&
            passwordInp.length !== 0 && (
              <span className="validation">
                Your Password should contain a Capital letter
              </span>
            )}
          {!passwordInp.match(/[-+_!@#$%^&*.,() ?]/) &&
            passwordDirty &&
            passwordInp.length !== 0 && (
              <span className="validation">
                Your Password should contain a special character
              </span>
            )}
        </div>
        <div className="Detail">
          <label className="lb">Confirm new Password *</label>
          <input
            className="pInput"
            placeholder="Enter your New Password again"
            value={passwordInp2}
            type="password"
            onChange={(i) => {
              handlePass2Change(i);
            }}
          />
          {!passwordInp2.length && passwordInp2Dirty && (
            <span className="validation">Password is Required</span>
          )}
          {passwordInp2.length !== 8 &&
            passwordInp2Dirty &&
            passwordInp2.length !== 0 && (
              <span className="validation">
                Your Password should contain 8 digits
              </span>
            )}
          {!passwordInp2.match(/\d/) &&
            passwordInp2Dirty &&
            passwordInp2.length !== 0 && (
              <span className="validation">
                Your passwordInp should contain atleast one number
              </span>
            )}
          {!passwordInp2.match(/[A-Z]/) &&
            passwordInp2Dirty &&
            passwordInp2.length !== 0 && (
              <span className="validation">
                Your Password should contain a Capital letter
              </span>
            )}
          {!passwordInp2.match(/[-+_!@#$%^&*.,() ?]/) &&
            passwordInp2Dirty &&
            passwordInp2.length !== 0 && (
              <span className="validation">
                Your Password should contain a special character
              </span>
            )}
          {passwordInp !== passwordInp2 &&
            passwordInp2Dirty &&
            passwordInp2.length !== 0 &&
            passwordInp.length !== 0 && (
              <span className="validation">The passwords are mismatched</span>
            )}
        </div>

        <button onClick={Reset} className="btn">
          Reset Password
        </button>
        <div
          onClick={() => {
            navigate("/");
          }}
          className="moveToSignIn"
        >
          <span>Remembered? Go back</span>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Reset;
