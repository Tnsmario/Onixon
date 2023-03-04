import React from "react";
import { Link } from "react-scroll";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

function Navbar() {
  return (
    <nav>
      <div className="logo"></div>
      <ul>
        <li>
          <a href="#">Acasa</a>
        </li>
        <li>
          <a href="#">Despre Noi</a>
        </li>
        <li>
          <a href="#">Servicii</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
