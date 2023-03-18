import { NavLink } from 'react-router-dom';
import './Home.scss';

const PAGE_LINKS = ['About', 'Work', 'Skills', 'Contact'];

function Home() {
  return (
    <div className="home">
      <aside className="left-edge">
        <span className="multi-colour-radial circle"></span>
        <img
          src="src/assets/Ash_kheradmand.png"
          alt=""
          className="circle portrait"
        />
        <span className="circle color-wheel"></span>
        <span className="diamond-gradient"></span>
      </aside>
      <main className="main-section">
        <nav className="main-nav">
          <ul className="nav-list">
            {PAGE_LINKS.map((link, index) => {
              return (
                <li key={index} className="nav-item">
                  <NavLink to={link}>{link}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <section className="lower-logo-section">
          <div className="dot-design">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="logo-wrapper">
            <div className="logo">AshKherad</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;

