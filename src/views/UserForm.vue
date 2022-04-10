<template>
  <form @submit="addTeacher">
    <BaseInput
      label="Username"
      type="text"
      placeholder="Username"
      v-model="username"
    />
    <BaseInput
      label="family name"
      type="text"
      placeholder="family name"
      v-model="familyName"
    />
    <RadioButton v-model="gender" />
    <BaseInput
      label="teaching time"
      type="Number"
      placeholder="time(hours)"
      v-model="teachingTime"
    />
    <div>
      <BaseInput
        label="courses"
        type="text"
        placeholder="course"
        v-model="courseName"
      />
      <BaseButton :addCourse="addCourse" text="add course" />
      <p v-for="(course, index) in courses" :key="index">
        {{ course.name }}
      </p>
    </div>
    <SelectCity label="choose your city" v-model="city" />
    <div>
      <BaseInput v-model="rate" type="range" min="0" max="5" step="0.5" />
      {{ rate }}
    </div>
    <BaseTextArea
      label="about teacher"
      placeholder="about teacher..."
      v-model="aboutTeacher"
      rows="4"
      cols="50"
    />
    <BaseTextArea
      label="about class"
      placeholder="about class..."
      v-model="aboutClass"
      rows="4"
      cols="50"
    />
    <div>
      <Button type="submit">add teacher</Button>
    </div>
  </form>
</template>

<script>
import BaseInput from '../BaseComponents/BaseInput.vue'
import BaseButton from '../BaseComponents/BaseButton.vue'
import BaseTextArea from '../BaseComponents/BaseTextArea.vue'
import SelectCity from '../components/selectCity.vue'
import RadioButton from '../components/RadioButton.vue'
export default {
components:{
    BaseInput,
    BaseButton,
    BaseTextArea,
    SelectCity,
    RadioButton,
},
data(){
    return{
        username: '',
        familyName: '',
        teachingTime: '',
        gender:'',
        courseName: '',
        city:'',
        rate:'',
        aboutTeacher:'',
        aboutClass: '',
        courses:[],
        teacherList: []
    }
},
methods:{
    addCourse(){
        if(this.courseName === "") return;
const course = {name:this.courseName}
 this.courses.push(course)
   this.courseName = ""
    },

addTeacher(e){
    e.preventDefault();
    if(this.username===""||this.familyName===""||
    this.gender===""||this.courses.length===0||
    this.city===""||this.rate===""||this.aboutTeacher===""||this.aboutClass===""){
        return console.log('fill all fields')
    }

    const teacher = {
    name:this.username,
    family: this.familyName,
    time: this.teachingTime,
    gender: this.gender,
    courses: this.courses,
    city:this.city,
    rate:this.rate,
    aboutTeacher:this.aboutTeacher,
    aboutClass: this.aboutClass,
    }

   this.teacherList.push(teacher)
   console.log(this.teacherList)
   this.username =""
     this.familyName=""
    this.teachingTime=""
     this.gender=""
     this.city=""
     this.rate=""
    this.aboutTeacher=""
this.aboutClass=""
},    
},
}
</script>

<style scoped></style>
