import React from "react";
import { EditOutlined } from "@ant-design/icons";
import { VideoCameraFilled } from "@ant-design/icons";
import { ThunderboltFilled } from "@ant-design/icons";
import { MessageFilled } from "@ant-design/icons";
import Tablecss from "./Tabelcss.module.css";

export default function Table(props) {
  const { data } = props;
  // console.log(data);
  function renderConsultation(data) {
    const { type, text } = data;
    let Comp;
    switch (type) {
      case "VIDEO":
        console.log(123);
        Comp = <VideoCameraFilled />;
        break;
      case "Anytime Consult":
        Comp = ThunderboltFilled;
        break;
      case "IN_PERSON":
        Comp = MessageFilled;
        break;
      default:
        Comp = VideoCameraFilled;
        break;
    }
    return (
      <td>
        <span className={Tablecss.consultationIcon}>
          <Comp />
        </span>
        {type}
        <br></br>
        <p>{text}</p>
      </td>
    );
  }

  function renderInvoice(data) {
    // console.log(data);
    let cssData;
    const element = data;
    console.log(element);
    switch (data) {
      case "Unpaid":
        cssData = Tablecss.unpaid;
        break;
      case "Paid":
        cssData = Tablecss.paid;
        break;
      case "Refunded":
        cssData = Tablecss.refunded;
    }
    return (
      <td className={cssData}>
        <p className={Tablecss.invoice}>{data}</p>
      </td>
    );
  }

  return (
    <div className="appointments-table">
      <table>
        <tr>
          <th>ORDER ID</th>
          <th>PATIENT</th>
          <th>CONSULTATION</th>
          <th>TEAM</th>
          <th>DOCTOR</th>
          <th>SLOT</th>
          <th>STATUS</th>
          <th>INVOICE</th>
          <th>ACTION</th>
        </tr>
        {data.map((el) => (
          <tr>
            <td>{el.orderId}</td>
            <td style={{ color: "skyblue" }}>
              {el.details.name}
              <br></br>
              <p
                style={{ color: "black" }}
              >{`${el.details.age} , ${el.details.gender}`}</p>
            </td>
            {renderConsultation(el.consultation)}

            <td>{el.team}</td>
            <td>{el.doctor}</td>
            <td>
              {el.slot.date}
              <br></br>
              {el.slot.time}
            </td>
            {/* {renderStatus(el.status)} */}
            <td>{el.status}</td>
            {renderInvoice(el.invoice)}
            <td>
              <EditOutlined />
            </td>
          </tr>
        ))}

        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
      </table>
    </div>
  );
}
