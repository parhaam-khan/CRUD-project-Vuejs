<template>
  <div>
    <b-table striped :fields="fields" :items="items">
      <template #cell(operation)="data">
        <span @click="deleteTeacher(data.index)"><font-awesome-icon icon="fa-solid fa-trash-can" /></span>
        <span> <font-awesome-icon icon="fa-solid fa-pen-to-square" /></span>
      </template>
      <template #cell(name)="data">
       <router-link :to="{
                    name: 'userDetail',
                    params: {
                      id: data.item.id,
                      name: data.item.name,
                      family: data.item.family,
                      image: data.item.image,
                      courses: data.item.courses,
                      city: data.item.city,
                      courseHours: data.item.courseHours,
                      rate: data.item.rate,
                      allRate: data.item.allRate,
                      price: data.item.price,
                      about: data.item.about,
                    },
                  }">
       {{data.item.name}}
       </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { BTable } from "bootstrap-vue";
import {mapMutations} from "vuex"

export default {
  name: "BaseTable",

components: {
    BTable,
  },

  props: ["items"],

  data() {
    return {
      fields: [
        { key: "name", label: "نام" },
        { key: "family", label: "family" },
        {key: "gender", label: "gender"},
        { key: "operation", label: "operation" },
      ],
    };
  },

methods:{
    ...mapMutations(['deleteUser']),

  deleteTeacher(index){
  this.deleteUser(index)
  }
}

};
</script>

<style></style>
