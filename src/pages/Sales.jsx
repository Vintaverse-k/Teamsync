import React, { useState } from "react";
import "../styles/Sales.css";
import Dashboardbottom from "../pages/Dashboardbottom.jsx";
import orderChart from '../assets/salechart.png';
import AiIcon from '../assets/ai.svg';
import Dot from '../assets/3dot.svg';
import Icon1 from '../assets/ai.svg';
import Icon2 from '../assets/ai.svg';
import Icon3 from '../assets/ai.svg';
import TopIcon1 from '../assets/3dot.svg';
import TopIcon2 from '../assets/3dot.svg';
import TopIcon3 from '../assets/3dot.svg';
import Icon4 from '../assets/increase.svg';
import Icon5 from '../assets/review.svg';
import Icon6 from '../assets/expend.svg';
import Icon7 from '../assets/salesby.png';
import Icon8 from '../assets/inventory.png';

const Sales = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("7d");

  const stats = {
    totalRevenue: 573541,
    totalRevenueChangePercent: -1.2,
    totalRevenueChangeValue: -1273,
    avgOrderValue: 104012,
    avgOrderValueChangePercent: +9.3,
    avgOrderValueChangeValue: +4234,
    conversionRate: 3.8,
    conversionRateChangePercent: +0.7,
    customerAcquisition: 5210,
    customerAcquisitionChangePercent: +5.5,
  };

  return (
    <div className="dashboard-container-01">

      {/* TOP STATS CARDS */}
      <div className="top-stats-01" style={{ display: "flex", gap: "24px" }}>
        {/* CARD 1 */}
        <div className="stat-card-01">
          <div className="stat-header-01">
            <span>Total Revenue</span>
            <span className="dots-01">⋮</span>
          </div>
          <div className="stat-main-01">
            <h2>${stats.totalRevenue.toLocaleString()}</h2>
            <span className={`change-01 ${stats.totalRevenueChangePercent < 0 ? "negative-01" : "positive-01"}`}>
              {stats.totalRevenueChangePercent}%
            </span>
          </div>
          <div className="stat-sub-01">
            Decreased by <span className="negative-01">${stats.totalRevenueChangeValue.toLocaleString()}</span> compared to last period.
          </div>
        </div>

        {/* CARD 2 */}
        <div className="stat-card-01">
          <div className="stat-header-01">
            <span>Average Order Value</span>
            <span className="dots-01">⋮</span>
          </div>
          <div className="stat-main-01">
            <h2>${stats.avgOrderValue.toLocaleString()}</h2>
            <span className="change-01 positive-01">+{stats.avgOrderValueChangePercent}%</span>
          </div>
          <div className="stat-sub-01">
            Increased by <span className="positive-01">${stats.avgOrderValueChangeValue.toLocaleString()}</span> compared to last period.
          </div>
        </div>

        {/* CARD 3 */}
        <div className="stat-card-01">
          <div className="stat-header-01">
            <span>Conversion Rate</span>
            <span className="dots-01">⋮</span>
          </div>
          <div className="stat-main-01">
            <h2>{stats.conversionRate}%</h2>
          </div>
          <div className="stat-sub-01">
            Increased by <span className="positive-01">{stats.conversionRateChangePercent}%</span> compared to last period.
          </div>
        </div>

        {/* CARD 4 */}
        <div className="stat-card-01">
          <div className="stat-header-01">
            <span>Customer Acquisition Cost</span>
            <span className="dots-01">⋮</span>
          </div>
          <div className="stat-main-01">
            <h2>${stats.customerAcquisition.toLocaleString()}</h2>
            <span className="change-01 positive-01">+{stats.customerAcquisitionChangePercent}%</span>
          </div>
          <div className="stat-sub-01">
            Increased compared to last period.
          </div>
        </div>
      </div>

      {/* SALES GRAPH + Right Side Card */}
      <div className="sales-page-container">
        <div className="sales-graph-container">
          {/* Left: Sales Graph */}
          <div className="sales-graph-section-01">
            <div className="sales-chart-01">
              <img src={orderChart} alt="Sales Graph" className="chart-svg-01" />
            </div>
          </div>

          {/* Right Side Card */}
          <div className="sales-card-02">
            <div className="card-header-02">
              <h3>AI Insight</h3>
              <img src={Dot} alt="Header Icon" className="card-header-icon-02" />
            </div>

            <p className="card-description-02">
              Summary of sales metrics for the current week.
            </p>

            {/* Row 1 */}
            <div className="card-row-02">
              <div className="card-row-left-02">
                <img src={AiIcon} alt="Header Icon" className="card-header-icon-02" />
                <p> Revenue is growing <span className="card-row-right-02"> 12.8% faster</span></p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="card-row-02">
              <div className="card-row-left-02">
                <img src={AiIcon} alt="Header Icon" className="card-header-icon-02" />
                <p> Revenue is growing <span className="card-row-right-02"> highest growth potential at 22.5%</span></p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="card-row-02">
              <div className="card-row-left-02">
                <img src={AiIcon} alt="Header Icon" className="card-header-icon-02" />
                <p>North American sales are <span className="card-row-right-02"> underperforming by 3.2%</span> compared to forecast</p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="card-row-02">
              <div className="card-row-left-02">
                <img src={AiIcon} alt="Header Icon" className="card-header-icon-02" />
                <p>Customer retention rate has <span className="card-row-right-02"> improved 7.5%</span> this quarter</p>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------- NEW 3 CARDS SECTION ------------------- */}
      <div className="three-cards-container">
  {/* CARD 1 */}
  <div className="three-card">
    {/* Top heading with right icon */}
    <div className="card-top">
      <h2>Dashboard Overview</h2>
      <img src={TopIcon1} alt="Top Icon" className="top-icon" />
    </div>

    {/* Sections with left icon + h3 + p */}
    <div className="card-section">
      <img src={Icon4} alt="Icon 1" className="card-icon-left" />
      <div className="card-content-right">
        <h3>Increase Enterprise Solution marketing</h3>
        <p>Potential 22.5% growth opportunity.</p>
      </div>
    </div>

    <div className="card-section">
      <img src={Icon5} alt="Icon 2" className="card-icon-left" />
      <div className="card-content-right">
        <h3>Review Basic Kit pricing strategyop Products</h3>
        <p>Currently showing -2.3% decline</p>
      </div>
    </div>
    <div className="card-section">
      <img src={Icon5} alt="Icon 2" className="card-icon-left" />
      <div className="card-content-right">
        <h3>Review Basic Kit pricing strategyop Products</h3>
        <p>Currently showing -2.3% decline</p>
      </div>
    </div>

    <div className="card-section">
      <img src={Icon6} alt="Icon 3" className="card-icon-left" />
      <div className="card-content-right">
        <h3>Expand online sales channel</h3>
        <p>Best performing channel with room for expansion.</p>
      </div>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="three-card">
  <div className="card-top">
    <h2>Marketing</h2>
    <img src={TopIcon2} alt="Top Icon" className="top-icon" />
  </div>

<div className="card-section image-wrapper">
  <img src={Icon7} alt="Marketing Image" className="card-main-image" />
</div>

</div>


  {/* CARD 3 */}
  <div className="three-card">
    <div className="card-top">
      <h2>Inventory</h2>
      <img src={TopIcon3} alt="Top Icon" className="top-icon" />
    </div>
    <div className="card-section">
<img src={Icon8} alt="Inventory Image" className="card-main-image-3" />

  </div>
</div>

</div>

        {/* ------------------- END NEW 3 CARDS SECTION ------------------- */}
      </div> {/* sales-page-container end */}
    </div> // dashboard-container-01 end
  );
};

export default Sales;
