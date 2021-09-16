import React from "react";
import useDarkMode from "../../hooks/useDarkMode";

import {
  Nav,
  NavLink,
  
  NavMenu,
  NavBtn,
  
} from "./NavbarElements";

import Navbar from "./burger/Navbar"



  



const Navbars = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div>
      <Nav className="flex justify-center items-center">
      <div class="d-block  d-sm-none z-30">
        <Navbar/>
      </div>
      <div class="d-none d-sm-block flex w-full items-center" >
        <NavMenu>
          <NavLink  className="text-white" to="/" activeStyle>
            Home
          </NavLink>
          <NavLink  className="text-white" to="/about" activeStyle>
            About
          </NavLink>

          <NavLink  className="text-white" to="/project" activeStyle>
            Project
          </NavLink>
          <NavLink  className="text-white" to="/blogs" activeStyle>
            Blogs
          </NavLink>
          <NavLink  className="text-white" to="/contact" activeStyle>
            Contact
          </NavLink>

          
        </NavMenu>
        </div>
        <NavBtn>

          <span
            onClick={() => setTheme(colorTheme)}
            class="w-10 h-10 bg-black block rounded-full shadow-lg cursor-pointer text-white flex items-center justify-center"
          >
            {colorTheme === "light" ? (
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            ) : (
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            )}
          </span>
        </NavBtn> 
      </Nav>
    </div>
  );
};


export default Navbars;

