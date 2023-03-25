import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import routes from './routes/routes';

function App() {
  const routeComponents = routes.map((route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        element={
          <Layout>
            <route.component />
          </Layout>
        }
      />
    );
  });
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        {routeComponents}
      </Routes>
    </div>
  );
}

export default App;

