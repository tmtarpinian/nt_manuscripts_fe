import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  { path: '/', redirect: '/texts' },
  {
    path: '/texts',
    name: 'texts',
    component: () => import(/* webpackChunkName: "texts" */ '../views/Texts.vue'),
  },
  {
    path: '/texts/:id',
    name: 'text',
    component: () => import(/* webpackChunkName: "text" */ '../views/Text.vue'),
  },
  {
    path: '/references',
    name: 'references',
    component: () => import(/* webpackChunkName: "references" */ '../views/References.vue'),
  },
  {
    path: '/references/:id',
    name: 'reference',
    component: () => import(/* webpackChunkName: "reference" */ '../views/Reference.vue'),
    children: [
      {
        path: 'texts',
        name: 'nested-texts',
        component: () => import(/* webpackChunkName: "text" */ '../views/Texts.vue'),
      },
      {
        path: 'texts/:id',
        name: 'nested-text',
        component: () => import(/* webpackChunkName: "text" */ '../views/Text.vue'),
      },
    ],
  },
  {
    path: '/worksheets/',
    name: 'worksheets',
    component: null,
  },
  {
    path: '/worksheets/:id',
    name: 'name',
    component: null,
  },
  {
    path: '/:notFound(.*)',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "not found" */ '../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
