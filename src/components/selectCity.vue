<template>
  <div class="ir-select select">
      {{label}}
    <select class="ir-province"></select>
    <select @input="$emit('input', $event.target.value)" class="ir-city"></select>
</div>
</template>

<script>
export default {
name:'SelectCity',
props:{
    label:String,
}
}
</script>

<style scoped>
.select{
    margin: 10px 0;
}
</style>