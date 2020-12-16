<template>
  <div class="card-product">
    <div class="container">
      <div class="row">
        <div class="card shadow" style="width: 15rem;">
          <img :src="'../assets/image/'+product.gambar" class="card-img-top" :alt="product.nama">
          <div class="card-body">
            <h5 class="card-title">{{product.nama}}</h5>
            <p class="card-text">Harga : <strong>Rp.</strong>{{product.harga}}</p>
            <router-link :to="'/foods/'+product.id" class="btn btn-primary"><b-icon-cart></b-icon-cart>  Pesan</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    name:'CartProduct',
    props:['product']
  }
</script>
