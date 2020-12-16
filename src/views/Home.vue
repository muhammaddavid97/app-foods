<template>
  <div class="home">
    <div class="container mt-5">
      <div class="row align-self-center">
        <HeroBanner />
      </div>
      <div class="row foods-banner">
        <div class="col">
          <h2>Best<strong>Foods</strong></h2>
        </div>
        <div class="col mt-2">
          <router-link to="/foods" class="btn btn-success float-right"><b-icon-eye class="pr-2"></b-icon-eye>Lihat Semua</router-link>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <CartProduct class="cartproduct" v-for="product in products" :key="product.id" :product="product">

        </CartProduct>
      </div>
    </div>
  </div>
</template>

<script>
  import HeroBanner from '@/components/HeroBanner.vue';
  import CartProduct from '@/components/CartProduct.vue';
  import {mapGetters, mapActions} from 'vuex';

  export default{
    name:'Home',
    components:{
      HeroBanner,
      CartProduct
    },
    computed:{
      ...mapGetters(['products'])
    },
    methods:{
      ...mapActions(["getDataProduct"])
    },
    mounted(){
      this.getDataProduct()
    }
  }
</script>

<style media="screen">
  .cartproduct{
    margin-right: 27px;
    margin-top: 30px;
  }

  .foods-banner{
    margin-bottom: 20px;
    border-radius: 15px;
  }
</style>
