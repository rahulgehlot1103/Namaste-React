import React from "react";
import ReactDOM from "react-dom";

const Logo = () => {
  return (
    <div className="logo">
      <img src = "logo.png" />
    </div>
  );
};

const SearchBar = () => {
  return (
    <div class="search-bar">
      <input type="text" className="search-input" placeholder="Search..." />
    </div>
  );
};

const UserIcon = () => {
  return (
    <div class="user-icon">
      <img src="user-icon.png" alt="User" />
    </div>
  );
};
const Header = () => {
  return (
    <div id = "header">
      <Logo />
      <SearchBar />
      <UserIcon />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
