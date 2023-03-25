import './Home.scss';
import MainNav from '../../components/MainNav/MainNav';

function Home() {
  return (
    <div className="home">
      {/* <SymbolRain /> */}
      <section className="left-section">
        {/* <span className="circle"></span> */}
        <img
          src="src/assets/AshKheradmand.png"
          alt=""
          className="circle portrait"
        />
        {/* <span className="circle color-wheel"></span> */}
        {/* <span className="diamond-gradient"></span> */}
      </section>
      <main className="main-section">
        <MainNav />
        <section className="lower-logo-section">
          <div className="dot-design">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="logo">AshKherad</div>
        </section>
        <span className="triangle-design"></span>
      </main>
    </div>
  );
}

export default Home;

