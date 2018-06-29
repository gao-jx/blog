export default [
  {
    path: '/',
    redirect: '/home'
  }, {
    name: 'home',
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ 'mod/Page/Home')
  }, {
    name: 'about',
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ 'mod/Page/About')
  }
]
