import BasicLayout from '@/layouts/BasicLayout'
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export default [
  {
    path: '/',
    redirect: { name: 'home' },
    component: BasicLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('@/views/news/index')
      },
      {
        path: 'newsdetail',
        name: 'newsdetail',
        component: () => import('@/views/news/newsdetail/index')
      },
      {
        path: 'recruit',
        name: 'recruit',
        component: () => import('@/views/recruit/index')
      },
      {
        path: 'recruitdetail',
        name: 'recruitdetail',
        component: () => import('@/views/recruit/recruitdetail/index')
      },
      {
        path: 'teams',
        name: 'teams',
        component: () => import('@/views/teams/index')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/about/index')
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
