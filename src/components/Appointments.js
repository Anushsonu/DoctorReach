import React from "react";
import Navbar from "./Navbar/Navbar";
import { data } from "../APIS/Appointmentdata";
import Table from "./Table/Table";
import { UserAddOutlined } from "@ant-design/icons";

export function Appointments() {
  return (
    <div>
      <Navbar />
      <div className="appointments">
        <h1 className="appointments-header">Appointments</h1>

        <div className="booked-appointments">
          <span>List of booked appointments</span>
          <span>
            <button>
              Add <UserAddOutlined />
            </button>
          </span>
        </div>
        <div className="filter-appointments">
          <span className="search-appointments">
            <label>Search</label>
            <br></br>
            <input type="text" placeholder="Search by name, number"></input>
          </span>
          <span className="search-date">
            <label>Date</label>
            <br></br>
            <select placeholder="Select Unit Name">
              <option selected>This week</option>
              <option>Cardiology</option>
            </select>
          </span>
          <span className="search-consultation-type">
            <label>Consultation Type</label>
            <br></br>
            <select placeholder="Select Unit Name">
              <option selected>All</option>
              <option>Cardiology</option>
            </select>
          </span>
          <span className="search-status">
            <label>Status</label>
            <br></br>
            <select placeholder="Select Unit Name">
              <option selected>All</option>
              <option>Cardiology</option>
            </select>
          </span>
          <span className="search-invoice">
            <label>Invoice</label>
            <br></br>
            <select placeholder="Select Unit Name">
              <option selected>All</option>
              <option>Cardiology</option>
            </select>
          </span>
        </div>
        <Table data={data} />
      </div>
    </div>
  );
}

export default Appointments;
