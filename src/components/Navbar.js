import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  // Text color according to theme
  const textClass =
    props.theme === "dark" || props.theme === "blue"
      ? "nav-link text-white"
      : "nav-link text-dark"

  return (
    <div>
      <nav
        className={
          props.theme === "dark"
            ? "navbar navbar-expand-lg bg-dark"
            : props.theme === "blue"
            ? "navbar navbar-expand-lg"
            : props.theme === "yellow"
            ? "navbar navbar-expand-lg bg-warning"
            : "navbar navbar-expand-lg bg-body-tertiary"
        }
      >

        <div className="container-fluid">

          {/* Website Name */}
          <a
            className={
              props.theme === "dark" || props.theme === "blue"
                ? "navbar-brand text-white"
                : "navbar-brand text-dark"
            }
            href="/"
          >
            {props.title}
          </a>


          {/* Mobile Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {/* Home */}
              <li className="nav-item">
                <a
                  className={textClass}
                  href="/"
                >
                  Home
                </a>
              </li>


              {/* About Us */}
              <li className="nav-item">
                <Link
                  className={textClass}
                  to="/about"
                >
                  {props.aboutText}
                </Link>
              </li>

            </ul>


            {/* Theme Buttons */}
            <div className="d-flex gap-2">

              {/* Dark Mode */}
              <button
                className="btn btn-dark"
                onClick={() => props.changeTheme("dark")}
              >
                Dark mode
              </button>


              {/* Blue Mode */}
              <button
                className="btn btn-primary"
                onClick={() => props.changeTheme("blue")}
              >
                Blue mode
              </button>


              {/* Yellow Mode */}
              <button
                className="btn btn-warning"
                onClick={() => props.changeTheme("yellow")}
              >
                Yellow mode
              </button>


              {/* Light Mode */}
              <button
                className="btn btn-light"
                onClick={() => props.changeTheme("light")}
              >
                Light mode
              </button>

            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}