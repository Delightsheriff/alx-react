import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        style={{
          color: '#3a3a3a',
          fontWeight: 'bold',
          background: 'none',
          border: 'none',
          fontSize: '15px',
          position: 'absolute',
          right: '5px',
          top: '15px',
          cursor: 'pointer',
          height: '20px',
        }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        <img src={closeIcon} alt="Close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li
          data="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;
