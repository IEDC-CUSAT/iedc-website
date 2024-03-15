import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between p-5">
      <h1>IEDC</h1>
      <nav>
        <ul className="flex flex-row">
          <li className="p-2">
            <a href="/about">About</a>
          </li>
          <li className="p-2">
            <a href="/events">Events</a>
          </li>
          <li className="p-2">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
