import React from "react";
import "./Style.css";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
 <>
    <header id="body-header">
      <nav>
        <ul class="horizontal-list text-center nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skill">Skills</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/workexperience">Expercience</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div id="name-social-container">
        <div class="text-center">
          <h1 id="my-name">Rishabh Bhardwaj</h1>
        </div>
      </div>
     
    </header>
    <Outlet/>
 </>
  );
}
export default Navbar