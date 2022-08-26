import React from "react";
import { BellFilled } from "@ant-design/icons";
import { SettingTwoTone } from "@ant-design/icons";
import Prkhospital from "../../images/prkhospital.jpeg";

export function ActivityArticle() {
  return (
    <div className="activity-article">
      <div className="hospital-logo">
        <img src={Prkhospital}></img>
      </div>
      <div className="activity-icon">
        <BellFilled />
        <span> ACTIVITY</span>
      </div>
      <div className="activity">
        <p>
          User Activity &#183; <span className="activity-time">12:32</span>
        </p>
        <p>Vivek Kumar accepted the invitation</p>
      </div>
      <div className="activity">
        <span>
          User Activity &#183;<span className="activity-time">8:16</span>
        </span>
        <p>Ritu M, blocked their calender for 15th Septmber</p>
      </div>
      <div className="activity">
        <p>
          Summary &#183;<span className="activity-time">8:00</span>
        </p>
        <p>This is my summary for this particular project</p>
      </div>
      <div className="activity">
        <p>
          Application update &#183;
          <span className="activity-time">yesterday</span>
        </p>
        <p>This is my summary for this particular project</p>
      </div>
      <div className="activity">
        <p>
          User Activity &#183;<span className="activity-time">2 days ago</span>
        </p>
        <p>Vivek Kumar accepted the invitation</p>
      </div>
    </div>
  );
}
