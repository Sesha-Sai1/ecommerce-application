import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../store/AuthenticationSlice";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [firstNameDirty, setFirstNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [gender, setGender] = useState("");
  const [genderDirty, setGenderDirty] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile);

  const handleEmailChange = (e) => {
    setEmailDirty(true);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordDirty(true);
    setPassword(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastNameDirty(true);
    setLastName(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstNameDirty(true);
    setFirstName(e.target.value);
  };

  const handleGenderChange = (e) => {
    console.log(e);
    setGenderDirty(true);
    setGender(e.target.value);
  };

  if (user) {
    console.log("line 41", user);
  }

  const moveToSignIn = () => {
    setEmailDirty(true);
    setPasswordDirty(true);
    setLastNameDirty(true);
    setFirstNameDirty(true);
    setGenderDirty(true);

    if (
      firstName.length !== 0 &&
      lastname.length !== 0 &&
      email.length !== 0 &&
      password.length === 8 &&
      password.match(/\d/) &&
      password.match(/[A-Z]/) &&
      password.match(/[-+_!@#$%^&*.,() ?]/) &&
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) &&
      gender.length !== 0
    ) {
      alert("Your account is created successfully");
      dispatch(
        createUser({
          firstName: firstName,
          lastName: lastname,
          email: email,
          password: password,
          gender: gender,
        })
      );
      navigate("/");
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <div className="main-container">
      <div className="container2">
        <h2>Sign Up</h2>
        <div className="Detail">
          <div className="lb">
            <label>First Name*</label>
          </div>
          <input
            className="sInput"
            type="text"
            placeholder="Enter your First name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          {!firstName.length && firstNameDirty && (
            <span className="validation">Firstname is empty</span>
          )}
        </div>
        <div className="Detail">
          <div className="lb">
            <label>Last Name*</label>
          </div>
          <input
            className="sInput"
            type="text"
            placeholder="Enter your Last name"
            value={lastname}
            onChange={handleLastNameChange}
          />
          {!lastname.length && lastNameDirty && (
            <span className="validation">Lastname is empty</span>
          )}
        </div>
        <div className="radio">
          <label>Gender*</label>
        </div>
        <div>
          <input
            type="radio"
            value="male"
            name="gender"
            onChange={handleGenderChange}
          />
          Male
          <input
            type="radio"
            value="female"
            name="gender"
            onChange={handleGenderChange}
          />
          Female
          {!gender.length && genderDirty && (
            <span className="validation">Gender is required</span>
          )}
        </div>
        <div className="Detail">
          <label className="lb">Email*</label>
          <input
            className="sInput"
            type="email"
            placeholder="Enter your email"
            onChange={handleEmailChange}
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
          <label className="lb">Password*</label>
          <input
            className="sInput"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          {!password.length && passwordDirty && (
            <span className="validation">Password is empty</span>
          )}
          {!password.match(/\d/) && passwordDirty && password.length !== 0 && (
            <span className="validation">
              Your password should contain at least one number
            </span>
          )}
          {password.length !== 8 && passwordDirty && password.length !== 0 && (
            <span className="validation">
              Your Password should contain 8 digits
            </span>
          )}
          {!password.match(/[A-Z]/) &&
            passwordDirty &&
            password.length !== 0 && (
              <span className="validation">
                Your Password should contain a Capital letter
              </span>
            )}
          {!password.match(/[-+_!@#$%^&*.,() ?]/) &&
            passwordDirty &&
            password.length !== 0 && (
              <span className="validation">
                Your Password should contain a special character
              </span>
            )}
        </div>
        <button onClick={moveToSignIn} className="btn1">
          Create Account
        </button>
        <div
          onClick={() => {
            navigate("/");
          }}
          className="moveToSignIn"
          style={{ color: "black" }}
        >
          Do You have an account ?
          <span>
            <b>Sign In</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
