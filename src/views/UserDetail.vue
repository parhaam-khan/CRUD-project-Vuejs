<template>
<b-container class="mt-5">
<div>
    <b-row>
        <b-col md="2">
        <b-img class="user-image" :src="user.image" fluid alt="image-1"></b-img>
        </b-col>
         <b-col md="6">
           <h3>{{user.name}} {{user.family}}</h3>
                 <ul class="mb-5">
                <li v-for="(course,index) in user.courses" :key="index">
                <h6> {{course}} </h6>
                </li>
                </ul> 
                  <h6 class="text-muted">
                      <span><font-awesome-icon icon="fa-solid fa-location-dot" /></span>
                      {{user.city}}
                      </h6>
                  <h6 class="text-muted">
                     <font-awesome-icon icon="fa-solid fa-clock" />
                      {{user.courseHours}} ساعت تدریس
                      </h6>
                  <h6 class="text-muted">
                      <span class="star-icon">
                  <font-awesome-icon icon="fa-solid fa-star"/>
                  </span>
                      {{user.rate}} | از {{user.allRate}} نفر
                      </h6>
        </b-col>
         <b-col md="4">
              <div>
                   <h5 class="text-muted">     
                  <font-awesome-icon icon="fa-solid fa-chalkboard-user" />
                    درباره مدرس
                   </h5>

                   <h6 class="text-muted about">{{user.about}}</h6>
                      </div>
                      <div class="mt-5 text-center">
                          <h6>
                             هزینه 1 ساعت کلاس : <span class="price"> {{user.price}} هزار تومان   </span></h6>
                          <h6 class="see-more">
                               <span class="ms-2">
                               <font-awesome-icon icon="fa-solid fa-calendar" />
                                </span> 
                               رزرو کلاس(جلسه اول رایگان)
                               
                               </h6>
                      </div>
        </b-col>
    </b-row>
</div>
<div>
<b-row>
    <b-col md="3">
     <div>
         <button class="tag-button-larger">
             <font-awesome-icon icon="fa-solid fa-tag" />
             ریاضی
         </button>
         <button class="tag-button">
             <font-awesome-icon icon="fa-solid fa-tag" />
             فیزیک
         </button>
     </div>
     <div>
          <button class="tag-button">
              <font-awesome-icon icon="fa-solid fa-tag" />
              شیمی
          </button>
         <button class="tag-button-larger">
             <font-awesome-icon icon="fa-solid fa-tag" />
             زیست شناسی
         </button>
     </div>
     <div>
         <button class="tag-button-larger">
             <font-awesome-icon icon="fa-solid fa-tag" />
             ادبیات
         </button>
         <button class="tag-button">
             <font-awesome-icon icon="fa-solid fa-tag" />
             روانشناسی
         </button>
     </div>
     <div>
         <button class="tag-button">
             <font-awesome-icon icon="fa-solid fa-tag" />
             نویسندگی
         </button>
         <button class="tag-button-larger">
             <font-awesome-icon icon="fa-solid fa-tag" />
             فیزیک هسته ای
         </button>
     </div>
     <div>
         <button class="tag-button-larger">
             <font-awesome-icon icon="fa-solid fa-tag" />
           تئاتر و سینما  
         </button>
         <button class="tag-button">
             <font-awesome-icon icon="fa-solid fa-tag" />
        ورزش     
         </button>
     </div>
     <div>
         <button class="tag-button">
             <font-awesome-icon icon="fa-solid fa-tag" />
             هندسه
         </button>
         <button class="tag-button-larger">
             <font-awesome-icon icon="fa-solid fa-tag" />
             بیولوژی
         </button>
     </div>
    </b-col>
    <b-col class="mt-5" md="9">
      <b-tabs content-class="mt-3" justified>
    <b-tab active>
        <template #title>
         <h6 class="text-muted"> <font-awesome-icon icon="fa-solid fa-book" /> درباره کلاس ها  </h6>
      </template>
        
        <ul class="mb-5">
                <li class="mb-5" v-for="(course,index) in user.courses" :key="index">
                <h5> {{course}} </h5>
                <h6 class="about-course">
                   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. 
                   چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                     تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. 
                     در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                      وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </h6>
                </li>
                </ul> 
    </b-tab>
    <b-tab>
         <template #title>
         <h6  class="text-muted">  <font-awesome-icon icon="fa-solid fa-align-center" /> رزومه مدرس   </h6>
      </template>
        <p>nothing</p>
        </b-tab>
    <b-tab >
        <template #title>
         <h6 class="text-muted"><font-awesome-icon icon="fa-solid fa-video" /> کالکشن ویدیوها    </h6>
      </template>
        <p>nothing</p>
        </b-tab>
    <b-tab>
        <template #title>
         <h6 class="text-muted"><font-awesome-icon icon="fa-solid fa-comments" />  نظرات و امتیازات</h6>
      </template>
        <p>nothing</p>
        </b-tab>
  </b-tabs>
    </b-col>
</b-row>
</div>
</b-container>
</template>

<script>
import {BRow,BCol,BContainer,BTab,BTabs} from 'bootstrap-vue'
export default {
name: 'UserDetail',

components:{
    BTab,
    BTabs,
BRow,
BCol,
BContainer
},

data() {
    const user = this.$route.params
    return{
    user:{
        id:user.id,
        name: user.name,
         family:user.family,
        image:user.image,
        courses:user.courses,
        city:user.city,
        courseHours:user.courseHours,
         rate:user.rate,
         allRate:user.allRate,
        price:user.price,
         about:user.about
    }
    }
}
}


</script>

<style>
.user-image{
border-radius: 50%;
}
.see-more{
    padding: 13px 30px;
    background: #21a57c;
    color: #fff;
    border-radius: 5px;
}

ul li::marker {
    color:#2898c7
    }
.price{
    color: #21a57c;
}
.about-course,.about{
line-height: 30px;
}
.star-icon {
  color: #f6f50f;
}
.tag-button{
    padding: 5px 7px;
    margin: 5px 5px;
    border: none;
    border-radius: 5px;
    background: #e6e7e9;
    color: #63666d;
}
.tag-button-larger{
    padding: 5px 30px;
    margin: 5px 5px;
    border: none;
    border-radius: 5px;
    background: #e6e7e9;
        color: #63666d;
}
</style>