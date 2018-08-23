export default [{
  path: 'contact-us',
  name: 'contact',
  component: () => import('../Contact.vue'),
  meta: {
    title: 'Contact Us',
    sort: 100,
    external: true,
    excludeFromRoot: true,
    authenticatable: false,
    icon: 'mdi-book-multiple-variant',
  },
}]
