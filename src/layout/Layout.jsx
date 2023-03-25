import React from 'react';
import LeftPanel from '../components/LeftPanel';
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <LeftPanel />
      <section className="main">{children}</section>
    </div>
  );
};

export default Layout;

