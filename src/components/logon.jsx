import React, { useState } from "react";
import * as firebase from "firebase";

const Logon = () => {
  // hooks to create the Email and Password State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        //If there is an error message, throw it in the console
        console.log(
          "Error Code: " + errorCode + "\nError Message: " + errorMessage
        );
      });
  };

  // updating the state of the email
  const changeEmail = change => {
    setEmail(change.target.value);
  };

  // updating the state of the password
  const changePassword = change => {
    setPassword(change.target.value);
  };

  return (
    <div>
      <h2>BugTracker</h2>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="email"
          value={email}
          placeholder="name@place.com"
          onChange={changeEmail}
          name="email"
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={changePassword}
          name="password"
        />
        <br />
        <input type="submit" value="Log On" />
      </form>
    </div>
  );
};

export default Logon;
