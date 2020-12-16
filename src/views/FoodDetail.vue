<template>
  <div class="food-detail">
    <div class="container">
      <div class="row justify-content-center mt-3">
        <div class="col-md-6">
          <nav aria-label="breadcrumb" class="breadcrumb-food">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link to="/" class="text-success">Home</router-link></li>
              <li class="breadcrumb-item"><router-link to="/foods" class="text-success">Foods</router-link></li>
              <li class="breadcrumb-item" aria-current="page">Food Order</li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-6">
          <img :src="'../assets/image/'+products.gambar" style="width: 30rem;" class="img-fluid shadow">
        </div>
        <div class="col-md-6">
          <h2>{{products.nama}}</h2>
          <hr>
          <h4>Harga : <strong>Rp. {{products.harga}}</strong></h4>
          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pemesanan">Jumlah Pesan</label>
              <input type="number" class="form-control" id="jumlah_pemesanan" v-model="pesan.jumlah_pemesanan">
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan</label>
              <textarea class="form-control" id="keterangan" placeholder="Keterangan : Pedas, Sedang atau lainnya" v-model="pesan.keterangan"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" @click="validasi()"><b-icon-cart></b-icon-cart>Pesan</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import {mapGetters, mapActions} from 'vuex';
  import axios from 'axios'
  export default{
    name:'FoodDetail',
    data(){
      return{
        pesan:{}
      }
    },
    computed:{
      ...mapGetters(['products']),
    },
    methods:{
      ...mapActions(['getDetailFood']),
      validasi(){
        if (this.pesan.jumlah_pemesanan){
          this.pesan.products = this.products
          this.$router.push('/keranjang')
          axios
            .post("http://localhost:3000/keranjangs", this.pesan)
            .then(() => {
              this.$toast.success('Data berhasil masuk keranjang', {
                   type:'success',
                   position:'top-right',
                   duration:2000,
                   dismissible:true
              });
            })
        }else{
          this.$toast.error('Jumlah pesanan tidak boleh kosong', {
            type:'error',
            position:'top-right',
            duration:2000,
            dismissible:true
          });
        }
      }
    },
    mounted(){
      this.getDetailFood(this.$route.params.id)
    },
  }
</script>


<style lang="css" scoped>
.breadcrumb-food{
  background-color: transparent;
  padding: 0;
}

.breadcrumb-item.active{
  font-weight: bold;
  color: green;
}

</style>
