import About from '../pages/About/About';
import Work from '../pages/Work/Work';
import Skills from '../pages/Skills/Skills';
import Contact from '../pages/Contact/Contact';
import ThankYou from '../pages/Contact/ThankYou';

const navRoutes = [
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
  {
    path: '/thankyou',
    component: ThankYou,
  },
];

export default navRoutes;

