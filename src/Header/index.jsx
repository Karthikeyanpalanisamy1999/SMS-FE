import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PROJECT_NAME,ROUTES } from "../Constant";
import { HOME_ROUTE, ABOUT_ROUTE,} from "../Constant/routes";
import './header.scss'

function Header() {
  const navigate = useNavigate();
  const [navbarExpand, setNavbarExpand] = useState(false);

  const menu = [
    {
      label: "Home",
      link: HOME_ROUTE,
      isActive: true,
    },
    {
      label: "About",
      link: ABOUT_ROUTE,
      isActive: true,
    },
  ];

  return (
    <div className="row g-0 header-main">
    <div className="col-12 d-flex justify-content-between align-items-center p-3 top-bar">
        <div
            className="cursor-pointer"
            onClick={() => navigate(ROUTES.HOME_ROUTE)}
        >
            <p>{PROJECT_NAME}</p>
        </div>
    </div>
    <div className="col-12 menu-bar">
        <nav className="navbar navbar-expand-lg navbar-light p-2 py-1">
            <button
                className="navbar-toggler"
                type="button"
                onClick={() => setNavbarExpand(!navbarExpand)}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className={
                    navbarExpand
                        ? 'navbar-collapse'
                        : 'collapse navbar-collapse'
                }
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    {menu.map(({ label, link, isActive }) => (
                        <li
                            key={label}
                            className={`nav-item cursor-pointer${
                                isActive ? ' active' : ''
                            }`}
                        >
                            <p
                                className="nav-link"
                                onClick={() => navigate(link)}
                            >
                                {label}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    </div>
</div>
  );
}

export default Header;
