import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="leftDiv">
        <h1>TwoBots</h1>
      </div>
      <div className="rightDiv">
        <nav>
          <ul>
            <li>
              <Link to="#seccionx" aria-label="Sección X">
                secciónx
              </Link>
            </li>
            <li>
              <Link to="#secciony" aria-label="Sección Y">
                seccióny
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
