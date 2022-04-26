<template>
  <div class="user-detail">
    <div class="user-card shadow">
      <!-- -------------teacher-detail---------- -->
      <b-row>
        <b-col md="2">
          <b-img
            class="user-image"
            :src="user.image"
            fluid
            alt="image-1"
          ></b-img>
        </b-col>
        <b-col md="6">
          <h3>{{ user.name }} {{ user.family }}</h3>
          <div class="user-info">
            <ul class="course-list mb-5">
              <li v-for="(course, index) in user.courses" :key="index">
                <h6>{{ course.name }}</h6>
              </li>
            </ul>
          </div>
          <h6 class="text-muted">
            <span><font-awesome-icon icon="fa-solid fa-location-dot" /></span>
            {{ user.city }}
          </h6>
          <h6 class="text-muted">
            <font-awesome-icon icon="fa-solid fa-clock" />
            {{ user.time }} ساعت تدریس
          </h6>
          <h6 class="text-muted">
            <span class="star-icon">
              <font-awesome-icon icon="fa-solid fa-star" />
            </span>
            {{ user.rate }} از | 248نفر
          </h6>
        </b-col>
        <b-col md="4">
          <div class="about-section">
            <h5 class="text-muted">
              <font-awesome-icon icon="fa-solid fa-chalkboard-user" />
              درباره مدرس
            </h5>

            <h6 class="text-muted about">{{ user.aboutTeacher }}</h6>
          </div>
          <div class="mt-5 text-center">
            <h6>
              هزینه 1 ساعت کلاس : <span class="price"> 110 هزار تومان </span>
            </h6>
            <BaseButton :_class="'see-more'">
              <span class="ms-2">
                <font-awesome-icon icon="fa-solid fa-calendar" />
              </span>
              رزرو کلاس(جلسه اول رایگان)
            </BaseButton>
          </div>
        </b-col>
      </b-row>
    </div>
    <div>
      <!--------- tags ----------->
      <b-row>
        <b-col md="3">
          <CourseTag />
        </b-col>
        <!------------- tabs ------------->
        <b-col class="mt-5" md="9">
          <CourseTabs :courses="user.courses" :aboutClass="user.aboutClass" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import CourseTag from "../components/CourseTag.vue";
import CourseTabs from "../components/CourseTabs.vue";
import BaseButton from "../BaseComponents/BaseButton.vue";
export default {
  name: "UserDetail",

  components: {
    CourseTag,
    CourseTabs,
    BaseButton,
  },

  data() {
    const user = this.$route.params;
    return {
      user: {
        id: user.id,
        name: user.name,
        family: user.family,
        image: user.image,
        courses: user.courses,
        city: user.city,
        time: user.time,
        rate: user.rate,
        allRate: user.allRate,
        price: user.price,
        aboutTeacher: user.aboutTeacher,
        aboutClass: user.aboutClass,
      },
    };
  },
};
</script>

<style scoped>
.user-detail {
  margin-top: 7rem;
}
.user-card {
  padding: 20px;
  border-radius: 5px;
  background: #fcfcfc;
}
.user-image {
  border-radius: 50%;
}
.see-more {
  width: 100%;
  padding: 13px 30px;
  background: #1d1560;
  color: #fff;
  border: none;
  border-radius: 5px;
}

ul li::marker {
  color: #2898c7;
}
.price {
  color: #228aae;
}

.about-course,
.about {
  line-height: 30px;
}
.star-icon {
  color: #f6f50f;
}
.about-section {
  word-wrap: break-word;
  height: 8rem;
}
.tab {
  margin-top: 80px;
}
.course-list {
  column-count: 2;
  padding-right: 1rem;
}
.user-info {
  height: 8.5rem;
}
</style>
