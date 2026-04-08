import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = ({ chatHistory, onNewChat, onLoadChat }) => {
  const [extended, setExtended] = useState(false);

  return (
    
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended(prev => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="Menu"
           style={{ width: "28px", filter: "invert(0.8)" }}
        />

        <div className="new-chat" onClick={onNewChat}>
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {chatHistory.length === 0 ? (
              <p className="no-history">No history yet</p>
            ) : (
              chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className="recent-entry"
                  onClick={() => onLoadChat(chat)}
                  title={chat.prompt}
                >
                  <img src={assets.message_icon} alt="" />
                  <p>{chat.prompt.slice(0, 22)}...</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
