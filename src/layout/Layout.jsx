import React from 'react';
import LeftPanel from '../components/LeftPanel';
import './Layout.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <LeftPanel />
      <section className="main">{children}</section>
    </div>
  );
};

export default Layout;

