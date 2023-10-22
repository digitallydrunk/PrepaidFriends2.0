import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo_dark from "../../assets/images/logo-dark.png";
import logo_light from "../../assets/images/logo-light.png";

import {
  AiOutlineUser,
  LiaSignOutAltSolid,
  PiNoteDuotone,
} from "../../assets/icons/icons";
import { URLs } from "../../routes/urls";

const Navbar = () => {
  const nav = useNavigate();
  const [isMenu, setisMenu] = useState(false);
  const [navbarSticky, setNavbarSticky] = useState(false);
  const [isAccount, setIsAccount] = useState(false);
  // Should be managed through real authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  window.addEventListener("scroll", windowScroll);
  function windowScroll() {
    setNavbarSticky(
      document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50
    );
  }
  function getClosest(elem, selector) {
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  }

  function activateMenu() {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");

        var immediateParent = getClosest(matchingMenuItem, "li");

        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = getClosest(immediateParent, ".child-menu-item");
        if (parent) {
          parent.classList.add("active");
        }

        var parent = getClosest(parent || immediateParent, ".parent-menu-item");

        if (parent) {
          parent.classList.add("active");

          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }

          var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          var parentOfParent = getClosest(
            matchingMenuItem,
            ".parent-parent-menu-item"
          );
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
    }
  }
  const toggleMenu = () => {
    setisMenu(!isMenu);
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
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    let account = () => setIsAccount(false);
    document.addEventListener("mousedown", account);

    const htmlTag = document.getElementsByTagName("html")[0];
    htmlTag.classList.remove("dark");
    activateMenu();
  }, []);

  return (
    <nav
      id="topnav"
      className={`${navbarSticky ? "nav-sticky" : " defaultscroll"}`}
    >
      <div className="container relative">
        <Link className="logo" to="/index">
          <img src={logo_dark} className="inline-block dark:hidden" alt="" />
          <img src={logo_light} className="hidden dark:inline-block" alt="" />
        </Link>

        <div className="menu-extras">
          <div className="menu-item">
            <Link
              className={`navbar-toggle ${isMenu ? "open" : ""}`}
              id="isToggle"
              onClick={() => toggleMenu()}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </div>
        </div>

        <ul className="buy-button list-none mb-0">
          <li className="dropdown inline-block relative ms-1">
            <button
              onClick={() =>
                isLoggedIn ? setIsAccount(!isAccount) : nav(URLs.LOGIN)
              }
              data-dropdown-toggle="dropdown"
              className="dropdown-toggle h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
              type="button"
            >
              <i className="mdi mdi-account"></i>
            </button>
            {isAccount ? (
              <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ">
                <ul
                  className="py-2 text-start"
                  aria-labelledby="dropdownDefault"
                >
                  <li>
                    <Link
                      to="/shop-account"
                      className="flex items-center py-1.5 px-4 hover:text-indigo-600"
                    >
                      <AiOutlineUser className="me-2" /> Account
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop-cart"
                      className="flex items-center py-1.5 px-4 hover:text-indigo-600"
                    >
                      <PiNoteDuotone className="align-middle me-1" /> Order
                      History
                    </Link>
                  </li>
                  <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                  <li>
                    <Link
                      to="/auth-login"
                      className="flex items-center py-1.5 px-4 hover:text-indigo-600"
                    >
                      <LiaSignOutAltSolid className="align-middle me-2 w-5 h-5" />{" "}
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </li>
        </ul>

        <div id="navigation" style={{ display: isMenu ? "block" : "none" }}>
          <ul className="navigation-menu">
            <li>
              <Link to={URLs.BASE} className="sub-menu-item">
                Home
              </Link>
            </li>

            <li>
              <Link to={URLs.SINGLE_ORDER} className="sub-menu-item">
                Single Order
              </Link>
            </li>

            <li className="has-submenu parent-menu-item">
              <Link to={URLs.BULK_ORDER}>Bulk Order</Link>
            </li>

            <li className="has-submenu parent-menu-item">
              <Link to={URLs.HOW_IT_WORKS}>How It Works</Link>
            </li>

            <li>
              <Link to={URLs.CONTACT} className="sub-menu-item">
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
