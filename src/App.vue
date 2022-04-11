<template>
<div>
  <ul>
      <li><router-link to="/user-form">user form</router-link></li>
      <li><router-link to="/user-table">user table</router-link></li>
      <li><router-link to="/">home</router-link></li>
  </ul>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App',

components:{
 }
}
</script>

<style>

</style>
