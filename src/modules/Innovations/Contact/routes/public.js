export default [
  {
    path: 'contact',
    name: 'contact',
    component: () => import('../Contact.vue'),
    meta: {
      title: 'Contact',
      sort: 6,
      external: true,
      excludeFromRoot: true,
      authenticatable: false,
      icon: 'mdi-book-multiple-variant',
    },
  },
]
