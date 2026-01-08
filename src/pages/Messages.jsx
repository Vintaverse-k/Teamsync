import React, { useState } from "react";
import "../styles/Message.css";
import profile3 from "../assets/profile3.png";
import profile2 from "../assets/profile2.svg";
import profile4 from "../assets/profile4.svg";
import threeDotIcon from "../assets/3dot1.svg";
import shareIcon from "../assets/share.svg";
import searchIcon from "../assets/search.svg";
import binIcon from "../assets/bin.svg";
import shopeeIcon from "../assets/shoppe.svg";
import tokopediaIcon from "../assets/tokopedia.svg";
import tiktokIcon from "../assets/tiktok.svg";
import icon from "../assets/upload.svg";

const contacts = [
  {
    id: 1,
    name: "Brian Martin",
    platform: "Shopee",
    avatar: profile3,
    lastMessage: "Is this item still available? I've been looking for ...",
    time: "09:00 AM",
  },
  {
    id: 2,
    name: "Charles Martin",
    platform: "Tokopedia",
    avatar: profile2,
    lastMessage: "When will my order #RT78954 be shipped? I ne...",
    time: "09:00 AM",
  },
  {
    id: 3,
    name: "Jack Brooks",
    platform: "TikTok",
    avatar: profile4,
    lastMessage: "Do you have this in size medium? The small wa...",
    time: "09:00 AM",
  },
];

const messages = [
  {
    id: 1,
    sender: "Brian Martin",
    avatar: profile4,
    text: "When will my order #RT78954 be shipped?",
    time: "09:00 AM",
    fromMe: false,
  },
  {
    id: 2,
    sender: "You",
    avatar: profile2,
    text: "Hi Brian! Let me check that for you right away.",
    time: "09:00 AM",
    fromMe: true,
  },
  {
    id: 3,
    sender: "Brian Martin",
    avatar: profile2,
    text: "Appreciate it. Timing is really important.",
    time: "09:00 AM",
    fromMe: false,
  },
];

const Message = () => {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("All"); // New state

  // Filter contacts by search term AND platform
  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedPlatform === "All" || c.platform === selectedPlatform)
  );

  const platforms = ["All", "Shopee", "Tokopedia", "Tiktok"]; // for rendering buttons

  const getPlatformIcon = (platform) => {
    if (platform === "Shopee") return shopeeIcon;
    if (platform === "Tokopedia") return tokopediaIcon;
    if (platform === "Tiktok") return tiktokIcon;
    return null;
  };

  return (
    <div className="message-container">
      {/* Left panel */}
      <div className="contacts-panel">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search message here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">
            <img src={searchIcon} alt="Search" />
          </button>
          <div className="right-icons">
            <button className="more-btn">
              <img src={binIcon} alt="Delete" />
            </button>
            <button className="delete-btn">
              <img src={threeDotIcon} alt="More" />
            </button>
          </div>
        </div>

        {/* Platform filters */}
        <div className="platform-filters">
          {platforms.map((platform) => (
            <button
              key={platform}
              className={`filter-btn ${selectedPlatform === platform ? "active" : ""}`}
              onClick={() => setSelectedPlatform(platform)}
            >
              {platform !== "All" && (
                <img
                  src={getPlatformIcon(platform)}
                  alt={platform}
                  className="filter-icon"
                />
              )}
              {platform}
            </button>
          ))}
        </div>

        {/* Contacts list */}
        <div className="contacts-list">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className={`contact-item ${selectedContact.id === contact.id ? "selected" : ""}`}
              onClick={() => setSelectedContact(contact)}
            >
              <img src={contact.avatar} alt={contact.name} className="avatar" />
              <div className="contact-info">
                <span className="contact-name">{contact.name}</span>
                <p className="last-message">{contact.lastMessage}</p>
              </div>
              <span className="message-time">{contact.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div className="chat-panel">
        <div className="chat-header">
          <img
            src={selectedContact.avatar}
            alt={selectedContact.name}
            className="chat-avatar"
          />
  <div className="chat-header-info">
  <h2>{selectedContact.name}</h2>

  {/* Show selected platform icon + name below contact name */}
  {selectedPlatform !== "All" && (
    <div className="chat-filter-display">
      <img
        src={
          selectedPlatform === "Shopee"
            ? shopeeIcon
            : selectedPlatform === "Tokopedia"
            ? tokopediaIcon
            : tiktokIcon
        }
        alt={selectedPlatform}
        className="chat-filter-icon"
      />
      <span className="chat-filter-text">{selectedPlatform}</span>
    </div>
  )}
</div>



          <div className="chat-header-icons">
            <button className="chat-options">
              <img src={threeDotIcon} alt="More" />
            </button>
            <button className="chat-info">
              <img src={shareIcon} alt="More" />
            </button>
          </div>
        </div>

        <div className="chat-date">Wednesday, June 12 2025</div>

        <div className="chat-messages">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`chat-message ${msg.fromMe ? "from-me" : "from-them"}`}
            >
              <img src={msg.avatar} alt={msg.sender} className="msg-avatar" />
              <div className="message-bubble">
                <p>{msg.text}</p>
                <span className="msg-time">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>
<div className="chat-input-container">
  <div className="chat-input-wrapper">
    
    {/* LEFT ICON */}
    <img src={icon} className="input-icon left" alt="left-icon" />

    <textarea
      placeholder="Type your message here..."
      rows={1}
      className="chat-input"
    />

    {/* RIGHT ICON */}
    <img src={icon} className="input-icon right" alt="right-icon" />

  </div>

  <button className="send-btn">
    <img src={icon} alt="send" className="send-icon" />
  </button>
</div>

      </div>
    </div>
  );
};

export default Message;
