export default [
  {
    path: '',
    component: () => import('../Home.vue'),
    meta: {
      title: 'Home',
      sort: 0,
      excludeInMenu: true,
    },
  }
]
