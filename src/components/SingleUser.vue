<template>
  <b-card
   :class="['mb-3 shadow card',
    {'bg-male': user.gender === 'مرد' , 'bg-female':user.gender ==='زن'}]">
    <b-row no-gutters>
      <b-col class="col" md="3">
        <b-card-img class="cardImage" :src="user.image"></b-card-img>
      </b-col>
      <b-col md="9">
        <b-card-body>
          <b-row>
            <b-col md="5">
              <h3>{{ user.name }} {{ user.family }}</h3>
              <div class="user-info">
              <ul class="course-list mb-4 mt-3">
                <li v-for="(course, index) in user.courses" :key="index">
                  <h6 class="course">{{ course.name }}</h6>
                </li>
              </ul>
              </div>
              <h6 class="text-muted">
                <font-awesome-icon icon="fa-solid fa-location-dot" />
                {{ user.city }}
              </h6>
              <h6 class="text-muted">
                <font-awesome-icon icon="fa-solid fa-clock" />
                {{ user.time }} ساعت تدریس
              </h6>
              <h6 class="text-muted">
                <span class="star-icon">
                  <font-awesome-icon icon="fa-solid fa-star"/>
                  </span>
               {{user.rate}} | از 248 نفر
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
                  {{ user.aboutTeacher }}
                </h6>
              </div>
              <div class="mt-5 text-center">
                <h6>
                  هزینه 1 ساعت کلاس :
                  <span class="price">  110هزار تومان  </span>
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
                      time: user.time,
                      rate: user.rate,
                      aboutTeacher: user.aboutTeacher,
                      aboutClass:user.aboutClass
                    },
                  }"
                >
                   <BaseButton :_class="'see-more'">
                    مشاهده پروفایل/رزرو کلاس
                   </BaseButton>
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
import BaseButton from '../BaseComponents/BaseButton.vue'
export default {
  components: {
    BaseButton
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
  height: 250px;
  object-fit: contain;
}
.about {
  line-height: 30px;
  height: 5rem;
}
.link {
  text-decoration: none;
}
.see-more {
  padding: 13px 30px;
  width: 100%;
  border: none;
  background: #1d1560;
  color: #fff;
  border-radius: 5px;
}
.see-more:hover{
    transition: .2s all ease-in-out;
    background: #433c8a;
}

ul li::marker {
  color: #2898c7;
}
.price {
  color: #228aae;
}
.star-icon {
  color: #f6f50f;
}
.taecher-icon{
    color: #3d3d41;
}
.course-list{
   column-count: 2;
  padding-right: 1rem;
}
.course{
    color:#2c2e2e ;
    margin-right: 0;
    font-weight: 700;
}
.user-info{
  height: 7rem;
}
.bg-male{
  background: #e6ebfd;
}
.bg-female{
  background: #feebf8;
}
</style>
