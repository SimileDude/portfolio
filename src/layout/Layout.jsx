import React, { useEffect } from 'react';
import LeftPanel from '../components/LeftPanel';
import './Layout.scss';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="layout">
      <LeftPanel />
      <section className="main">{children}</section>
    </div>
  );
};

export default Layout;

