<template>
  <b-card class="shadow card w-75">
    <!--------------- form-title --------------->
    <div class="text-center mt-3">
      <h4 v-if="edit">فرم ویرایش مدرس</h4>
      <h4 v-else>فرم ثبت نام مدرس</h4>
    </div>
    <form class="form">
      <b-row>
        <!----------- teacher-name ----------->
        <b-col md="4">
          <div>
            <BaseInput
              label="نام"
              type="text"
              placeholder="نام"
              v-model.trim="username"
            />
            <!-- <span class="error" v-if="!$v.username.required">Field is required</span> -->
          </div>
        </b-col>
        <!--------------- teacher-family -------------->
        <b-col md="4">
          <BaseInput
            label=" نام خانوادگی"
            type="text"
            placeholder="نام خانوادگی "
            v-model.trim="familyName"
          />
        </b-col>
        <!---------------- gender -------------------->
        <b-col md="4">
          <div>
            <RadioButton
              v-model="gender"
              :checkedmale="checkedmale"
              :checkedfemale="checkedfemale"
            />
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <!------------------ city ------------------>
        <b-col md="4">
          <SelectCity v-model="city" />
        </b-col>
        <!-------------- teaching time -------------->
        <b-col md="4">
          <BaseInput
            label="زمان تدریس"
            type="Number"
            placeholder="براساس ساعت وارد کنید..."
            v-model.trim="teachingTime"
          />
        </b-col>
        <!--------------- rating --------------->
        <b-col md="4">
          <div>
            <BaseInput
              label="به دروس امتیاز دهید "
              v-model="rate"
              type="range"
              min="0"
              max="5"
              step="0.5"
            />
            <div class="text-center">
              امتیاز شما (از صفر تا 5) :
              <strong>{{ rate }}</strong>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <!--------------- add-courses ----------------->
        <b-col md="4">
          <BaseInput
            label="درس ها"
            type="text"
            placeholder="درس ها را وارد کنید..."
            v-model.trim="courseName"
          />
          <div class="mt-3">
            <BaseButton
              type="submit"
              :_class="'add-course-button'"
              @clickHandler="addCourse"
            >
              <span class="plus-icon"> اضافه کنید </span>
            </BaseButton>
          </div>
        </b-col>
        <b-col md="8">
          <b-row class="mt-5">
            <!------------ courses added ------------>
            <b-col
              md="3"
              class="course text-center mb-2"
              v-for="(course, index) in courses"
              :key="index"
            >
              {{ course.name }}
              <span v-b-modal="`${course.id}`" class="delete-course me-1">
                <font-awesome-icon icon="fa-solid fa-trash-can" />
              </span>

              <!-------- delete-courses-modal ------------>
              <DeleteModal
                text="درس"
                :id="`${course.id}`"
                :name="course.name"
                @deleteuser="deleteCourse(index, course.id)"
                @notdelete="$bvModal.hide(`${course.id}`)"
              />
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row class="mt-5">
        <!----------- about teacher ----------->
        <b-col md="6">
          <BaseTextArea
            label="درباره مدرس"
            placeholder="درباره مدرس..."
            v-model.trim="aboutTeacher"
            rows="5"
            cols="60"
            maxlength="200"
          />
        </b-col>
        <!-------------- about course ------------->
        <b-col md="6">
          <BaseTextArea
            label="درباره کلاس"
            placeholder="درباره کلاس..."
            v-model.trim="aboutClass"
            rows="5"
            cols="60"
            maxlength="200"
          />
        </b-col>
      </b-row>
      <!------------------ edit & submit button ----------->
      <div class="text-center mt-5">
        <button @click="addTeacher" class="submit-button" type="button">
          <h6 v-if="edit" class="mt-2">ویرایش</h6>
          <h6 v-else class="mt-2">ثبت مدرس</h6>
        </button>
        <!--------- cancel button -------------->
        <router-link class="determent me-3" to="/user-table">
          <span @click="determent"> انصراف </span>
        </router-link>
      </div>
    </form>
  </b-card>
</template>

<script>
import BaseInput from "../BaseComponents/BaseInput.vue";
import BaseButton from "../BaseComponents/BaseButton.vue";
import BaseTextArea from "../BaseComponents/BaseTextArea.vue";
import RadioButton from "../components/RadioButton.vue";
import DeleteModal from "../components/DeleteModal.vue";
import SelectCity from "../components/SelectCity.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  components: {
    BaseInput,
    BaseButton,
    BaseTextArea,
    RadioButton,
    DeleteModal,
    SelectCity,
  },
  data() {
    return {
      username: "",
      familyName: "",
      teachingTime: "",
      gender: "",
      courseName: "",
      city: "",
      rate: "1",
      aboutTeacher: "",
      aboutClass: "",
      requiredAlert: false,
      courses: [],
      checkedmale: "",
      checkedfemale: "",

      userEdit: { id: this.$route.params.id },
    };
  },

  computed: {
    ...mapGetters(["users", "edit"]),
  },

  created() {
    this.$route.name === "editForm" ? this.editUser() : this.falseEditHandler();

    Object.keys(localStorage).forEach((key) => {
      const users = JSON.parse(localStorage.getItem(key));

        users.map((user) => {
        if (user.id === this.userEdit.id || this.$route.name === "editForm") {
          this.username = user.name;
          this.familyName = user.family;
          this.gender = user.gender;
          this.city = user.city;
          this.courses = [...user.courses];
          this.teachingTime = user.time;
          this.rate = user.rate;
          this.aboutTeacher = user.aboutTeacher;
          this.aboutClass = user.aboutClass;

          user.gender === "مرد"
            ? (this.checkedmale = "checked")
            : (this.checkedfemale = "checked");
        }
      });
      
    });
  },

  methods: {
    addCourse(e) {
      e.preventDefault();
      if (this.courseName === "" || this.courses.length >= 6) return;
      const course = {
        id: Math.floor(Math.random() * 1000),
        name: this.courseName,
      };
      this.courses.push(course);
      this.courseName = "";
    },

    ...mapMutations([
      "addUser",
      "editHandler",
      "falseEditHandler",
      "editUser",
      "falseEditHandler",
    ]),

    addTeacher(e) {
      e.preventDefault();

      if (
        this.username === "" ||
        this.familyName === "" ||
        this.gender === "" ||
        this.city === "" ||
        this.courses.length === 0 ||
        this.rate === "" ||
        this.aboutTeacher === "" ||
        this.aboutClass === ""
      ) {
        return this.$toast.error(
        '  پر کردن تمامی اطلاعات الزامیست ',
           {
          position: "top-left",
          duration: 2000,
        });
      }

      const teacher = {
        id: !this.edit
          ? Math.floor(Math.random() * 1000)
          : this.$route.params.id,
        name: this.username,
        family: this.familyName,
        time: this.teachingTime,
        gender: this.gender,
        courses: this.courses,
        city: this.city,
        rate: this.rate,
        aboutTeacher: this.aboutTeacher,
        aboutClass: this.aboutClass,
        image:
          this.gender === "مرد" ? "/images/male.png" : "/images/female.jpg",
      };

      !this.edit ? this.addUser(teacher) : this.editHandler(teacher);
      localStorage.setItem("addUser", JSON.stringify(this.users));
      this.$router.history.push("/user-table");
      this.username = "";
      this.familyName = "";
      this.teachingTime = "";
      this.gender = "";
      this.city = "";
      this.rate = "";
      this.aboutTeacher = "";
      this.aboutClass = "";
    },

    determent() {
      this.falseEditHandler();
    },

    deleteCourse(index, id) {
      this.courses.splice(index, 1);
      this.$bvModal.hide(`${id}`);
    },
  },
};
</script>

<style scoped>
.card {
  margin: 100px auto 0;
}
.form {
  margin: 40px;
}

.plus-icon {
  color: #fff;
}
.course {
  border: none;
  margin: 0 5px;
  border-radius: 5px;
  padding: 10px 5px;
  background: #f7f7f7;
  color: #2a2b2c;
}

.add-course-button {
  border: none;
  border-radius: 5px;
  background: #35823a;
  padding: 5px 10px;
}
.submit-button {
  padding: 7px 30px;
  background: #228aae;
  color: #fff;
  border: none;
  border-radius: 5px;
}
.determent {
  padding: 10px 20px;
  text-decoration: none;
  background: #c1c0c7;
  color: #2f2e34;
  border-radius: 5px;
}
.delete-course {
  cursor: pointer;
}
</style>
