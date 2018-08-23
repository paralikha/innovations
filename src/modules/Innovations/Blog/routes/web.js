export default [
  {
    path: '/blogs',
    component: () => import('@/components/Layouts/Public.vue'),
    meta: {
      title: 'All Courses',
      sort: 5,
    },
    children: [
      {
        path: '',
        name: 'blog.public',
        component: () => import('../All.vue'),
        meta: {
          title: 'All Blogs',
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
