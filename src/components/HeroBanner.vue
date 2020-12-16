<template>
  <div class="HeroBanner">
    <!-- Versi Desktop -->
    <div class="d-none d-md-block">
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex h-100 mt-5">
            <div class="justify-content-center align-self-center-">
              <h2><strong>Delicious Food Menu, </strong><br>in Your Gadget</h2>
              <p>Ayo Segera Pesan Makanan Anda dengan klik tombol dibawah</p>
              <router-link to="/foods" class="btn btn-lg btn-primary" name="button"><b-icon icon="arrow-right"></b-icon>Pesan</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/image/Hero.png" alt="" class="mb-2 ml-5">
        </div>
      </div>
    </div>
    <!-- versi mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row">
        <div class="col-md-6 mb-5">
          <img src="../assets/image/Hero.png" alt="" class="mb-2 ml-5">
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100 mt-5">
            <div class="justify-content-center align-self-center-">
              <h2><strong>Delicious Food Menu, </strong><br>in Your Gadget</h2>
              <p>Ayo Segera Pesan Makanan Anda dengan klik tombol dibawah</p>
              <button class="btn btn-lg btn-primary" name="button"><b-icon icon="arrow-right"></b-icon>Pesan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    name:'HeroBanner'
  }
</script>
