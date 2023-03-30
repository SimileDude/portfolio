import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './MainNav.scss';

const PAGE_LINKS = ['About', 'Work', 'Skills', 'Contact'];

const MainNav = ({ closePanel }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const navClass = isHomePage ? 'home-nav' : 'nav';
  const navListClass = isHomePage ? 'home-nav-list' : 'nav-list';
  const navItemClass = isHomePage ? 'home-nav-item' : 'nav-item';

  return (
    <>
      <nav className={navClass}>
        <ul className={navListClass}>
          {PAGE_LINKS.map((link, index) => {
            return (
              <li key={index} className={navItemClass}>
                <NavLink
                  to={`/${link}`}
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''
                  }
                  onClick={closePanel}
                >
                  {link}
                </NavLink>
              </li>
              // return (
              //   <li key={index} className={navItemClass}>
              //     <a
              //       href={isHomePage ? `#${link}` : `/${link}`}
              //       id={link}
              //       onClick={(e) => {
              //         if (isHomePage) {
              //           e.preventDefault();
              //           // closePanel();
              //           document
              //             .getElementById(link)
              //             .scrollIntoView({ behavior: 'smooth' });
              //         } else {
              //           navigate(`/${link}`);
              //           closePanel();
              //         }
              //       }}
              //     >
              //       {link}
              //     </a>
              //   </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default MainNav;

