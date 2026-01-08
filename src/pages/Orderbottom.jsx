import React from 'react';
import '../styles/Orders.css';

// Product images
import AppleAir from '../assets/appleair.svg';
import AppleImg from '../assets/appleimg.svg';
import ApplePad from '../assets/applepad.svg';
import AppleWatch from '../assets/appplewatch.svg';

// Customer images (dummy example)
import GregImg from '../assets/Profile.png';
import RichardImg from '../assets/Profile.png';
import JerryImg from '../assets/Profile.png';
import SamImg from '../assets/Profile.png';

// Icons
import ShippedIcon from '../assets/shipped-icon.svg';
import OptionsIcon from '../assets/options-icon.svg';
import SearchIcon from '../assets/search-icon.svg';
import FilterIcon from '../assets/filter-icon.svg';
import SortIcon from '../assets/sort-icon.svg';

const Dashboardbottom = () => {
  const tableData = [
    { id: '12345-7', date: 'May 12, 2025, 09:00 AM', item: 'Apple iPhone 13', qty: '3 PCS', user: 'Greg Lau', userImg: GregImg, price: '$150.00', state: 'Shipped', img: AppleAir },
    { id: '12345-6', date: 'May 14, 2025, 10:00 AM', item: 'Apple AirPods Pro', qty: '1 PCS', user: 'Richard Mart...', userImg: RichardImg, price: '$150.00', state: 'Shipped', img: AppleImg },
    { id: '12345-5', date: 'May 16, 2025, 04:00 AM', item: 'Apple Watch Series 7', qty: '1 PCS', user: 'Jerry Taylor', userImg: JerryImg, price: '$150.00', state: 'Shipped', img: ApplePad },
    { id: '12345-4', date: 'May 20, 2025, 05:00 AM', item: 'Apple iPad Mini 6', qty: '2 PCS', user: 'Sam Johnson', userImg: SamImg, price: '$150.00', state: 'Shipped', img: AppleWatch },
  ];

  return (
    <div className="main-01">
      <div className="orders-card-01">
        <div className="top-bar-01">
          <h2 className="title-text-01">Recent Orders</h2>
          <div className="action-group-01">
            <div className="icon-input-01">
              <img src={SearchIcon} alt="Search" className="input-icon-01"/>
              <input type="text" placeholder="Search..." className="input-field-01" />
            </div>

            <button className="filter-btn-01">
              <img src={FilterIcon} alt="Filter" className="btn-icon-01"/> Filter
            </button>
            <button className="sort-btn-01">
              <img src={SortIcon} alt="Sort" className="btn-icon-01"/> Sort By
            </button>

            <button className="expand-icon-01">⤢</button>
          </div>
        </div>

        <table className="data-grid-01">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Customer Name</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i}>
                <td>{row.id}</td>

                <td>
                  <div className="date-cell-01">
                    <span>{row.date}</span>
                  </div>
                </td>

                {/* Customer Name with image */}
                <td>
                  <div className="customer-cell-01">
                    <div className="customer-thumb-01">
                      <img src={row.userImg} alt={row.user} className="customer-img-01" />
                    </div>
                    <span className="customer-name-01">{row.user}</span>
                  </div>
                </td>

                <td>
                  <div className="product-cell-01">
                    <div className="thumb-box-01">
                      <img src={row.img} alt={row.item} className="thumb-img-01" />
                    </div>
                    <div className="product-info-01">
                      <span className="item-name-01">{row.item}</span>
                      <small className="qty-text-01">{row.qty}</small>
                    </div>
                  </div>
                </td>

                <td>{row.price}</td>

                <td>
                  <span className="ship-tag-01">
                    <img src={ShippedIcon} alt="Shipped" className="ship-icon-01" />
                    {row.state}
                  </span>
                </td>

                <td>
                  <button className="opt-btn-01">
                    <img src={OptionsIcon} alt="Options" className="opt-icon-01" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="footer-nav-01">
          <span className="entry-count-01">1 - 10 of 1,676 Entries</span>
          <div className="nav-btns-01">
            <select className="row-select-01"><option>1 - 4</option></select>
            <button className="prev-next-01">Previous</button>
            <button className="prev-next-01">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardbottom;
