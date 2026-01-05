import React from 'react';
import '../styles/dashboard.css';

const Dashboardbottom = () => {
  const tableData = [
    { id: '12345-7', item: 'Apple iPhone 13', qty: '3 PCS', user: 'Greg Lau', price: '$150.00', state: 'Shipped' },
    { id: '12345-6', item: 'Apple AirPods Pro', qty: '1 PCS', user: 'Richard Mart...', price: '$150.00', state: 'Shipped' },
    { id: '12345-5', item: 'Apple Watch Series 7', qty: '1 PCS', user: 'Jerry Taylor', price: '$150.00', state: 'Shipped' },
    { id: '12345-4', item: 'Apple iPad Mini 6', qty: '2 PCS', user: 'Sam Johnson', price: '$150.00', state: 'Shipped' },
  ];

  return (
    <div className="main-wrapper">
      {/* Left Card */}
      <div className="orders-card">
        <div className="top-bar">
          <h2 className="title-text">Recent Orders</h2>
          <div className="action-group">
            <input type="text" placeholder="Search..." className="input-field" />
            <button className="filter-btn">Filter</button>
            <button className="sort-btn">Sort By</button>
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
                    <div className="thumb-box"></div>
                    <div>
                      <div className="item-name">{row.item}</div>
                      <small className="qty-text">{row.qty}</small>
                    </div>
                  </div>
                </td>
                <td>{row.user}</td>
                <td>{row.price}</td>
                <td><span className="ship-tag">{row.state}</span></td>
                <td><button className="opt-btn">⋮</button></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="footer-nav">
          <span className="entry-count">1 - 10 of 1.676 Entries</span>
          <div className="nav-btns">
            <select className="row-select"><option>1 - 4</option></select>
            <button className="prev-next">Previous</button>
            <button className="prev-next">Next</button>
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="target-card">
        <div className="top-bar">
          <h3 className="sub-title">Sales Target vs. Actual (%)</h3>
          <button className="expand-icon">⤢</button>
        </div>
        
        <div className="alert-box">
          <p>There's <span className="success-text">potential to surpass the sales target</span> if recent performance levels are maintained.</p>
        </div>

        <div className="visual-area">
          <div className="arc-wrapper">
            <svg viewBox="0 0 100 50" className="arc-svg">
               <path d="M10,50 A40,40 0 0,1 90,50" fill="none" stroke="#f1f1f1" strokeWidth="8" />
               <path d="M10,50 A40,40 0 0,1 80,15" fill="none" stroke="#10b981" strokeWidth="8" />
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