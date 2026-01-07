import React from 'react';
import '../styles/Orders.css';
import boxImg from "../assets/box.png";
import Orderbottom from "../pages/Orderbottom"
const Order = () => {
  return (
    <div className="dashboard-container">
      {/* Top Row */}
      <div className="top-row">
        {/* Total Orders Card */}
        <div className="card total-orders-card">
          <div className="card-header card-header-02">
            <span>Total Orders</span>
            <span className="menu-dots">⋮</span>
          </div>
          <div className="card-content">
            <div className="main-stat">
              <h1>573,541 <span className="negative">-1.2%</span></h1>
              <p>Increased by <span className="negative">-1,273</span> compared to the last period.</p>
            </div>
            <div className="package-img">
         <img src={boxImg} alt="package" />

            </div>
          </div>
        </div>

        {/* Average Delivery Time Card */}
        <div className="card">
          <div className="card-header">
            <span>Average Delivery Time</span>
            <span className="menu-dots">⋮</span>
          </div>
          <div className="card-content-simple">
            <h1>3.2 <small>days</small> <span className="positive">+9.3%</span></h1>
            <p>Increased by <span className="positive">+0.7 days</span> compared to the last period.</p>
          </div>
        </div>

        {/* Order Volume Growth Card */}
        <div className="card">
          <div className="card-header">
            <span>Order Volume Growth</span>
            <span className="menu-dots">⋮</span>
          </div>
          <div className="card-content-simple">
            <h1>+8%</h1>
            <p>Increased by <span className="positive">+2%</span> this week.</p>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="bottom-row">
        {/* Average Shipping Distance Card */}
        <div className="card shipping-card">
          <div className="card-header">
            <span>Average Shipping Distance</span>
            <span className="menu-dots">⋮</span>
          </div>
          <div className="card-content-map">
            <h1>350 <small>miles</small> <span className="positive">+9.3%</span></h1>
            <p>Increased by <span className="positive">+4,234</span> compared to the last period.</p>
            <div className="map-bg"></div>
          </div>
        </div>

        {/* Order Breakdown Card */}
        <div className="card breakdown-card">
          <div className="card-header">
            <span>Order Breakdown</span>
            <span className="menu-dots">⋮</span>
          </div>
          <div className="breakdown-stats">
            <div className="stat-item">
              <p>Pending Orders</p>
              <h3>40,000 <span className="positive">+9.3%</span></h3>
            </div>
            <div className="stat-item">
              <p>Shipped Orders</p>
              <h3>380,000 <span className="positive">+2.4%</span></h3>
            </div>
            <div className="stat-item">
              <p>Cancelled Orders</p>
              <h3>5,500 <span className="negative">-1.2%</span></h3>
            </div>
            <div className="stat-item">
              <p>Delivered Orders</p>
              <h3>370,000 <span className="positive">+6.1%</span></h3>
            </div>
          </div>
          <div className="chart-area">
             {/* Simple representation of the wave chart using CSS gradients */}
             <div className="wave-chart"></div>
          </div>
        </div>
      </div>
      <Orderbottom />
    </div>
  );
};

export default Order;