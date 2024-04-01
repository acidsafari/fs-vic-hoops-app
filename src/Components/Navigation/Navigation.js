import React, { useState } from "react";
import SearchBar from "./SearchBar.js";
import "./Navigation.css";

const Navigation = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("welcome");
  const navItems = [
    { id: 1, title: "News", name: "News" },
    { id: 2, title: "Let's Play!", name: "LetsPlay" },
    { id: 3, title: "Competitions", name: "Competitions" },
    { id: 4, title: "Programs", name: "Programs" },
    { id: 5, title: "Get Involved", name: "GetInvolved" },
    { id: 6, title: "Resource Hub", name: "ResourceHub" },
    { id: 7, title: "Subscribe", name: "Subscribe" },
    { id: 8, title: "Contact Us", name: "ContactUs" },
  ];

  return (
    <div className="Navigation">
      <ul className="NavigationMenus">
        {navItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setSelectedNavItem(item.name)}
              className={selectedNavItem === item.name ? `activeNavItem` : ""}
            >
              <a href={`/${item.name}`}>{item.title}</a>
            </li>
          );
        })}
      </ul> 
      <div className="SearchBar">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navigation;