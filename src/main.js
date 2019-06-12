import Vue from 'vue'
import './plugins/vuetify'
import VueResource from 'vue-resource'
import App from './App.vue'
import VueRouter from 'vue-router'
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue'
import Interests from './components/Interests.vue'
import Contact from './components/Contact.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false

const routes = [
  {
    name: 'AboutMe',
    path: '/',
    component: AboutMe
  },
  {
    name: 'Projects',
    path: '/projects',
    component: Projects
  },
  {
    name: 'Interests',
    path: '/interests',
    component: Interests
  },
  {
    name: 'Contact',
    path: '/contact',
    component: Contact
  },  
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({
  router,    
  render: h => h(App),
}).$mount('#app')
