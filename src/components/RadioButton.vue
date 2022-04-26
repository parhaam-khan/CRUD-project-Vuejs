<template>
<div class="radio">
   <div>
      <h5>جنسیت</h5>
   </div>
   <div class="radio-button">
      <input class="check" :checked="checkedmale"  @input="$emit('input', $event.target.value)"
       type="radio" id="man" name="gender" value="مرد">
<label  for="man">مرد</label><br>

<input class="check" :checked="checkedfemale" @input="$emit('input', $event.target.value)"
 type="radio" id="woman" name="gender" value="زن">
 <label  for="css">زن</label>
   </div>
</div>
</template>

<script>
export default {
name:'RadioButton',
props:{
   checkedmale:String,
   checkedfemale:String,
   refmale:String,
   reffemale:String
}
}
</script>

<style scoped>
.radio{
   margin: 30px 0 0;
}
.radio-button{
   display: flex;
}
input{
   width: 10%;
}
.check{
   margin-top:10px ;
}
</style>