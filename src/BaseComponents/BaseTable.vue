<template>
  <div>
    <b-table class="table" striped :fields="fields" :items="items">
      <!------------ name-cell ---------------->
      <template #cell(name)="data">
        <h6>
          <router-link
            class="name-cell-link"
            :to="{
              name: 'userDetail',
              params: {
                id: data.item.id,
                name: data.item.name,
                family: data.item.family,
                image: data.item.image,
                courses: data.item.courses,
                time: data.item.time,
                city: data.item.city,
                rate: data.item.rate,
                aboutTeacher: data.item.aboutTeacher,
                aboutClass: data.item.aboutClass,
              },
            }"
          >
            {{ data.item.name }}
          </router-link>
        </h6>
      </template>
      <!-------------- family-cell ------------->
      <template #cell(family)="data">
        <h6 class="family-cell">
          {{ data.item.family }}
        </h6>
      </template>
      <!-------------- gender-cell ------------->
      <template #cell(gender)="data">
        <h6 class="gender-cell">
          {{ data.item.gender }}
        </h6>
      </template>
      <!-------------- operation-cell ------------->
      <template #cell(operation)="data">
        <span v-b-modal="`${data.item.id}`" class="trash-icon ms-2">
          <font-awesome-icon
            icon="fa-solid fa-trash-can"
            @click="showModal = true"
          />
        </span>
        <span @click="editTeacher">
          <router-link
            class="edit-link"
            :to="{
              name: 'editForm',
              params: { id: data.item.id },
            }"
          >
            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          </router-link>
        </span>

        <!----------------- delete-teacher-modal ------------->
        <DeleteModal
          :id="`${data.item.id}`"
          :name="data.item.name"
          :family="data.item.family"
          text="کاربر"
          @deleteuser="deleteTeacher(data.index, data.item.id)"
          @notdelete="$bvModal.hide(`${data.item.id}`)"
        />
      </template>
    </b-table>
  </div>
</template>

<script>
import { BTable } from "bootstrap-vue";
import { mapMutations } from "vuex";
import DeleteModal from "../components/DeleteModal.vue";

export default {
  name: "BaseTable",

  components: {
    BTable,
    DeleteModal,
  },

  props: ["items"],

  data() {
    return {
      fields: [
        { key: "name", label: "نام" },
        { key: "family", label: "نام خانوادگی" },
        { key: "gender", label: "جنسیت" },
        { key: "operation", label: "عملیات" },
      ],
    };
  },

  methods: {
    ...mapMutations(["deleteUser", "editUser"]),

    deleteTeacher(index, id) {
      this.deleteUser(index);
      this.$bvModal.hide(`${id}`);
    },

    editTeacher() {
      this.editUser();
    },
  },
};
</script>

<style scoped>
.trash-icon {
  color: #a61f11;
  cursor: pointer;
}
.name-cell-link {
  text-decoration: none;
  color: #6c736c;
}
.name-cell-link:hover {
  color: #494f49;
}
.family-cell,
.gender-cell {
  color: #161716;
}

.table {
  color: #423d41;
  text-align: center;
}
.edit-link {
  color: #0f650a;
}
</style>
