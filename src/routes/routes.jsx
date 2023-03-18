import Home from '../pages/Home';
import About from '../pages/About';
import Work from '../pages/Work';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/work',
    component: Work,
  },
  {
    path: '/skills',
    component: Skills,
  },
  {
    path: '/contact',
    component: Contact,
  },
];

export default routes;

