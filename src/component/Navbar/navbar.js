import React from 'react'
import logo_dark from '../../assets/images/logo-dark.png';
import logo_light from '../../assets/images/logo-light.png';
import '../../assets/libs/@mdi/font/css/materialdesignicons.min.css';
import '../../assets/css/tailwind.css';
import { useState, useEffect } from 'react';
import { Settings, ShoppingCart } from 'feather-icons-react';
import { Link } from 'react-router-dom';



export default function Navbar(props) {
    const { navClass, navJustify } = props;

    window.addEventListener("scroll", windowScroll);

    const [isMenu, setisMenu] = useState(false);

    const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };
    
    useEffect(() => {
        activateMenu();
        window.scrollTo(0, 0)
    }, []);

    function windowScroll() {
        const navbar = document.getElementById("topnav");
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            if (navbar !== null) {
                navbar?.classList.add("nav-sticky");
            }
        } else {
            if (navbar !== null) {
                navbar?.classList.remove("nav-sticky");
            }
        }

        const mybutton = document.getElementById("back-to-top");
        if (mybutton != null) {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                mybutton.classList.add("flex");
                mybutton.classList.remove("hidden");
            } else {
                mybutton.classList.add("hidden");
                mybutton.classList.remove("flex");
            }
        }
    }

    const activateMenu = () => {
        var menuItems = document.getElementsByClassName("sub-menu-item");
        if (menuItems) {

            var matchingMenuItem = null;
            for (var idx = 0; idx < menuItems.length; idx++) {
                if (menuItems[idx].href === window.location.href) {
                    matchingMenuItem = menuItems[idx];
                }
            }
            if (matchingMenuItem) {
                matchingMenuItem.classList.add('active');

                var immediateParent = getClosest(matchingMenuItem, 'li');

                if (immediateParent) {
                    immediateParent.classList.add('active');
                }

                var parent = getClosest(immediateParent, '.child-menu-item');
                if (parent) {
                    parent.classList.add('active');
                }

                var parent = getClosest(parent || immediateParent, '.parent-menu-item');

                if (parent) {
                    parent.classList.add('active');

                    var parentMenuitem = parent.querySelector('.menu-item');
                    if (parentMenuitem) {
                        parentMenuitem.classList.add('active');
                    }

                    var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                } else {
                    var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                }
            }
        }
    }

    const getClosest = (elem, selector) => {

        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function (s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) { }
                    return i > -1;
                };
        }

        // Get the closest matching element
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (elem.matches(selector)) return elem;
        }
        return null;

    };

    var navbarHtml = <>
        <nav id="topnav" className={`defaultscroll ${navClass === "nav-light" ? '' : navClass === "nav-sticky" ?
            'bg-white dark:bg-slate-900' : ''}`}>
            <div className="container relative">
                {
                    navClass === "nav-light" ?
                        <Link className="logo" to="/index">
                            <span className="inline-block dark:hidden">
                                <img src={logo_dark} className="l-dark" height="24" alt="" />
                                <img src={logo_light} className="l-light" height="24" alt="" />
                            </span>
                            <img src={logo_light} height="24" className="hidden dark:inline-block" alt="" />
                        </Link>
                        :
                        <Link className="logo" to="/index">
                            <img src={logo_dark} className="inline-block dark:hidden" alt="" />
                            <img src={logo_light} className="hidden dark:inline-block" alt="" />
                        </Link>
                }

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link to="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                {
                    navClass !== 'nav-light' ? <ul className={`buy-button list-none space-x-1 mb-0`} >
                            <li className="inline mb-0">
                                <Link to="#" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><Settings className="h-4 w-4" /></Link>
                            </li>

                            <li className="inline ps-1 mb-0">
                                <Link to="https://1.envato.market/techwind-react" target="_blank" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><ShoppingCart className="h-4 w-4" /></Link>
                            </li>
                            
                        </ul>
                        :
                        <ul className="buy-button list-none space-x-1 mb-0">
                        <li className="inline mb-0">
                            <Link to="#">
                                <span className="login-btn-primary"><span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><Settings className="h-4 w-4" /></span></span>
                                <span className="login-btn-light"><span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><Settings className="h-4 w-4" /></span></span>
                            </Link>
                        </li>
                
                        <li className="inline ps-1 mb-0">
                            <Link to="https://1.envato.market/techwind-react" target="_blank">
                                <div className="login-btn-primary"><span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><ShoppingCart className="h-4 w-4" /></span></div>
                                <div className="login-btn-light"><span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><ShoppingCart className="h-4 w-4" /></span></div>
                            </Link>
                        </li>
                    </ul>
                }
               
                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                    <ul className={`navigation-menu ${navClass} ${navJustify}`}>
                        <li><Link to="/index" className="sub-menu-item">Home</Link></li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#" >Landings</Link><span className="menu-arrow"></span>

                            <ul className="submenu megamenu">
                                <li>
                                    <ul>
                                        <li><Link to="/index-saas" className="sub-menu-item">Saas</Link></li>
                                        <li><Link to="/index-classic-saas" className="sub-menu-item">Classic Saas </Link></li>
                                        <li><Link to="/index-modern-saas" className="sub-menu-item">Modern Saas </Link></li>
                                        <li><Link to="/index-apps" className="sub-menu-item">Application</Link></li>
                                        <li><Link to="/index-classic-app" className="sub-menu-item">Classic App </Link></li>
                                        <li><Link to="/index-ai" className="sub-menu-item">AI Tools <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">New</span></Link></li>
                                        <li><Link to="/index-smartwatch" className="sub-menu-item">Smartwatch</Link></li>
                                        <li><Link to="/index-marketing" className="sub-menu-item">Marketing</Link></li>
                                        <li><Link to="/index-seo" className="sub-menu-item">SEO Agency </Link></li>
                                        <li><Link to="/index-software" className="sub-menu-item">Software </Link></li>
                                        <li><Link to="/index-payment" className="sub-menu-item">Payments</Link></li>
                                        <li><Link to="/index-charity" className="sub-menu-item">Charity </Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li><Link to="/index-it-solution" className="sub-menu-item">IT Solution</Link></li>
                                        <li><Link to="/index-it-solution-two" className="sub-menu-item">It Solution Two </Link></li>
                                        <li><Link to="/index-digital-agency" className="sub-menu-item">Digital Agency</Link></li>
                                        <li><Link to="/index-restaurent" className="sub-menu-item">Restaurent</Link></li>
                                        <li><Link to="/index-hosting" className="sub-menu-item">Hosting</Link></li>
                                        <li><Link to="/index-nft" className="sub-menu-item">NFT Marketplace </Link></li>
                                        <li><Link to="/index-hotel" className="sub-menu-item">Hotel & Resort</Link></li>
                                        <li><Link to="/index-travel" className="sub-menu-item">Travels <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">New</span></Link></li>
                                        <li><Link to="/index-cafe" className="sub-menu-item">Cafe <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></Link></li>
                                        <li><Link to="/index-gym" className="sub-menu-item">Gym <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></Link></li>
                                        <li><Link to="/index-yoga" className="sub-menu-item">Yoga </Link></li>
                                        <li><Link to="/index-spa" className="sub-menu-item">Spa & Salon </Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li><Link to="/index-job" className="sub-menu-item">Job</Link></li>
                                        <li><Link to="/index-startup" className="sub-menu-item">Startup</Link></li>
                                        <li><Link to="/index-business" className="sub-menu-item">Business</Link></li>
                                        <li><Link to="/index-corporate" className="sub-menu-item">Corporate</Link></li>
                                        <li><Link to="/index-corporate-two" className="sub-menu-item">Corporate Two </Link></li>
                                        <li><Link to="/index-real-estate" className="sub-menu-item">Real Estate</Link></li>
                                        <li><Link to="/index-consulting" className="sub-menu-item">Consulting </Link></li>
                                        <li><Link to="/index-insurance" className="sub-menu-item">Insurance </Link></li>
                                        <li><Link to="/index-construction" className="sub-menu-item">Construction </Link></li>
                                        <li><Link to="/index-law" className="sub-menu-item">Law Firm </Link></li>
                                        <li><Link to="/index-video" className="sub-menu-item">Video </Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li><Link to="/index-personal" className="sub-menu-item">Personal</Link></li>
                                        <li><Link to="/index-portfolio" className="sub-menu-item">Portfolio</Link></li>
                                        <li><Link to="/index-photography" className="sub-menu-item">Photography <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></Link></li>
                                        <li><Link to="/index-studio" className="sub-menu-item">Studio</Link></li>
                                        <li><Link to="/index-coworking" className="sub-menu-item">Co-Woriking</Link></li>
                                        <li><Link to="/index-course" className="sub-menu-item">Online Courses </Link></li>
                                        <li><Link to="/index-event" className="sub-menu-item">Event / Conference </Link></li>
                                        <li><Link to="/index-podcast" className="sub-menu-item">Podcasts <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">New</span></Link></li>
                                        <li><Link to="/index-hospital" className="sub-menu-item">Hospital</Link></li>
                                        <li><Link to="/index-phone-number" className="sub-menu-item">Phone Number</Link></li>
                                        <li><Link to="/index-forums" className="sub-menu-item">Forums </Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li><Link to="/index-shop" className="sub-menu-item">Shop / eCommerce  </Link></li>
                                        <li><Link to="/index-crypto" className="sub-menu-item">Cryptocurrency  <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></Link></li>
                                        <li><Link to="/index-landing-one" className="sub-menu-item">Landing One</Link></li>
                                        <li><Link to="/index-landing-two" className="sub-menu-item">Landing Two</Link></li>
                                        <li><Link to="/index-landing-three" className="sub-menu-item">Landing Three</Link></li>
                                        <li><Link to="/index-landing-four" className="sub-menu-item">Landing Four</Link></li>
                                        <li><Link to="/index-service" className="sub-menu-item">Service Provider</Link></li>
                                        <li><Link to="/index-food-blog" className="sub-menu-item">Food Blog </Link></li>
                                        <li><Link to="/index-blog" className="sub-menu-item">Blog </Link></li>
                                        <li><Link to="/index-furniture" className="sub-menu-item">Furniture </Link></li>
                                        <li><Link to="/index-landing-five" className="sub-menu-item">Landing Five <span className="bg-green-600 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Onepage</span></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#!">Pages</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className="has-submenu parent-menu-item"><Link to="#"> Company </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/page-aboutus" className="sub-menu-item"> About Us</Link></li>
                                        <li><Link to="/page-services" className="sub-menu-item">Services</Link></li>
                                        <li><Link to="/page-team" className="sub-menu-item"> Team</Link></li>
                                        <li><Link to="/page-pricing" className="sub-menu-item">Pricing</Link></li>
                                        <li><Link to="/page-testimonial" className="sub-menu-item">Testimonial </Link></li>
                                    </ul>
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> Accounts</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/user-profile" className="sub-menu-item">User Profile</Link></li>
                                        <li><Link to="/user-billing" className="sub-menu-item">Billing</Link></li>
                                        <li><Link to="/user-payment" className="sub-menu-item">Payment</Link></li>
                                        <li><Link to="/user-invoice" className="sub-menu-item">Invoice</Link></li>
                                        <li><Link to="/user-social" className="sub-menu-item">Social</Link></li>
                                        <li><Link to="/user-notification" className="sub-menu-item">Notification</Link></li>
                                        <li><Link to="/user-setting" className="sub-menu-item">Setting</Link></li>
                                    </ul>
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> Real Estate</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/property-listing" className="sub-menu-item">Listing</Link></li>
                                        <li><Link to="/property-detail" className="sub-menu-item">Property Detail</Link></li>
                                    </ul>
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> Courses </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/course-listing" className="sub-menu-item">Course Listing</Link></li>
                                        <li><Link to="/course-detail" className="sub-menu-item">Course Detail</Link></li>
                                    </ul>
                                </li>

                                <li className="has-submenu parent-menu-item"><Link to="#">  NFT Market </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                        <li><Link to="/nft-explore" className="sub-menu-item">Explore</Link></li>
                                        <li><Link to="/nft-auction" className="sub-menu-item">Auction</Link></li>
                                        <li><Link to="/nft-collection" className="sub-menu-item">Collections</Link></li>
                                        <li className="has-submenu child-menu-item"><Link to="#"> Creator  </Link><span className="submenu-arrow"></span>
                                            <ul className="submenu">
                                                <li><Link to="/nft-creators" className="sub-menu-item"> Creators</Link></li>
                                                <li><Link to="/nft-creator-profile" className="sub-menu-item"> Creator Profile </Link></li>
                                                <li><Link to="/nft-creator-profile-edit" className="sub-menu-item"> Profile Edit </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/nft-wallet" className="sub-menu-item">Wallet</Link></li>
                                        <li><Link to="/nft-create-item" className="sub-menu-item">Create NFT</Link></li>
                                        <li><Link to="/nft-detail" className="sub-menu-item">Single NFT</Link></li>
                                    </ul>
                                </li>

                                <li><Link to="/food-recipe" className="sub-menu-item">Food Recipe </Link></li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> eCommerce </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/shop-grid" className="sub-menu-item">Product Grid</Link></li>
                                        <li><Link to="/shop-grid-two" className="sub-menu-item">Product Grid Two</Link></li>
                                        <li><Link to="/shop-item-detail" className="sub-menu-item">Product Detail</Link></li>
                                        <li><Link to="/shop-cart" className="sub-menu-item">Shop Cart</Link></li>
                                        <li><Link to="/shop-checkout" className="sub-menu-item">Checkout</Link></li>
                                        <li><Link to="/shop-account" className="sub-menu-item">My Account</Link></li>
                                    </ul>
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> Photography </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/photography-about" className="sub-menu-item">About Us</Link></li>
                                        <li><Link to="/photography-portfolio" className="sub-menu-item">Portfolio</Link></li>
                                    </ul>
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> Job / Careers </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/page-job-grid" className="sub-menu-item">All Jobs</Link></li>
                                        <li><Link to="/page-job-detail" className="sub-menu-item">Job Detail</Link></li>
                                        <li><Link to="/page-job-apply" className="sub-menu-item">Job Apply</Link></li>
                                        <li><Link to="/page-job-post" className="sub-menu-item">Job Post </Link></li>
                                        <li><Link to="/page-job-career" className="sub-menu-item">Job Career </Link></li>
                                        <li><Link to="/page-job-candidates" className="sub-menu-item">Job Candidates</Link></li>
                                        <li><Link to="/page-job-candidate-detail" className="sub-menu-item">Candidate Detail</Link></li>
                                        <li><Link to="/page-job-companies" className="sub-menu-item">All Companies</Link></li>
                                        <li><Link to="/page-Job-company-detail" className="sub-menu-item">Company Detail</Link></li>
                                    </ul>
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> Forums </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/forums-topic" className="sub-menu-item">Forum Topic</Link></li>
                                        <li><Link to="/forums-comments" className="sub-menu-item">Forum Comments</Link></li>
                                    </ul>
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> Helpcenter </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/helpcenter-overview" className="sub-menu-item">Overview</Link></li>
                                        <li><Link to="/helpcenter-faqs" className="sub-menu-item">FAQs</Link></li>
                                        <li><Link to="/helpcenter-guides" className="sub-menu-item">Guides</Link></li>
                                        <li><Link to="/helpcenter-support" className="sub-menu-item">Support</Link></li>
                                    </ul>
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> Blog </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/blog" className="sub-menu-item">Blogs</Link></li>
                                        <li><Link to="/blog-sidebar" className="sub-menu-item">Blogs & Sidebar</Link></li>
                                        <li><Link to="/blog-detail" className="sub-menu-item">Blog Detail</Link></li>
                                        <li className="has-submenu child-menu-item"><Link to="#"> Blog Posts </Link><span className="submenu-arrow"></span>
                                            <ul className="submenu">
                                                <li><Link to="/blog-standard-post" className="sub-menu-item">Standard Post</Link></li>
                                                <li><Link to="/blog-slider-post" className="sub-menu-item">Slider Post</Link></li>
                                                <li><Link to="/blog-gallery-post" className="sub-menu-item">Gallery Post</Link></li>
                                                <li><Link to="/blog-youtube-post" className="sub-menu-item">Youtube Post</Link></li>
                                                <li><Link to="/blog-vimeo-post" className="sub-menu-item">Vimeo Post</Link></li>
                                                <li><Link to="/blog-audio-post" className="sub-menu-item">Audio Post</Link></li>
                                                <li><Link to="/blog-blockquote-post" className="sub-menu-item">Blockquote</Link></li>
                                                <li><Link to="/blog-left-sidebar-post" className="sub-menu-item">Left Sidebar</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> Email Template</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/email-confirmation" className="sub-menu-item">Confirmation</Link></li>
                                        <li><Link to="/email-password-reset" className="sub-menu-item">Reset Password</Link></li>
                                        <li><Link to="/email-alert" className="sub-menu-item">Alert</Link></li>
                                        <li><Link to="/email-invoice" className="sub-menu-item">Invoice</Link></li>
                                    </ul>
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/auth-login" className="sub-menu-item">Login</Link></li>
                                        <li><Link to="/auth-signup" className="sub-menu-item">Signup</Link></li>
                                        <li><Link to="/auth-re-password" className="sub-menu-item">Reset Password</Link></li>
                                        <li><Link to="/auth-lock-screen" className="sub-menu-item">Lock Screen</Link></li>
                                    </ul>
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> Utility </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/page-terms" className="sub-menu-item">Terms of Services</Link></li>
                                        <li><Link to="/page-privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                    </ul>
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> Special</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/page-comingsoon" className="sub-menu-item">Coming Soon</Link></li>
                                        <li><Link to="/page-maintenance" className="sub-menu-item">Maintenance</Link></li>
                                        <li><Link to="/page-error" className="sub-menu-item">Error</Link></li>
                                        <li><Link to="/page-thankyou" className="sub-menu-item">Thank you</Link></li>
                                    </ul>
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> Contact </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/contact-detail" className="sub-menu-item">Contact Detail</Link></li>
                                        <li><Link to="/contact-one" className="sub-menu-item">Contact One</Link></li>
                                        <li><Link to="/contact-two" className="sub-menu-item">Contact Two</Link></li>
                                    </ul>
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#!"> Multi Level Menu</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="#!" className="sub-menu-item">Level 1.0</Link></li>
                                        <li className="has-submenu child-menu-item"><Link to="#!"> Level 2.0 </Link><span className="submenu-arrow"></span>
                                            <ul className="submenu">
                                                <li><Link to="#!" className="sub-menu-item">Level 2.1</Link></li>
                                                <li><Link to="#!" className="sub-menu-item">Level 2.2</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#">Portfolio</Link><span className="menu-arrow"></span>
                            <ul className="submenu megamenu">
                                <li>
                                    <ul>
                                        <li className="megamenu-head">Modern Portfolio</li>
                                        <li><Link to="/portfolio-modern-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link to="/portfolio-modern-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link to="/portfolio-modern-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link to="/portfolio-modern-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link to="/portfolio-modern-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Classic Portfolio</li>
                                        <li><Link to="/portfolio-classic-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link to="/portfolio-classic-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link to="/portfolio-classic-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link to="/portfolio-classic-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link to="/portfolio-classic-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Creative Portfolio</li>
                                        <li><Link to="/portfolio-creative-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link to="/portfolio-creative-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link to="/portfolio-creative-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link to="/portfolio-creative-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link to="/portfolio-creative-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Masonry Portfolio</li>
                                        <li><Link to="/portfolio-masonry-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link to="/portfolio-masonry-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link to="/portfolio-masonry-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link to="/portfolio-masonry-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link to="/portfolio-masonry-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Portfolio Detail</li>
                                        <li><Link to="/portfolio-detail-one" className="sub-menu-item">Portfolio One</Link></li>
                                        <li><Link to="/portfolio-detail-two" className="sub-menu-item">Portfolio Two</Link></li>
                                        <li><Link to="/portfolio-detail-three" className="sub-menu-item">Portfolio Three</Link></li>
                                        <li><Link to="/portfolio-detail-four" className="sub-menu-item">Portfolio Four</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-menu-item">
                            <Link to="#">Docs</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/ui-components" className="sub-menu-item">Components <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">New</span></Link></li>
                                <li><Link to="/documentation" className="sub-menu-item">Documentation</Link></li>
                                <li><Link to="/changelog" className="sub-menu-item">Changelog</Link></li>
                            </ul>
                        </li>

                        <li><Link to="/contact-one" className="sub-menu-item">Contact</Link></li>
                    </ul>
                </div>
            </div >
            
        </nav >
    </>
    return (
        <div >{navbarHtml}</div>
    )
}
