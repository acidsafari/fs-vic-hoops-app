import React from "react";

const Tabs = () => {
  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li>Looking to Play?</li>
        <li>Getting Started</li>
      </ul>
      <div className="outlet">
        {/* content will be shown here */}
      </div>
    </div>
  );
};

export default Tabs;