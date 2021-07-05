import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  { path: '/', redirect: '/texts' },
  {
    path: '/texts',
    name: 'Texts',
    component: () => import(/* webpackChunkName: "texts" */ '../views/Texts.vue'),
  },
  {
    path: '/texts/:id',
    name: 'Text',
    component: () => import(/* webpackChunkName: "text" */ '../views/Text.vue'),
  },
  {
    path: '/references',
    name: 'References',
    component: () => import(/* webpackChunkName: "references" */ '../views/References.vue'),
  },
  {
    path: '/references/:id',
    name: 'Reference',
    component: () => import(/* webpackChunkName: "reference" */ '../views/Reference.vue'),
    children: [
      {
        path: '/texts',
        name: 'Nested Texts',
        component: () => import(/* webpackChunkName: "text" */ '../views/Texts.vue'),
      },
      {
        path: '/texts/:id',
        name: 'Nested Text',
        component: () => import(/* webpackChunkName: "text" */ '../views/Text.vue'),
      },
    ],
  },
  {
    path: '/worksheets/',
    name: 'Worksheets',
    component: null,
  },
  {
    path: '/worksheets/:id',
    name: 'Name',
    component: null,
  },
  {
    path: '/:notFound(.*)',
    name: 'Not Found',
    component: () => import(/* webpackChunkName: "not found" */ '../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
