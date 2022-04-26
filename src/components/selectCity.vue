<template>
<div class="mt-4">
    <div class="mb-1">
<label for="city">
    <h5>
    شهر
    </h5>
    </label>
    </div>
  <select :value="value"  @input="$emit('input', $event.target.value)" class="select" name="city" id="city">
      <option class="city" :value="province.name" v-for="province in provinces" :key="province.id">
          {{province.name}}
      </option>
  </select>
</div>
</template>

<script>
import provinces from '../provinces.json'
export default {
    props:['value'],
data(){
    return{
        provinces,
    }
}
}
</script>

<style>
.select{
    width: 100%;
     border: 1px solid #7e7a89;
  border-radius: 5px;
}
.city{
    color: #393b3c;
}
select:focus{
    outline:none ;
    border: 2px solid #1a6883;
}
</style>