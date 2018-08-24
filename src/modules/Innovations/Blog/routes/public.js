export default [
  {
    path: '/blogs',
    name: 'blog.all',
    component: () => import('../All.vue'),
    meta: {
      title: 'Blog',
      sort: 1,
      external: true,
      excludeFromRoot: true,
      authenticatable: false,
      icon: 'mdi-book-multiple-variant',
    },
  },
  {
    path: 'blogs',
    component: () => import('@/components/Layouts/Public.vue'),
    meta: {
      sort: 1,
      external: true,
      excludeFromRoot: true,
      authenticatable: false,
      icon: 'mdi-book-multiple-variant',
    },

    children: [
      {
        path: 'single',
        name: 'blog.single',
        component: () => import('../Single.vue'),
        meta: {
          title: 'Single Blog',
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
