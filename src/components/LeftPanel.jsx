// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './LeftPanel.scss';
// import MainNav from './MainNav/MainNav';

// const LeftPanel = () => {
//   return (
//     <div className="left-panel">
//       <main className="main-content">
//         <section className="logo-section">
//           <div className="logo">
//             <NavLink to="/" className="logo-link">
//               <span className="firstname">Ash</span>
//               <span className="lastname">Kherad</span>
//             </NavLink>
//           </div>
//           {/* <div className="box circle"> </div> */}
//         </section>
//         <section className="nav-section">
//           <MainNav />
//         </section>
//       </main>
//     </div>
//   );
// };

// export default LeftPanel;

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

      {/* <RxHamburgerMenu
        className="hamburger-icon"
        onClick={togglePanelVisibility}
      /> */}
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
            <MainNav />
          </section>
        </main>
      </div>
    </>
  );
};

export default LeftPanel;

