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
  {path: '/', redirect: '/texts'},
  {
    path: '/texts', 
    name: 'Texts',
    // const CoachDetail = () => import('./pages/coaches/CoachDetail.vue');
    component: null
  },
  {
    path: '/texts/:id', 
    name: "Text",
    component: null
  },
  {
    path: '/references', 
    name: 'References',
    component: null
  },
  {
    path: '/references/:id', 
    name: 'Reference',
    component: null, 
    children :[
      {
        path: '/texts/:id', 
        name: 'Text',
        component: null
      },
    ]
  },
  {
    path: '/worksheets/', 
    name: 'Worksheets',
    component: null
  },
  {
    path: '/worksheets/:id', 
    name: 'Name',
    component: null
  },
  {
    path: '/:notFound(.*)', 
    name: 'Not Found',
    component: null
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
