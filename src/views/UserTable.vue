<template>
<BaseTable :items="users"/>
</template>

<script>
import BaseTable from '../BaseComponents/BaseTable.vue'
import {mapGetters} from 'vuex'
export default {
name: 'UserTable',

components:{
  BaseTable,
},

computed:{
  ...mapGetters(['users']),
},


}
</script>

<style>

</style>