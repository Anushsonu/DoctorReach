import "./App.css";
import { LoginPage } from "./components/LoginPage";
import { Dashboard } from "./components/Dashboard";
import { Appointments } from "./components/Appointments";
import { Route, Routes } from "react-router-dom";
import { React, useState } from "react";

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="container">
      {/* <LoginPage/>
      <Dashboard/> */}
      {/* <Appointments/> */}
      <Routes>
        <Route path="/" element={<LoginPage user={user} setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/appt" element={<Appointments />} />
      </Routes>
    </div>
  );
}

export default App;
