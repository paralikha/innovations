export default [
  {
    path: '/blogs',
    name: 'blogs',
    // component: () => import('@/components/Layouts/Public.vue'),
    component: () => import('../All.vue'),
    meta: {
      title: 'Blog',
      sort: 6,
      external: true,
      excludeFromRoot: true,
      authenticatable: false,
      icon: 'mdi-book-multiple-variant',
    },
    // children: [
    //   {
    //     path: '',
    //     name: 'blog.all',
    //     component: () => import('../All.vue'),
    //     meta: {
    //       title: 'Blog',
    //       sort: 6,
    //       external: true,
    //       excludeFromRoot: true,
    //       authenticatable: false,
    //       icon: 'mdi-book-multiple-variant',
    //     },
    //   },
    //   {
    //     path: 'single',
    //     name: 'blog.single',
    //     component: () => import('../Single.vue'),
    //     meta: {
    //       title: 'Single Blog',
    //       sort: 1,
    //       external: true,
    //       excludeFromRoot: true,
    //       authenticatable: false,
    //       icon: 'mdi-book-multiple-variant',
    //     },
    //   },
    // ]
  },
]
