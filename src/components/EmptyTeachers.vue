<template>
<div>
   <div class="mb-4">
  <h4>
      {{text}}
       مدرسین خالی است
       </h4>
    </div>
    <div @click="falseEdit">
  <router-link class="add-teacher" to="/user-form">
  <span class="add">
  مدرسی اضافه کنید
  </span>
  </router-link>
    </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
name: 'EmptyTeachers',
props:['text'],
methods:{
  ...mapMutations(['falseEditHandler']),
   falseEdit() {
      this.falseEditHandler();
    },
}
}
</script>

<style>
.add{
  padding: 7px 15px;
  background: #35823a;
  border-radius: 5px;
}
.add-teacher{
  text-decoration: none;
  color: #fff;
}
.add-teacher:hover{
  color: #fff;
}
</style>