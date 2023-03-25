import React from 'react';
import { NavLink } from 'react-router-dom';
import './LeftPanel.scss';
import MainNav from './MainNav/MainNav';

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <section className="logo-section">
        <div className="logo">
          <NavLink to="/">AshKherad</NavLink>
        </div>
        {/* <div className="box circle"> </div> */}
      </section>
      <section className="nav-section">
        <MainNav />
      </section>
    </div>
  );
};

export default LeftPanel;

