export default [
  {
    path: '',
    name: 'home',
    component: () => import('../Home.vue'),
    meta: {
      title: 'Home',
      sort: 1,
      external: true,
      excludeFromRoot: true,
      excludeInMenu: true,
      authenticatable: false,
      icon: 'mdi-book-multiple-variant',
    },
  },
]
