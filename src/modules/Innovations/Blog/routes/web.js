export default [
  {
    path: '/blogs',
    component: () => import('@/components/Layouts/Public.vue'),
    meta: {
      title: 'All Blogs',
      sort: 5,
    },
    children: [
      {
        path: '',
        name: 'blog.all',
        component: () => import('../All.vue'),
        meta: {
          title: 'All Blogs',
          sort: 5,
          external: true,
          excludeFromRoot: true,
          authenticatable: false,
          icon: 'mdi-book-multiple-variant',
        },
      },
      {
        path: 'single',
        name: 'blog.single',
        component: () => import('../Single.vue'),
        meta: {
          title: 'Show Blog',
          sort: 5,
          external: true,
          excludeFromRoot: true,
          authenticatable: false,
          icon: 'mdi-book-multiple-variant',
        },
      }
    ]
  }
]
