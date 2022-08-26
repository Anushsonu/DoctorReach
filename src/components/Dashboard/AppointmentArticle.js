import React from "react";
import { QuestionCircleFilled } from "@ant-design/icons";
import { ExclamationCircleFilled } from "@ant-design/icons";
import p1 from "../../images/p1.jpg";
import p2 from "../../images/p2.jpg";
import p3 from "../../images/p3.jpg";
import p4 from "../../images/p4.jpg";
import { VideoCameraFilled } from "@ant-design/icons";
import { ThunderboltFilled } from "@ant-design/icons";
import { MessageFilled } from "@ant-design/icons";
import { data } from "../../APIS/Appointmentdata";
import { EyeFilled } from "@ant-design/icons";

export function AppointmentArticle() {
  return (
    <div className="appointment-article">
      <div className="appointments-header">
        <h3>APPOINTMENTS</h3>
        <QuestionCircleFilled />
      </div>
      <div className="appointments-content">
        <div className="content">
          <div className="waiting-queue">
            <div>waiting queue(6)</div>
            <div className="viewQueue">View Queue</div>
          </div>
          <div className="appointment-person">
            <span className="img-name">
              <img src={p1}></img>
              <span className="name">
                {data[0].details.name}
                <br></br>
                <VideoCameraFilled />
                {data[0].consultation.type}
                <span className="appointment-time"> &#183; 2:20 pm</span>
              </span>
            </span>
            <span className="appointment-status">
              <p className="tobeFinalized">To be finalized</p>
            </span>
          </div>
          <div className="appointment-person">
            <span className="img-name">
              <img src={p2}></img>
              <span className="name">
                {data[1].details.name}
                <br></br>
                <MessageFilled />
                {data[1].consultation.type}{" "}
                <span className="appointment-time">&#183; 2:30 pm</span>
              </span>
            </span>
            <span className="appointment-status">
              {" "}
              <p>
                <ExclamationCircleFilled /> waiting &#183; 40 min
              </p>
            </span>
          </div>
          <div className="appointment-person">
            <span className="img-name">
              <img src={p3}></img>
              <span className="name">
                {data[2].details.name}
                <br></br>
                <ThunderboltFilled />
                {data[2].consultation.type}
                <span className="appointment-time"> &#183; 2:40 pm</span>
              </span>
            </span>
            <span className="appointment-status">
              <p>
                <ExclamationCircleFilled /> waiting &#183; 40 min
              </p>
            </span>
          </div>
          <div className="appointment-person last-person">
            <span className="img-name">
              <img src={p4}></img>
              <span className="name">
                {data[3].details.name}
                <br></br>
                <VideoCameraFilled />
                {data[3].consultation.type}
                <span className="appointment-time"> &#183; 2:40 pm</span>
              </span>
            </span>
            <span className="appointment-status">
              <p>
                <ExclamationCircleFilled /> waiting &#183; 40 min
              </p>
            </span>
          </div>
          <div className="view-all-appointments">
            View all appointments <EyeFilled />
          </div>
        </div>
      </div>
    </div>
  );
}
