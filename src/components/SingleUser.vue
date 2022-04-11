<template>
  <b-card class="mb-3 shadow card">
    <b-row no-gutters>
      <b-col class="col" md="3">
        <b-card-img class="cardImage" :src="user.image"></b-card-img>
      </b-col>
      <b-col md="9">
        <b-card-body>
          <b-row>
            <b-col md="5">
              <h3>{{ user.name }} {{ user.family }}</h3>
              <ul class="mb-5 mt-3">
                <li v-for="(course, index) in user.courses" :key="index">
                  <h6 class="course">{{ course.name }}</h6>
                </li>
              </ul>
              <h6 class="text-muted">
                <font-awesome-icon icon="fa-solid fa-location-dot" />
                {{ user.city }}
              </h6>
              <h6 class="text-muted">
                <font-awesome-icon icon="fa-solid fa-clock" />
                {{ user.courseHours }} ساعت تدریس
              </h6>
              <h6 class="text-muted">
                <span class="star-icon">
                  <font-awesome-icon icon="fa-solid fa-star"/>
                  </span>
                {{ user.rate }} | از {{ user.allRate }} نفر
              </h6>
            </b-col>
            <b-col class="about" md="7">
              <div>
                <h5 class="text-muted">
                    <span class="taecher-icon">
                  <font-awesome-icon icon="fa-solid fa-chalkboard-user" />
                    </span>
                  درباره مدرس
                </h5>
                <h6 class="about text-muted">
                  {{ user.about }}
                </h6>
              </div>
              <div class="mt-5 text-center">
                <h6>
                  هزینه 1 ساعت کلاس :
                  <span class="price"> {{ user.price }} هزار تومان </span>
                </h6>
                <router-link
                  class="link"
                  :to="{
                    name: 'userDetail',
                    params: {
                      id: user.id,
                      name: user.name,
                      family: user.family,
                      image: user.image,
                      courses: user.courses,
                      city: user.city,
                      courseHours: user.courseHours,
                      rate: user.rate,
                      allRate: user.allRate,
                      price: user.price,
                      about: user.about,
                    },
                  }"
                >
                  <h6 class="see-more">مشاهده پروفایل/رزرو کلاس</h6>
                </router-link>
              </div>
            </b-col>
          </b-row>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BCard, BCardImg, BRow, BCol, BCardBody } from "bootstrap-vue";
export default {
  components: {
    BRow,
    BCol,
    BCardBody,
    BCardImg,
    BCard,
  },

  props: ["user"],
};
</script>

<style scoped>
.card {
  margin: 0 auto;
}
.cardImage {
  border-radius: 50%;
}
.about {
  line-height: 30px;
}
.link {
  text-decoration: none;
}
.see-more {
  padding: 13px 30px;
  background: #21a57c;
  color: #fff;
  border-radius: 5px;
}
.see-more:hover{
    transition: .2s all ease-in-out;
    background: #29d09c;
}

ul li::marker {
  color: #2898c7;
}
.price {
  color: #21a57c;
}
.star-icon {
  color: #f6f50f;
}
.taecher-icon{
    color: #2c2e2e;
}
.course{
    color:#2c2e2e ;
    font-weight: 700;
}
</style>
