export default [
  {
    path: '',
    component: () => import('@/components/Layouts/Public.vue'),
    meta: {
      title: 'All Courses',
      sort: 5,
    },
    children: [
      {
        path: '',
        name: 'home.public',
        component: () => import('../Home.vue'),
        meta: {
          title: 'Home Page',
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
