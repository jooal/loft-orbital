import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";

export const SideNav = () => {
  return (
    <nav className="sidenav">
      <div className="logo">
        <h3>Loft Orbital</h3>
      </div>
      <ul className="menu">
        <li className="menu-item">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="menu-item">
          <Link to="/satellites">Satellites</Link>
        </li>
        <li className="menu-item">
          <Link to="/reports">Reports</Link>
        </li>
        <li className="menu-item">
          <Link to="/payloads">Payloads</Link>
        </li>
        <li className="menu-item">
          <Link to="/customers">Customers</Link>
        </li>
      </ul>
      <div className="sidenav-footer">
        <div className="help-center">Help Center</div>
        <div className="notifications">Notifications</div>
      </div>
    </nav>
  );
};
