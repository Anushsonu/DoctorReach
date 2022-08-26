import React, { useState, useEffect } from "react";
import { LayoutFilled } from "@ant-design/icons";
import { ContactsFilled } from "@ant-design/icons";
import { CalendarFilled } from "@ant-design/icons";
import { SettingFilled } from "@ant-design/icons";
import { ProfileFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { DollarCircleFilled } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import NavbarCss from "./Navbar.module.css";

export default function Navbar() {
  const [path, setPath] = useState();

  const loc = useLocation();
  useEffect(() => {
    setPath(loc.pathname);
  }, []);
  function checkClass(link) {
    return `navbar-icons ${link === path ? "navbarActive" : ""} `;
  }
  return (
    <nav className={NavbarCss.navbar}>
      <Link to="/dashboard">
        <LayoutFilled className={checkClass("/dashboard")} />
      </Link>
      <ContactsFilled className="navbar-icons" />
      <Link to="/appt">
        <CalendarFilled className={checkClass("/appt")} />
      </Link>
      <ProfileFilled className="navbar-icons" />

      <DollarCircleFilled className="navbar-icons" />
      <SettingFilled className="navbar-icons" />
    </nav>
  );
}
