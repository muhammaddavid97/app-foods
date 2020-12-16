import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Foods from '../views/Foods.vue'
import FoodDetail from '../views/FoodDetail.vue'
import Keranjang from '../views/Keranjang.vue'
import DataPesanan from '../views/DataPesanan.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/foods',
    name:'Foods',
    component:Foods
  },
  {
    path:'/foods/:id',
    name:'FoodDetail',
    component:FoodDetail
  },
  {
    path:'/keranjang',
    name:'Keranjang',
    component:Keranjang
  },
  {
    path:'/data-pesan',
    name:'DataPesanan',
    component:DataPesanan
  },
  {
    path:'*',
    redirect:'/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
