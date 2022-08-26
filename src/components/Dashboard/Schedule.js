import React from "react";
import { ThunderboltFilled } from "@ant-design/icons";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { QuestionCircleFilled } from "@ant-design/icons";
import { VideoCameraFilled } from "@ant-design/icons";
import { StopFilled } from "@ant-design/icons";
import { MessageFilled } from "@ant-design/icons";
import { EyeFilled } from "@ant-design/icons";

export function Schedule() {
  return (
    <div className="schedule">
      <div className="schedule-header">
        <h3>SCHEDULE</h3>
        <QuestionCircleFilled />
      </div>
      <div className="schedule-anytime">
        <span className="receive">Receive</span> <ThunderboltFilled /> Anytime
        <span className="exc">
          <span> </span>
          <ExclamationCircleFilled />
        </span>
        <span>
          <input type="radio" />
        </span>
      </div>
      <div className="schedule-day">TODAY &#183; MONDAY</div>
      <div className="schedule-timing">
        <span>9:00 AM - 9:40 AM &#183; 40 minutes</span>
        <span>
          <ThunderboltFilled /> Anytime
        </span>
      </div>
      <div className="schedule-timing">
        <span>3:30 PM - 7:30 PM &#183; 4 hours</span>
        <span>
          <VideoCameraFilled /> Video
        </span>
      </div>

      <div className="schedule-day">TOMORROW &#183; TUESDAY</div>
      <div className="schedule-timing">
        <span>9:00 AM - 9:40 AM &#183; 40 minutes</span>
        <span>
          <MessageFilled /> In-person
        </span>
      </div>
      <div className="schedule-timing">
        <span>12:30 Pm- 6:30 PM &#183; 6 hours</span>
        <span>
          <ThunderboltFilled /> Anytime
        </span>
      </div>
      <div className="schedule-timing-block">
        <span>6:30 PM- 9:00 PM &#183; 30 minutes</span>
        <span className="schedule-status">
          <StopFilled /> Block
        </span>
      </div>

      <div className="schedule-day wednesday">WEDNESDAY</div>
      <div className="view-all-schedule">
        View all schedule <EyeFilled />
      </div>
    </div>
  );
}
