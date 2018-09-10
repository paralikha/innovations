export default [
  {
    path: 'test',
    name: 'test',
    component: () => import('../Test.vue'),
    meta: {
      title: 'Test',
      sort: 6,
      external: true,
      excludeFromRoot: true,
      authenticatable: false,
      icon: 'mdi-book-multiple-variant',
    },
  },
]
