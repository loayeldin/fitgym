import react from "react";
import React from "react";
function Navbar({scrollInto}) {
 
  return (
    <div className="container ">
      <div className="navbar  fixed w-[85%]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="mb-2" onClick={()=>scrollInto('hero')} >
                <a>home</a>
              </li>
              <li className="mb-2" onClick={()=>scrollInto('about')}>
                <a>about</a>
              </li>
              <li className="mb-2" onClick={()=>scrollInto('classes')}>
                <a className="">classes</a>
              </li>
              <li className="mb-2" onClick={()=>scrollInto('trainers')}>
                <a>trainers</a>
              </li>

              <li className="mb-2" onClick={()=>scrollInto('pricing')}>
                <a>pricing</a>
              </li>
              <li className="mb-2" onClick={()=>scrollInto('testimonials')}>
                <a>testimonials</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost ">
            <img src="./assets/Logo.png" className="w-28" alt="logo-img" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="mr-2" onClick={()=>scrollInto('hero')}>
              <a>home</a>
            </li>
            <li className="mr-2" onClick={()=>scrollInto('about')}>
              <a>about</a>
            </li>
            <li className="mr-2" onClick={()=>scrollInto('classes')}>
              <a>classes</a>
            </li>
            <li className="mr-2" onClick={()=>scrollInto('trainers')}>
              <a>trainers</a>
            </li>

            <li onClick={()=>scrollInto('pricing')}>
              <a>pricing</a>
            </li>
            <li onClick={()=>scrollInto('testimonials')}>
              <a>testimonials</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-maincolor text-textcolor">sign in</a>
        </div>
      
      </div>
    </div>
  );
}

export default Navbar;
