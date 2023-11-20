import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import logo_dark from "../../assets/images/logo-dark.png";
import logo_light from "../../assets/images/logo-light.png";
import { AiOutlineUser, PiNoteDuotone } from "../../assets/icons/icons";
import { URLs } from "../../routes/urls";
import style from "./navbar.module.css"

const Navbar = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [isMenu, setIsMenu] = useState(false);
  const [navbarSticky, setNavbarSticky] = useState(false);
  const [isAccount, setIsAccount] = useState(false);
  const [isLoginMenu, setIsLoginMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dropdownRef = useRef(null);

  window.addEventListener("scroll", () => {
    setNavbarSticky(
      document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50
    );
  });

  function toggleMenu() {
    setIsMenu(!isMenu);
    if (document.getElementById("navigation")) {
      const anchorArray = Array.from(
        document.getElementById("navigation").getElementsByTagName("a")
      );
      anchorArray.forEach((element) => {
        element.addEventListener("click", (elem) => {
          const target = elem.target.getAttribute("href");
          if (target !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    let account = () => setIsAccount(false);
    document.addEventListener("mousedown", account);

    const htmlTag = document.getElementsByTagName("html")[0];
    htmlTag.classList.remove("dark");

    window.addEventListener("click", (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsLoginMenu(false);
      }
    });

    return () => {
      window.removeEventListener("click", (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setIsLoginMenu(false);
        }
      });
    };
  }, []);

  const isLinkActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const handleLoginCustomerClick = () => {
    nav(URLs.LOGIN);
  };

  return (
    <nav
      id="topnav"
      className={`${navbarSticky ? "nav-sticky" : "defaultscroll"}`}
    >
      <div className="container relative">
        <Link className="logo" to="/index">
          {/* <img src={logo_dark} className="inline-block dark:hidden" alt="" /> */}
          <img src={logo_light} className="hidden dark:inline-block" alt="" />
        </Link>

        <div className="menu-extras">
          <div className="menu-item">
            <span
              className={`navbar-toggle ${isMenu ? "open" : ""}`}
              id="isToggle"
              onClick={() => toggleMenu()}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </span>
          </div>
        </div>

        <ul className="buy-button list-none mb-0">
          <li className="dropdown inline-block relative ms-1" ref={dropdownRef}>
            <button
              onClick={() => (isLoggedIn ? setIsAccount(!isAccount) : setIsLoginMenu(!isLoginMenu))}
              data-dropdown-toggle="dropdown"
              className="dropdown-toggle h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
              type="button"
            >
              <AiOutlineUser />
            </button>
            {isLoginMenu ? (
              <div className={`dropdown-menu absolute end-0 m-0 mt-4 z-10 w-52 rounded-md bg-white dark:bg-slate-900 shadow `}>
                <ul className="py-2 text-start" aria-labelledby="dropdownLogin">
                  <li>
                    <button
                      onClick={handleLoginCustomerClick}
                      className={`flex items-center py-2 px-4 hover:bg-gray-100 w-52`}
                    >
                      <AiOutlineUser className="me-2" /> Login as a Customer
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setIsLoginMenu(false)}
                      className={`flex items-center py-2 px-4 hover:bg-gray-100 w-52`}
                    >
                      <PiNoteDuotone className="me-1" /> Login as a Broker
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              null
            )}
          </li>
        </ul>

        <div id="navigation" style={{ display: isMenu ? "block" : "none" }}>
          <ul className="navigation-menu">
            <li className="has-submenu parent-menu-item">
              <Link to={URLs.BASE} className={`sub-menu-item ${isLinkActive(URLs.BASE)}`}>
                Home
              </Link>
            </li>

            <li className="has-submenu parent-menu-item">
              <Link to={URLs.SINGLE_ORDER} className={`sub-menu-item ${isLinkActive(URLs.SINGLE_ORDER)}`}>
                Single Order
              </Link>
            </li>
              
            <li className="has-submenu parent-menu-item">
              <Link to={URLs.BULK_ORDER} className={`sub-menu-item ${isLinkActive(URLs.BULK_ORDER)}`}>
                Bulk Order
              </Link>
            </li>

            <li className="has-submenu parent-menu-item">
              <Link to={URLs.HOW_IT_WORKS} className={`sub-menu-item ${isLinkActive(URLs.HOW_IT_WORKS)}`}>
                How It Works
              </Link>
            </li>

            <li className="has-submenu parent-menu-item">
              <Link to={URLs.CONTACT} className={`sub-menu-item ${isLinkActive(URLs.CONTACT)}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
