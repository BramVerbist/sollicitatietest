<template>
  <div>
    <Header/>
    <router-view :json='json' @get-json='getJson'></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data(){
    return{
      json: '',
    }
  },
  methods: {
    getJson(val){
      this.json = val;
    }
  }
}
</script>

