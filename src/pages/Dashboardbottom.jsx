import React from 'react';
import '../styles/dashboard.css';

// Product images
import AppleAir from '../assets/appleair.svg';
import AppleImg from '../assets/appleimg.svg';
import ApplePad from '../assets/applepad.svg';
import AppleWatch from '../assets/appplewatch.svg';

// Icons
import ShippedIcon from '../assets/shipped-icon.svg';
import OptionsIcon from '../assets/options-icon.svg';
import SearchIcon from '../assets/search-icon.svg';
import FilterIcon from '../assets/filter-icon.svg';
import SortIcon from '../assets/sort-icon.svg';

const Dashboardbottom = () => {
  const tableData = [
    { id: '12345-7', item: 'Apple iPhone 13', qty: '3 PCS', user: 'Greg Lau', price: '$150.00', state: 'Shipped', img: AppleAir },
    { id: '12345-6', item: 'Apple AirPods Pro', qty: '1 PCS', user: 'Richard Mart...', price: '$150.00', state: 'Shipped', img: AppleImg },
    { id: '12345-5', item: 'Apple Watch Series 7', qty: '1 PCS', user: 'Jerry Taylor', price: '$150.00', state: 'Shipped', img: ApplePad },
    { id: '12345-4', item: 'Apple iPad Mini 6', qty: '2 PCS', user: 'Sam Johnson', price: '$150.00', state: 'Shipped', img: AppleWatch },
  ];

  return (
    <div className="main-wrapper">
      {/* Left Card: Recent Orders */}
      <div className="orders-card">
        <div className="top-bar">
          <h2 className="title-text">Recent Orders</h2>
          <div className="action-group">
            <div className="icon-input">
  <img src={SearchIcon} alt="Search" className="input-icon"/>
  <input type="text" placeholder="Search..." className="input-field" />
</div>

<button className="filter-btn">
  <img src={FilterIcon} alt="Filter" className="btn-icon"/> Filter
</button>
<button className="sort-btn">
  <img src={SortIcon} alt="Sort" className="btn-icon"/> Sort By
</button>

            <button className="expand-icon">⤢</button>
          </div>
        </div>

        <table className="data-grid">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Customer Name</th>
              <th>Order Total</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i}>
                <td>{row.id}</td>
                <td>
                  <div className="product-info">
                    <div className="thumb-box">
                      <img src={row.img} alt={row.item} className="thumb-img" />
                    </div>
                    <div>
                      <div className="item-name">{row.item}</div>
                      <small className="qty-text">{row.qty}</small>
                    </div>
                  </div>
                </td>
                <td>{row.user}</td>
                <td>{row.price}</td>
                <td>
                  <span className="ship-tag">
                    <img src={ShippedIcon} alt="Shipped" className="ship-icon" />
                    {row.state}
                  </span>
                </td>
                <td>
                  <button className="opt-btn">
                    <img src={OptionsIcon} alt="Options" className="opt-icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer Pagination */}
        <div className="footer-nav">
          <span className="entry-count">1 - 10 of 1,676 Entries</span>
          <div className="nav-btns">
            <select className="row-select"><option>1 - 4</option></select>
            <button className="prev-next">Previous</button>
            <button className="prev-next">Next</button>
          </div>
        </div>
      </div>

      {/* Right Card: Sales Target */}
      <div className="target-card">
        <div className="top-bar">
          <h3 className="sub-title">Sales Target vs. Actual (%)</h3>
          <button className="expand-icon">⤢</button>
        </div>
        
        <div className="alert-box">
          <p>There's <span className="success-text">potential to surpass the sales target</span> if recent performance levels are maintained. Focus on increasing average order value.</p>
        </div>

        <div className="visual-area">
          <div className="arc-wrapper">
       <svg viewBox="0 0 100 60" className="arc-svg">
 
   <path 
      d="M10,55 A40,40 0 0,1 82,18" 
      fill="none" 
      stroke="#10b981" 
      strokeWidth="8" 
      strokeDasharray="4.5, 1"
   />
   
</svg>
            <div className="center-label">
              <div className="percent-val">86%</div>
              <div className="goal-txt">Sales Goals</div>
            </div>
          </div>
        </div>

        <div className="metrics-row">
          <div className="metric-box">
            <small>Current Sales</small>
            <div className="value-txt">$23,894</div>
          </div>
          <div className="metric-box">
            <small>Sales Goals</small>
            <div className="value-txt dark">$28,000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardbottom;
