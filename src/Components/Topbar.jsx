import React from "react";
import "../styles/topbar.css";
import search from "../assets/search.svg";
import bell from "../assets/bell.svg";
import avatar from "../assets/profile.svg";

const Topbar = () => {
  return (
   <div className="topbar">
  <div className="topbar-left">
    <h2>Dashboard</h2>
    <p>Get an at-a-glance view of your sales performance, key metrics, and business insights all in one place</p>
  </div>

  <div className="topbar-right">
    <img src={search} alt="search" className="icon search-icon" />
    <img src={bell} alt="notifications" className="icon bell-icon" />
    <div className="profile">
      <img src={avatar} alt="avatar" className="profile-img" />
      <div className="profile-info">
        <h4>Jacob Farrel</h4>
        <p>jacobfarrel@gmail.com</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Topbar;
