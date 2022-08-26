import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/doctor.svg";
export function LoginPage(props) {
  return (
    <div className="container">
      <div className="left">
        <div className="welcome">
          <h2>Welcome to Doctoreach</h2>
          <p>
            Get ahead of the curve. Join the next generation of health heros.
          </p>
          <img src={Image}></img>
        </div>
      </div>
      <div className="right">
        <div className="form">
          <h2>Sign-in to your account</h2>
          <form className="formContent">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => props.setUser(e.target.value)}
            ></input>
            <input type="password" placeholder="Password"></input>
            <select placeholder="Select Unit Name">
              <option selected>Select Unit Name</option>
              <option>Cardiology</option>
            </select>
            <Link to="/dashboard">
              <button className="signIn">Sign in</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
