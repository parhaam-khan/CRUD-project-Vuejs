import Vue from 'vue'

import App from './App.vue'

import store from './store'

import VueRouter from 'vue-router'
import routes from './routes'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLocationDot ,faClock,faStar,faChalkboardUser,
  faSort,faBook,faAlignCenter,faVideo,faComments,faCalendar,faTag,faTrashCan,faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'


library.add(faLocationDot,faClock,faStar,faChalkboardUser,
  faBook,faSort,faAlignCenter,faVideo,faComments,faCalendar,faTag,faTrashCan,faPenToSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const router =  new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
