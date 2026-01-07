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
import sidebaricon from "../assets/sidebaricon.svg";
import lightIcon from "../assets/light.svg";
import darkIcon from "../assets/dark.svg";

const Sidebar = ({ theme, setTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [managementOpen, setManagementOpen] = useState(true);
  const [collapsed, setCollapsed] = useState(false); //  NEW

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Header */}
      <div className="sidebar-header">
{!collapsed && <img src={logo} alt="logo" className="sidebar-logo" />}



        {!collapsed && (
          <div>
            <h4>TeamSync</h4>
            <p>Semusim Visual Team</p>
          </div>
        )}

        {/*  NEW COLLAPSE ICON */}
        <img
          src={sidebaricon}
          alt="toggle"
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>

      {/* TOP CONTENT */}
      <div className="top-content">
        <ul className="menu">
          <li className={isActive("/") ? "active" : ""}>
            <button onClick={() => navigate("/")}>
              <img src={dashboard} alt="" />
              {!collapsed && <span>Dashboard</span>}
            </button>
          </li>

          <li className={isActive("/orders") ? "active" : ""}>
            <button onClick={() => navigate("/orders")}>
              <img src={order} alt="" />
              {!collapsed && <span>My Order</span>}
            </button>
          </li>

          <li className={isActive("/sales") ? "active" : ""}>
            <button onClick={() => navigate("/sales")}>
              <img src={sales} alt="" />
              {!collapsed && <span>Sales Performances</span>}
            </button>
          </li>

          <li className={isActive("/messages") ? "active" : ""}>
            <button onClick={() => navigate("/messages")}>
              <img src={message} alt="" />
              {!collapsed && <span>Messages</span>}
            </button>
          </li>
        </ul>

        {/* MANAGEMENT */}
        {!collapsed && (
          <div className="management-header">
            <p className="section">MANAGEMENT</p>
            <img
              src={toggleIcon}
              className="toggle-icon"
              alt="toggle"
              onClick={() => setManagementOpen(!managementOpen)}
            />
          </div>
        )}

        {managementOpen && (
          <ul className="menu">
            <li className={isActive("/customers") ? "active" : ""}>
              <button onClick={() => navigate("/customers")}>
                <img src={customer} alt="" />
                {!collapsed && <span>Customer</span>}
              </button>
            </li>

            <li className={isActive("/products") ? "active" : ""}>
              <button onClick={() => navigate("/products")}>
                <img src={product} alt="" />
                {!collapsed && <span>Product</span>}
              </button>
            </li>

            <li className={isActive("/marketing") ? "active" : ""}>
              <button onClick={() => navigate("/marketing")}>
                <img src={marketing} alt="" />
                {!collapsed && <span>Marketing</span>}
              </button>
            </li>

            <li className={isActive("/shipping") ? "active" : ""}>
              <button onClick={() => navigate("/shipping")}>
                <img src={shipping} alt="" />
                {!collapsed && <span>Shipping</span>}
              </button>
            </li>

            <li className={isActive("/finance") ? "active" : ""}>
              <button onClick={() => navigate("/finance")}>
                <img src={finance} alt="" />
                {!collapsed && <span>Finance</span>}
              </button>
            </li>

            <li className={isActive("/marketplace") ? "active" : ""}>
              <button onClick={() => navigate("/marketplace")}>
                <img src={marketplace} alt="" />
                {!collapsed && <span>Connected Marketplace</span>}
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* BOTTOM MENU (HELP NOT REMOVED ) */}
      <div className="bottom">
        <li className={isActive("/help") ? "active" : ""}>
          <button onClick={() => navigate("/help")}>
            <img src={help} alt="" />
            {!collapsed && <span>Help Center</span>}
          </button>
        </li>

        <li className={isActive("/settings") ? "active" : ""}>
          <button onClick={() => navigate("/settings")}>
            <img src={settings} alt="" />
            {!collapsed && <span>Settings</span>}
          </button>
        </li>

        {!collapsed && (
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
        )}
      </div>
    </div>
  );
};

export default Sidebar;
