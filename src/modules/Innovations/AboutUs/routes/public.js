export default [
  {
    path: '/about-us',
    component: () => import('@/components/Layouts/Public.vue'),
    meta: {
      title: 'About Us',
      sort: 6,
      external: true,
      excludeFromRoot: true,
      authenticatable: false,
      icon: 'mdi-book-multiple-variant',
    },
    children: [
      {
        path: '',
        name: 'about-us',
        component: () => import('../AboutUs.vue'),
        meta: {
          title: 'About Us',
          sort: 6,
          external: true,
          excludeFromRoot: true,
          authenticatable: false,
          icon: 'mdi-book-multiple-variant',
        },
      },
    ]
  }
]
