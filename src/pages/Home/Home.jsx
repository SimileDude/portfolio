import './Home.scss';
import MainNav from '../../components/MainNav/MainNav';

function Home() {
  return (
    <div className="home">
      <section className="left-section">
        {/* <span className="circle"></span> */}
        <img
          src="src/assets/AshKheradmand.png"
          alt=""
          className="circle portrait"
        />
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
        {/* <div className="triangle-design">
          <img
            src="src/assets/technology_img.jpg"
            alt="technology_background"
          />
        </div> */}
      </main>
    </div>
  );
}

export default Home;

