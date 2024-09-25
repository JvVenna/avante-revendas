import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./assets/css/Header.css";

const Header = () => {
  const [classOn, setClassOn] = useState(false);

  return (
    <header>
      <div className="container">
        <img
          className="logo-cyan"
          src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
          alt="logo Cyan"
        />

        <div
          className={classOn ? "menu-section on" : "menu-section"}
          onClick={() => setClassOn(!classOn)}
        >
          <div className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>

          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/SellMyCar">Quero vender meu carro</Link>
              </li>
              <li>
              <Link to="/Supply">Nosso estoque</Link>
              </li>
              <li>
              <Link to="/About">Sobre nós</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
