import React from 'react';

const MaintenacePopup = ({ closePopup }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded shadow-lg z-10">
        <h2 className="text-xl font-semibold mb-2">Page Under Maintenance</h2>
        <p className="mb-4">
          We apologize for the inconvenience. This page is currently undergoing
          maintenance.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={closePopup}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MaintenacePopup;
