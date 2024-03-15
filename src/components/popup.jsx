import React, { useState, useEffect } from 'react';

function YourComponent() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // 5 seconds in milliseconds

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
      {/* Your website content */}
      {showPopup && (
        <div className="popup-container">
          <div className="popup-overlay fixed top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-50">
            {/* Empty element to capture clicks and prevent interaction with underlying content */}
          </div>
          <div className="popup fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 shadow-md rounded-lg p-4 bg-white opacity-200">
            <p className="text-lg font-medium mb-4">Welcome to my website. Please keep in mind that this is a working project and bugs might appear.</p><br />
            <button onClick={handleClosePopup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              I understand
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default YourComponent;
