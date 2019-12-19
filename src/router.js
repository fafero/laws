import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import New from './views/new.vue'
import Login from './views/login.vue'
import Employer from './views/employer.vue'
import Client from './views/client.vue'
import Produit from './views/produit.vue'
import Admin from './views/admin.vue'
import Grandpanier from './views/grandpanier.vue'
import Grandorder from './views/grandorder.vue'
import Grandcomplete from './views/grandcomplete.vue'
import NewClient from './views/AddNewClient.vue'
import Collection from './views/collection.vue'
import Accessoir from './views/accessoir.vue'
import Femme from './views/femme.vue'
import Homme from './views/homme.vue'
import StreetStyle from './views/streetstyle.vue'
import Agenda from './views/agenda.vue'
import APropos from './views/apropos.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_url,
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/new',
      name: 'new',
      component: New
    },
     {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/employer',
      name: 'employer',
      component: Employer
    },
    {
      path: '/client',
      name: 'client',
      component: Client
    },
    {
      path: '/produit',
      name: 'produit',
      component: Produit
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/grandpanier',
      name: 'grandpanier',
      component: Grandpanier
    },
    {
      path: '/grandorder',
      name: 'grandorder',
      component: Grandorder
    },
    {
      path: '/grandcomplete',
      name: 'grandcomplete',
      component: Grandcomplete
    },
    {
      path: '/AddNewClient',
      name: 'AddNewClient',
      component: NewClient
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection
    }, 
    {
      path: '/accessoir',
      name: 'accessoir',
      component: Accessoir
    }, 
    {
      path: '/femme',
      name: 'femme',
      component: Femme
    },
    {
      path: '/homme',
      name: 'homme',
      component: Homme
    },
    {
      path: '/streetstyle',
      name: 'streetstyle',
      component: StreetStyle
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: Agenda
    },
    {
      path: '/apropos',
      name: 'apropos',
      component: APropos
    }
  ]
})
