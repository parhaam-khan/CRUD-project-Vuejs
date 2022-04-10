<template>
<div>
   <p>Please select your favorite Web language:</p>
<input  @input="$emit('input', $event.target.value)" type="radio" id="man" name="gender" value="man">
<label for="man">man</label><br>
<input  @input="$emit('input', $event.target.value)" type="radio" id="woman" name="gender" value="woman">
 <label for="css">woman</label>
</div>
</template>

<script>
export default {
name:'RadioButton'
}
</script>

<style>

</style>