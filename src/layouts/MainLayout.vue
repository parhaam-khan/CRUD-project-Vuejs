<template>
<div>
  <TopHeader/>
  <div class="layout">
<b-container>
  <slot></slot>
</b-container>
  </div>
  <MainFooter/>
</div>
</template>

<script>
import TopHeader from '../components/TopHeader.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
name: "MainLayout",
components:{
    TopHeader,
    MainFooter,
}
}
</script>

<style scoped>
.layout{
  min-height: 100vh !important;
}
</style>