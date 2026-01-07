import React, { useState } from "react";
import "../styles/dashboard.css";
import Dashboardbottom from "../pages/Dashboardbottom.jsx";

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("7d");

  const stats = {
    totalOrders: 573541,
    totalOrdersChangePercent: -1.2,
    totalOrdersChangeValue: -1273,
    totalCustomers: 104012,
    totalCustomersChangePercent: +9.3,
    totalCustomersChangeValue: +4234,
    returnRate: 3.8,
    returnRateChangePercent: +0.7,
    salesOverviewAmount: 23894,
    salesOverviewChangePercent: +3.2,
    salesOverviewChangeValue: +743,
  };

  const periods = ["1h", "1d", "7d", "1m", "3m", "1y"];

  return (
    <div className="dashboard-container">

      {/* SECTION 1 + SECTION 2: Blue background */}
      <div className="section blue-section">
        {/* TOTAL ORDERS */}
        <section className="top-stats">
          <div className="stat-card">
            <div className="stat-header">
              <span>Total Orders</span>
              <span className="dots">⋮</span>
            </div>
            <div className="stat-main">
              <h2>{stats.totalOrders.toLocaleString()}</h2>
              <span className="change negative">
                {stats.totalOrdersChangePercent}%
              </span>
            </div>
            <div className="stat-sub">
              Decreased by{" "}
              <span className="negative">
                {stats.totalOrdersChangeValue.toLocaleString()}
              </span>{" "}
              compared to the last period.
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span>Total Customers</span>
              <span className="dots">⋮</span>
            </div>
            <div className="stat-main">
              <h2>{stats.totalCustomers.toLocaleString()}</h2>
              <span className="change positive">
                +{stats.totalCustomersChangePercent}%
              </span>
            </div>
            <div className="stat-sub">
              Increased by{" "}
              <span className="positive">
                +{stats.totalCustomersChangeValue.toLocaleString()}
              </span>{" "}
              compared to the last period.
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span>Return Rate</span>
              <span className="dots">⋮</span>
            </div>
            <div className="stat-main">
              <h2>{stats.returnRate}%</h2>
            </div>
            <div className="stat-sub">
              Increased by{" "}
              <span className="positive">
                +{stats.returnRateChangePercent}%
              </span>{" "}
              compared to the last period.
            </div>
          </div>
        </section>

        {/* SALES OVERVIEW */}
        <section className="sales-overview">
          <div className="sales-info">
            <h4>Sales Overview</h4>
            <p>Quick insights into sales performance.</p>

            <div className="sales-amount">
              <span className="currency">$</span>
              <span className="amount">
                {stats.salesOverviewAmount.toLocaleString()}
              </span>
              <span className="percent positive">
                +{stats.salesOverviewChangePercent}%
              </span>
            </div>

            <div className="sales-change">
              Increased by{" "}
              <span className="positive">
                +${stats.salesOverviewChangeValue.toLocaleString()}
              </span>{" "}
              compared to the last period.
            </div>

            <div className="period-buttons">
              {periods.map((period) => (
                <button
                  key={period}
                  className={selectedPeriod === period ? "active" : ""}
                  onClick={() => setSelectedPeriod(period)}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          <div className="sales-chart">
            <svg viewBox="0 0 700 160" className="chart-svg">
              <defs>
                <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5DA9F9" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#5DA9F9" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0C6B4A" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#0C6B4A" stopOpacity="0" />
                </linearGradient>
              </defs>

              {[20, 60, 100, 140].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="700"
                  y2={y}
                  stroke="#ccc"
                  strokeDasharray="4 4"
                  strokeWidth="0.5"
                />
              ))}

              <path
                d="M0 85 Q100 40 200 100 T400 90 T600 70 T700 80"
                fill="url(#greenGradient)"
                stroke="#0C6B4A"
                strokeWidth="2"
              />
              <path
                d="M0 75 Q100 90 200 50 T400 90 T600 110 T700 100"
                fill="url(#blueGradient)"
                stroke="#5DA9F9"
                strokeWidth="2"
              />
            </svg>

            <div className="days-labels">
              <span>Monday</span>
              <span>Tuesday</span>
              <span>Wednesday</span>
              <span>Thursday</span>
              <span>Friday</span>
              <span>Saturday</span>
              <span>Sunday</span>
            </div>
          </div>
        </section>
      </div>

      {/* RECENT ORDERS / Dashboardbottom: Red background */}
      <div className="section red-section">
        <Dashboardbottom />
      </div>
    </div>
  );
};

export default Dashboard;
