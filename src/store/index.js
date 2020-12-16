import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    jumlahPesan:[],
  },
  getters:{
    products: state => state.products,
    jumlahPesan: state => state.jumlahPesan,
  },
  mutations: {
    //data adalah nilai yang diambil dari API
    setItemProducts : (state, data) => state.products = data,
    setJumlahPesanProducts : (state, data) => state.jumlahPesan = data,
    setHapusDataKeranjangs: (state, id) => {
      const index = state.jumlahPesan.findIndex(item => item.id === id)
      state.jumlahPesan.splice(index, 1)
    }
  },
  actions: {
    //method ini akan melakukan request terhadap API
    getDataProduct: ({commit}) => {
      axios.get('http://localhost:3000/best-products')
      .then(function (response) {
        commit('setItemProducts', response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    },
    getDataFoods: ({commit}) => {
      axios.get('http://localhost:3000/products')
      .then(function (response) {
        commit('setItemProducts', response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    },
    //method ini berfungsi untuk mencari data sesuai dengan inputan user
    getSearchFoods: ({commit}, value) => {
      //value => bertindak sebagai paramater dimana nilainya di sesuaikan dengan inputan user
      axios.get('http://localhost:3000/products?q='+value)
      .then(function (response) {
        commit('setItemProducts', response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    },
    getDetailFood: ({commit}, id) => {
      axios.get('http://localhost:3000/products/'+id)
      .then(function (response) {
        commit('setItemProducts', response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    },
    getJumlahPesanFoods : ({commit}) =>{
      axios
      .get('http://localhost:3000/keranjangs')
      .then((response) => {
        commit('setJumlahPesanProducts', response.data)
      })
      .catch(err => console.log(err))
    },
    getHapusDataKeranjang: ({commit}, value) => {
      axios
      .delete('http://localhost:3000/keranjangs/'+value)
      .then(function () {
        commit('setHapusDataKeranjangs', value)
        Vue.$toast.error('Data berhasil dihapus dari keranjang', {
          type:'error',
          position:'top-right',
          duration:2000,
          dismissible:true
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    },
    getPesananSukses: ({commit}, value) =>{
      axios
        .delete('http://localhost:3000/keranjangs/'+value)
        .then(() => {
          commit('setHapusDataKeranjangs', value)
        })
        .catch(err => console.log(err));
    }
  }
})
