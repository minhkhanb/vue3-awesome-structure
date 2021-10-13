import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Comp from '../components/comp.vue';
import CompA from '../components/compA.vue';
import CompB from '../components/compB.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/comp',
    components: {
      default: Comp,
      a: CompA,
      b: CompB,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
