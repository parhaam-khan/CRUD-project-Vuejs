<template>
<div class="app">
   <MainLayout>
  <router-view></router-view>
   </MainLayout>
</div>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'App',

components:{
  MainLayout,
 },
 computed:{
   ...mapGetters(['edit'])
 }
}
</script>

<style>
 @font-face {
  font-family: Vazir ;
    src: url('./assets/Vazir/Vazir.eot'),
     url('./assets/Vazir/Vazir.eot?#iefix') format('embedded-opentype'),
         url('./assets/Vazir/Vazir.woff2') format('woff2'),
         url('./assets/Vazir/Vazir.woff') format('woff'),
         url('./assets/Vazir/Vazir.ttf') format('truetype');
    
 } 

  .app{
  
  font-family: Vazir ;
  color: #3d3d41;
}    
</style>
