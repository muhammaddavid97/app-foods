<template>
  <div class="Keranjang">
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb" class="breadcrumb-food">
            <div class="col">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/" class="text-success">Home</router-link></li>
                <li class="breadcrumb-item"><router-link to="/foods" class="text-success">Foods</router-link></li>
                <li class="breadcrumb-item" aria-current="page">Keranjang</li>
              </ol>
            </div>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>Keranjang <strong>Saya</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Makanan</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(keranjang, indeks) of jumlahPesan" :key="keranjang.id">
                  <th>{{indeks + 1}}</th>
                  <td>
                    <img :src="'../assets/image/'+keranjang.products.gambar" width="200" class="img-fluid shadow">
                  </td>
                  <td>{{keranjang.products.nama}}</td>
                  <td>{{keranjang.keterangan}}</td>
                  <td>{{keranjang.jumlah_pemesanan}}</td>
                  <td>Rp.{{keranjang.products.harga}}</td>
                  <td align="right">{{total = keranjang.jumlah_pemesanan * keranjang.products.harga}}</td>
                  <td align="center" class="text-danger"><b-icon-trash @click="getHapusDataKeranjang(keranjang.id)"></b-icon-trash></td>
                </tr>
                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Harga : </strong>
                  </td>
                  <td align="right">
                    <strong>Rp. {{totalHarga}}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Form checkout -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="nama">Nama : </label>
              <input type="text" class="form-control" id="nama" v-model="pesan.nama">
            </div>
            <div class="form-group">
              <label for="noMeja">Nomor Meja</label>
              <input type="number" class="form-control" id="noMeja" v-model="pesan.noMeja">
            </div>
            <button type="submit" class="btn btn-primary float-right" @click="checkout()"><b-icon-cart></b-icon-cart>Pesan</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import {mapGetters, mapActions} from 'vuex'
  import axios from 'axios'

  export default{
    name:'Keranjang',
    data(){
      return{
        total:0,
        pesan: {}
      }
    },
    computed:{
      ...mapGetters(['jumlahPesan']),
      totalHarga(){
        return this.jumlahPesan.reduce((items, data) => {
          return items + (data.products.harga * data.jumlah_pemesanan)
        }, 0)
      },
    },
    methods:{
      ...mapActions(['getJumlahPesanFoods', 'getHapusDataKeranjang', 'getPesananSukses']),
      checkout(){
        if (this.pesan.nama && this.pesan.noMeja){
          this.pesan.keranjangs = this.jumlahPesan
          this.$router.push('/data-pesan')
          axios
            .post("http://localhost:3000/pesanans", this.pesan)
            .then(() => {
              this.jumlahPesan.map(item => {
                return this.getPesananSukses(item.id)
              });
              this.$toast.success('Terima kasih makanan anda berhasil dipesan', {
                   type:'success',
                   position:'top-right',
                   duration:3000,
                   dismissible:true
              });
            })
            .catch(err => {
              console.log(err);
            })
        }else{
          this.$toast.error('Please masukan nama dan nomor meja anda', {
            type:'error',
            position:'top-right',
            duration:2000,
            dismissible:true
          });
        }
      }
    },
    mounted(){
      this.getJumlahPesanFoods()
    }
  }
</script>
