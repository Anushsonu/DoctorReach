import React from "react";
import { BellFilled } from "@ant-design/icons";
import { data } from "../../APIS/ActivityData";
import { SettingTwoTone } from "@ant-design/icons";
import ManageAccountsTwoToneIcon from "@mui/icons-material/ManageAccountsTwoTone";
import Prkhospital from "../../images/prkhospital.jpeg";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AssignmentTwoToneIcon from "@mui/icons-material/AssignmentTwoTone";
import InventoryTwoToneIcon from "@mui/icons-material/InventoryTwoTone";
import NotificationsActiveTwoToneIcon from "@mui/icons-material/NotificationsActiveTwoTone";

export function ActivityArticle(props) {
  const { data } = props;
  function renderActivityType(data) {
    console.log(data);
    if (data === "Summary") {
      return (
        <span className="current-activity">
          <AssignmentTwoToneIcon />
        </span>
      );
    } else if (data === "Application Update") {
      return (
        <span className="current-activity">
          <InventoryTwoToneIcon />
        </span>
      );
    } else
      return (
        <span className="current-activity">
          <ManageAccountsTwoToneIcon />
        </span>
      );
  }
  return (
    <div className="activity-article">
      <div className="hospital-logo">
        <img src={Prkhospital}></img>
      </div>
      <div className="activity-icon">
        <BellFilled />
        <span> ACTIVITY</span>
      </div>
      {data.map((el) => (
        <div className="activity">
          {renderActivityType(el.type)}
          <span className="current-activity-summary">
            <span className="activity-time">{el.type} &#183;8:00</span>
            <span>{el.name} is my summary for this particular project</span>
          </span>
        </div>
      ))}
      {/* <div className="activity">
        <span className="current-activity">
          <ManageAccountsTwoToneIcon />
        </span>
        <span className="current-activity-summary">
          <span className="activity-time">Summary &#183;8:00</span>
          <span>
            {" "}
            {props.data.name} is my summary for this particular project
          </span>
        </span>
      </div> */}
    </div>
  );
}
