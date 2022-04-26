import Vue from 'vue'

import App from './App.vue'

import store from './store'

import VueRouter from 'vue-router'
import routes from './routes'

// import Vuelidate from 'vuelidate'

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLocationDot ,faClock,faStar,faChalkboardUser,faHouse,
  faSort,faBook,faAlignCenter,faVideo,faComments,faCalendar
  ,faTag,faTrashCan,faPenToSquare,faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'


library.add(faLocationDot,faClock,faStar,faChalkboardUser,faCirclePlus,faHouse,
  faBook,faSort,faAlignCenter,faVideo,faComments,faCalendar,faTag,faTrashCan,faPenToSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueToast)
// Vue.use(Vuelidate)

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
