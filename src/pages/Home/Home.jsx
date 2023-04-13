import './Home.scss';
import MainNav from '../../components/MainNav/MainNav';

function Home() {
  return (
    <div className="home">
      <section className="left-section">
        <img
          src="/assets/AshKheradmand.png"
          alt="Ash Kheradmand"
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
      </main>
    </div>
  );
}

export default Home;

