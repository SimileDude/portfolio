import About from '../pages/About/About';
import Work from '../pages/Work/Work';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact/Contact';

const routes = [
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

