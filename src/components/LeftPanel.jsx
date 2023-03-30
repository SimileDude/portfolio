import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './LeftPanel.scss';
import MainNav from './MainNav/MainNav';
import { TiHome } from 'react-icons/ti';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiFillCloseCircle } from 'react-icons/ai';

const LeftPanel = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  const togglePanelVisibility = () => {
    setIsPanelVisible(!isPanelVisible);
  };

  return (
    <>
      {!isPanelVisible ? (
        <RxHamburgerMenu
          className="hamburger-icon"
          onClick={togglePanelVisibility}
        />
      ) : (
        <AiFillCloseCircle
          className="hamburger-icon"
          onClick={togglePanelVisibility}
        />
      )}

      <div className={`left-panel ${isPanelVisible ? 'is-panel-visible' : ''}`}>
        <main className="main-content">
          <section className="home-section">
            <div className="home-link-container">
              <NavLink to="/" className="home-link">
                <TiHome className="home-icon" />
              </NavLink>
            </div>
          </section>
          <section className="nav-section">
            <MainNav closePanel={togglePanelVisibility} />
          </section>
        </main>
      </div>
    </>
  );
};

export default LeftPanel;

