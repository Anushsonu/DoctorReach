import React from "react";
import { AppointmentArticle } from "../components/Dashboard/AppointmentArticle";
import { ActivityArticle } from "../components/Dashboard/ActivityArticle";
import Navbar from "./Navbar/Navbar";
import { ConsultationHistory } from "../components/Dashboard/ConsultationHistory";
import { Schedule } from "../components/Dashboard/Schedule";

export const Dashboard = (props) => {
  return (
    <div>
      <header className="appointment-header">
        <h1>Welcome {props.user}</h1>
        <p>Cardiology</p>
      </header>
      <Navbar />

      <div className="earnings-top">
        <span>
          Total earnings<br></br>&#8377;4000
        </span>
        <span>
          <label for="hospital">Unit</label>
          <br></br>
          <select id="hospital">
            <option>PRK Hospital</option>
          </select>
        </span>

        <span>
          <label for="days">Time Duration</label>
          <br></br>
          <select id="days">
            <option>Last 7 days</option>
          </select>
        </span>
      </div>
      <div className="appointment-numbers">
        <span className="earning-values">
          Appointments<br></br>
          <span className="numbers">54</span>
        </span>
        <span className="earning-values">
          EMR Finalised<br></br>
          <span className="numbers">47</span>
        </span>
        <span className="earning-values">
          Patient Registrations<br></br>
          <span className="numbers">120</span>
        </span>
        <span className="earning-values">
          KR4ALL<br></br>
          <span className="numbers">30</span>
        </span>
      </div>
      <ActivityArticle />
      <AppointmentArticle />
      <Schedule />
      <ConsultationHistory />
    </div>
  );
};
