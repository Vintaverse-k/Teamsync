import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/sidebar.css";

import logo from "../assets/logo.svg";
import dashboard from "../assets/dashboard.svg";
import order from "../assets/order.svg";
import sales from "../assets/sales.svg";
import message from "../assets/message.svg";
import customer from "../assets/customer.svg";
import product from "../assets/product.svg";
import marketing from "../assets/marketing.svg";
import shipping from "../assets/ship.svg";
import finance from "../assets/finance.svg";
import marketplace from "../assets/connect.svg";
import help from "../assets/help.svg";
import settings from "../assets/setting.svg";
import toggleIcon from "../assets/toparrow.svg";
import lightIcon from "../assets/light.svg";
import darkIcon from "../assets/dark.svg";

const Sidebar = ({ theme, setTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [managementOpen, setManagementOpen] = useState(true);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <img src={logo} alt="logo" />
        <div>
          <h4>TeamSync</h4>
          <p>Semusim Visual Team</p>
        </div>
      </div>

      {/* TOP CONTENT */}
      <div className="top-content">
        <ul className="menu">
          <li className={isActive("/") ? "active" : ""}>
            <button onClick={() => navigate("/")}>
              <img src={dashboard} alt="" /> Dashboard
            </button>
          </li>

          <li className={isActive("/orders") ? "active" : ""}>
            <button onClick={() => navigate("/orders")}>
              <img src={order} alt="" /> My Order
            </button>
          </li>

          <li className={isActive("/sales") ? "active" : ""}>
            <button onClick={() => navigate("/sales")}>
              <img src={sales} alt="" /> Sales Performances
            </button>
          </li>

          <li className={isActive("/messages") ? "active" : ""}>
            <button onClick={() => navigate("/messages")}>
              <img src={message} alt="" /> Messages
            </button>
          </li>
        </ul>

        {/* MANAGEMENT */}
        <div className="management-header">
          <p className="section">MANAGEMENT</p>
          <img
            src={toggleIcon}
            className="toggle-icon"
            alt="toggle"
            onClick={() => setManagementOpen(!managementOpen)}
          />
        </div>

        {managementOpen && (
          <ul className="menu">
            <li className={isActive("/customers") ? "active" : ""}>
              <button onClick={() => navigate("/customers")}>
                <img src={customer} alt="" /> Customer
              </button>
            </li>

            <li className={isActive("/products") ? "active" : ""}>
              <button onClick={() => navigate("/products")}>
                <img src={product} alt="" /> Product
              </button>
            </li>

            <li className={isActive("/marketing") ? "active" : ""}>
              <button onClick={() => navigate("/marketing")}>
                <img src={marketing} alt="" /> Marketing
              </button>
            </li>

            <li className={isActive("/shipping") ? "active" : ""}>
              <button onClick={() => navigate("/shipping")}>
                <img src={shipping} alt="" /> Shipping
              </button>
            </li>

            <li className={isActive("/finance") ? "active" : ""}>
              <button onClick={() => navigate("/finance")}>
                <img src={finance} alt="" /> Finance
              </button>
            </li>

            <li className={isActive("/marketplace") ? "active" : ""}>
              <button onClick={() => navigate("/marketplace")}>
                <img src={marketplace} alt="" /> Connected Marketplace
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* BOTTOM MENU */}
      <div className="bottom">
        <li className={isActive("/help") ? "active" : ""}>
          <button onClick={() => navigate("/help")}>
            <img src={help} alt="" /> Help Center
          </button>
        </li>

        <li className={isActive("/settings") ? "active" : ""}>
          <button onClick={() => navigate("/settings")}>
            <img src={settings} alt="" /> Settings
          </button>
        </li>

        <div className="theme-toggle">
          <button
            className={theme === "light" ? "active" : ""}
            onClick={() => setTheme("light")}
          >
            <img src={lightIcon} alt="" /> Light
          </button>

          <button
            className={theme === "dark" ? "active" : ""}
            onClick={() => setTheme("dark")}
          >
            <img src={darkIcon} alt="" /> Dark
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
