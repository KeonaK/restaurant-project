import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div>
          <Link className="navbar-item" to="/">
            <img src={logo} width="112" height="28" alt="logo" />
          </Link>
        </div>
        <div className="content has-text-centered">
          <p>
            <strong>A LA LEÑA PIZZERIA</strong> by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.github.com/KeonaK"
            >
              Keona Kirby,
            </a>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.github.com/cgjones0711"
            >
              Clayton Jones,
            </a>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.github.com/AndrewMedina0110"
            >
              and Andrew Medina
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
