import React, { useState, useRef, useEffect } from "react";
import "../styles/topbar.css";
import search from "../assets/search.svg";
import bell from "../assets/bell.svg";
import avatar from "../assets/Profile.svg";
import topArrow from "../assets/toparrow.svg";
import closeIcon from "../assets/close.svg";

import companyIcon from "../assets/Profile.svg";
import helpIcon from "../assets/help.svg";
import settingsIcon from "../assets/setting.svg";
import logoutIcon from "../assets/logout.svg";

// sample notification icons
import orderIcon from "../assets/neworder.svg";
import messageIcon from "../assets/mesage.svg";
import reportIcon from "../assets/refund.svg";
import meetingIcon from "../assets/mesage.svg";
import passwordIcon from "../assets/mesage.svg";
import profileIcon from "../assets/product1.svg";

const Topbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("today");
  const [seeAllOpen, setSeeAllOpen] = useState(false);
  const [seeAllTab, setSeeAllTab] = useState("today");

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setNotificationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

const notifications = {
  today: [
    { id: 1, text: "New order received", icon: orderIcon },
    { id: 2, text: "New message from John", icon: messageIcon },
  ],
  thisWeek: [
    { id: 3, text: "Sales report ready", icon: reportIcon },
    { id: 4, text: "Meeting reminder", icon: meetingIcon },
  ],
  earlier: [
    { id: 5, text: "Password updated", icon: passwordIcon },
    { id: 6, text: "Profile picture changed", icon: profileIcon },
  ],
};



  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <h2>Dashboard</h2>
          <p>
            Get an at-a-glance view of your sales performance, key metrics, and
            business insights all in one place
          </p>
        </div>

        <div className="topbar-right">
          <img src={search} alt="search" className="icon search-icon" />

          {/* Notification */}
          <div className="notification" ref={notificationRef}>
            <img
              src={bell}
              alt="notifications"
              className="icon bell-icon"
              onClick={() => setNotificationOpen(!notificationOpen)}
            />

            {notificationOpen && (
              <div className="notification-dropdown">
                <div className="notification-header">
                  <h4>Notification</h4>
                  <span
                    className="see-all-btn"
                    onClick={() => {
                      setSeeAllOpen(true);
                      setSeeAllTab(activeTab);
                    }}
                  >
                    See All
                  </span>
                </div>

                <div className="notification-tabs">
                  <button
                    className={activeTab === "today" ? "active" : ""}
                    onClick={() => setActiveTab("today")}
                  >
                    Today
                  </button>
                  <button
                    className={activeTab === "thisWeek" ? "active" : ""}
                    onClick={() => setActiveTab("thisWeek")}
                  >
                    This Week
                  </button>
                  <button
                    className={activeTab === "earlier" ? "active" : ""}
                    onClick={() => setActiveTab("earlier")}
                  >
                    Earlier
                  </button>
                </div>

                <div className="notification-list">
                  {notifications[activeTab].map((n) => (
                    <div key={n.id} className="notification-item">
                      <img src={n.icon} alt="icon" />
                      <span>{n.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="profile" ref={profileRef}>
            <div
              className="profile-main"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <div className="profile-left">
                <img src={avatar} alt="avatar" className="profile-img" />
                <div className="profile-info">
                  <h4>Jacob Farrel</h4>
                  <p>jacobfarrel@gmail.com</p>
                </div>
              </div>

              <img
                src={topArrow}
                alt="toggle"
                className={`profile-toggle-icon ${profileOpen ? "open" : ""}`}
              />
            </div>

            {profileOpen && (
              <div className="profile-bottom-sheet">
                <div className="profile-info-sheet">
                  <img
                    src={companyIcon}
                    alt="Company"
                    className="company-icon"
                  />
                  <div>
                    <p className="name">Jacob Farrel</p>
                    <p className="email">jacobfarrel@gmail.com</p>
                  </div>
                </div>

                <ul className="profile-menu">
                  <li>
                    <img src={helpIcon} alt="Help" />
                    <span>Help</span>
                  </li>
                  <li>
                    <img src={settingsIcon} alt="Settings" />
                    <span>Settings</span>
                  </li>
                  <li>
                    <img src={logoutIcon} alt="Logout" />
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Half-screen See All Panel */}
      {seeAllOpen && (
        <div className="notification-fullscreen">
          <div
            className="notification-backdrop"
            onClick={() => setSeeAllOpen(false)}
          ></div>

          <div className="notification-panel">
            <div className="panel-header">
              <h3>All Notifications</h3>
              <img
                src={closeIcon}
                alt="Close"
                className="close-panel"
                onClick={() => setSeeAllOpen(false)}
              />
            </div>

            {/* Tabs same as dropdown */}
            <div className="notification-tabs">
              <button
                className={seeAllTab === "today" ? "active" : ""}
                onClick={() => setSeeAllTab("today")}
              >
                Today
              </button>
              <button
                className={seeAllTab === "thisWeek" ? "active" : ""}
                onClick={() => setSeeAllTab("thisWeek")}
              >
                This Week
              </button>
              <button
                className={seeAllTab === "earlier" ? "active" : ""}
                onClick={() => setSeeAllTab("earlier")}
              >
                Earlier
              </button>
            </div>

            <div className="notification-list">
              {notifications[seeAllTab].map((n) => (
                <div key={n.id} className="notification-item">
                  <img src={n.icon} alt="icon" />
                  <span>{n.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Topbar;
