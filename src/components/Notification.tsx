import React from 'react';

const Notification = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 right-0 m-4 bg-green-500 text-white p-2 rounded">
      {message}
      <button onClick={onClose} className="ml-2">X</button>
    </div>
  );
};

export default Notification;
