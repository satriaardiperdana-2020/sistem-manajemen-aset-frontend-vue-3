import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import AsetView
import AsetView from '../views/Aset/View.vue'
import AsetCreate from '../views/Aset/Create.vue'
import AsetEdit from '../views/Aset/Edit.vue';
       

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    // UNTUK MENU ASET
    {
      path: '/aset',
      name: 'aset',
      component: AsetView
    },
    // END UNTUK MENU ASET
    {
      path: '/aset/create',
      name: 'asetCreate',
      component: AsetCreate
    },
    {
      path: '/aset/:tbmaId/edit',
      name: 'asetEdit',
      component: AsetEdit
    },
  ]
})

export default router
