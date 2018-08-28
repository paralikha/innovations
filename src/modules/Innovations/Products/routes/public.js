export default [
  {
    path: '/products',
    name: 'products',
    component: () => import('@/components/Layouts/Public.vue'),
    meta: {
      title: 'Products',
      sort: 5,
      withSubmenu: true,
      external: true,
      excludeFromRoot: true,
      authenticatable: false,
      icon: 'mdi-book-multiple-variant',
    },
    children: [
      {
        path: 'elearning',
        name: 'products.elearning',
        component: () => import('../ELearning.vue'),
        meta: {
          title: 'ELearning',
          sort: 5,
          external: true,
          excludeFromRoot: true,
          authenticatable: false,
          icon: 'mdi-book-multiple-variant',
        },
      },
      {
        path: 'ripples',
        name: 'products.ripples',
        component: () => import('../Ripples.vue'),
        meta: {
          title: 'Ripples',
          sort: 5,
          external: true,
          excludeFromRoot: true,
          authenticatable: false,
          icon: 'mdi-book-multiple-variant',
        },
      },
      {
        path: 'application',
        name: 'products.application',
        component: () => import('../Application.vue'),
        meta: {
          title: 'Application',
          sort: 5,
          external: true,
          excludeFromRoot: true,
          authenticatable: false,
          icon: 'mdi-book-multiple-variant',
        },
      },
    ]
  },
]
