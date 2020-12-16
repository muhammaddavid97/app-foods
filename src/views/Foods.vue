<template>
  <div id="foods">
    <div class="container">
      <div class="row justify-content-md-center mt-4">
        <div class="col-md-5">
          <h2>Daftar Menu <strong>Makanan</strong></h2>
        </div>
        <div class="col-md-11 mt-3">
          <div class="input-group mb-3">
            <input type="text" v-model="search" @keyup="getSearchFoods(search)" class="form-control" placeholder="Cari Makanan Favorit Anda" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default"><b-icon-search></b-icon-search></span>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <CartProduct
          class="list-foods"
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import CartProduct from '@/components/CartProduct.vue';
  import {mapGetters, mapActions} from 'vuex';

  export default{
    name:'Foods',
    data(){
      return{
        search:''
      }
    },
    computed:{
      ...mapGetters(['products'])
    },
    methods:{
      ...mapActions(['getDataFoods', 'getSearchFoods'])
    },
    mounted(){
      this.getDataFoods()
    },
    components:{CartProduct}
  }
</script>

<style media="screen">
  .list-foods{
    margin: 20px;
    padding-right: 20px;
  }
</style>
