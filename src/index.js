import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
// @ is the path to `./src` folder
import App from '@/components/App'
import Company from '@/components/Company'
import User from '@/components/User'
import About from '@/components/About'
import Join from '@/components/Join'
import Privacy from '@/components/Privacy'

if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

Vue.use(VueRouter)
Vue.use(VueMaterial)

const router = new VueRouter({
  routes: [
    {path: '/', name: 'about', component: About},
    {path: '/join', name: 'join', component: Join},
    {path: '/privacy', name: 'privacy', component: Privacy},
    {path: '/db/:companyName/', name: 'company', component: Company},
    {path: '/db/:companyName/:pageHash', name: 'companyPage', component: Company},
    {path: '/db/:companyName/:pageHash/:userHash', name: 'user', component: User},
    {path: '/db/:companyName/:pageHash/:userHash/:userPageHash', name: 'userPage', component: User},
    // { path: '/bar', component: Bar }
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})