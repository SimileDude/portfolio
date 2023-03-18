import { Route, Routes } from 'react-router-dom';
import LeftPanel from './components/LeftPanel';
import routes from './routes/routes';

function App() {
  const routeComponents = routes.map((route, index) => {
    return (
      <Route key={index} path={route.path} element={<route.component />} />
    );
  });
  return (
    <div className="app">
      <Routes>{routeComponents}</Routes>
    </div>
  );
}

export default App;

