import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./navbar.scss";
import Routes from "./Routes";

const links = [
  { label: "Info", route: Routes.INFO },
  { label: "About Me", route: Routes.ABOUTME },
  { label: "Experience", route: Routes.EXPERIENCE },
  { label: "Skills", route: Routes.SKILLS },
  { label: "References", route: Routes.REFERENCES },
  { label: "Contact", route: Routes.CONTACT },
];

export default function Navbar() {
  const [hide, setHide] = useState(true);

  const hideBar = () => {
    if (window.scrollY >= window.innerHeight) {
      setHide(false);
    } else {
      setHide(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hideBar);
    return () => window.removeEventListener("scroll", hideBar);
  }, []);

  return (
    <nav className="navbar is-fixed-top is-primary mt-2" style={{ top: hide ? "-4em" : 0, transition: "top ease 1s" }}>
      <div className="container">
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-start" style={{ flex: 1, justifyContent: "center" }}>
            <span className="is-flex blurred-container">
              {links.map(({ label, route }) => (
                <Link
                  key={`${label}-${route}`}
                  className="navbar-item"
                  activeClass="is-active"
                  to={route}
                  spy
                  smooth
                  duration={300}
                >
                  {label}
                </Link>
              ))}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
