<template>
  <div id="navbar-compont">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <router-link to="/" class="navbar-brand">Kulineran</router-link>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mr-auto">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/foods" class="nav-link">Foods</router-link>
          </div>
          <div class="navbar-nav ml-auto">
            <router-link to="/keranjang" class="nav-link">Keranjang<b-icon icon="bag"></b-icon><span class="badge badge-danger ml-2">{{jumlahPesan.length}}</span></router-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="mt-4">
      <router-view></router-view>
    </div>
  </div>
</template>


<script type="text/javascript">
  import {mapActions, mapGetters} from 'vuex'
  export default{
    name:'Navbar',
    computed:{
      ...mapGetters(['jumlahPesan'])
    },
    methods:{
      ...mapActions(['getJumlahPesanFoods'])
    },
    mounted(){
      this.getJumlahPesanFoods()
    }
  }
</script>
<style media="screen">

</style>
