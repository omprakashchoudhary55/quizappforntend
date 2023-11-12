import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navlink = {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    padding: "10px 20px",
    margin: "0 10px",
    cursor: "pointer",
  };
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "75px",
        width:"100%",
        backgroundColor: "#00828c",
        color: "white",
        padding: "0 20px",
        position: "fixed",
        top: "0px",
        zIndex: 999,
      }}
    >
      <div
        className="logo"
        style={{
          fontWeight: "700",
          fontSize: "30px",
        }}
      >
        <h3>logo</h3>
      </div>
      <ul
        onClick={() => setIsMobile(false)}
        className="nav-links"
        style={{
          display: isMobile ? "block" : "none",
          position: "absolute",
          listStyle: "none",
          backgroundColor: "blue",
          left: 0,
          top: "75px",
          transition: "all 0.9s ease-out",
          width: "100%",
          zIndex: 3,
        }}
      >
        <NavLink to="/" style={navlink}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/rscit" style={navlink}>
          <li>Rs-cit</li>
        </NavLink>
        <NavLink to="/tally" style={navlink}>
          <li>Tally</li>
        </NavLink>
        <NavLink to="/about" style={navlink}>
          <li>About as</li>
        </NavLink>
      </ul>
      <button className="btn fs-1 text-white" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <AiOutlineClose /> : <BiMenu />}
      </button>
    </nav>
  );
};

export default Header;
