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
        meta: {
          title: '首页'
        },
        component: () => import('@/views/home/index')
      },
      {
        path: 'news',
        name: 'news',
        meta: {
          title: '新闻列表'
        },
        component: () => import('@/views/news/index')
      },
      {
        path: 'newsdetail',
        name: 'newsdetail',
        meta: {
          title: '新闻详情'
        },
        component: () => import('@/views/news/newsdetail/index')
      },
      {
        path: 'recruit',
        name: 'recruit',
        meta: {
          title: '招募列表'
        },
        component: () => import('@/views/recruit/index')
      },
      {
        path: 'recruitdetail',
        name: 'recruitdetail',
        meta: {
          title: '招募详情'
        },
        component: () => import('@/views/recruit/recruitdetail/index')
      },
      {
        path: 'teams',
        name: 'teams',
        meta: {
          title: '专家团队'
        },
        component: () => import('@/views/teams/index')
      },
      {
        path: 'about',
        name: 'about',
        meta: {
          title: '关于我们'
        },
        component: () => import('@/views/about/index')
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
