<template>
  <button type="button" @click="addCourse">
      {{text}}
  </button>
</template>

<script>
export default {
    name: 'BaseButton',
props:{
    text: String,
    addCourse:Function,
}
}
</script>

<style>

</style>