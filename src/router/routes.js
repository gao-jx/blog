export default [
  {
    name: 'home',
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ 'mod/Page/Home')
  },
  {
    name: 'about',
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ 'mod/Page/About')
  }
]
