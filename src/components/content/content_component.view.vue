<template>
    <div class="content">
      <div class="line"></div> 
      <Home/>
      <Benefits/>
      <div class="line"></div>
      <About/>
      <div class="line"></div>
      <Questions/>
      <div class="line"></div>
      <Plans/>
      <div class="line"></div>
      <Rating/>
    </div>
</template>

<script>
import Home from '../home/home_component.view';
import About from '../about/about_component.view';
import Benefits from '../benefits/benefits_component.view';
import Plans from '../plans/plans_component.view';
import Questions from '../questions/questions_component.view';
import Rating from '../rating/rating_component.view';

export default {
    name: 'Content',
    components: {
    About,
    Home,
    Plans,
    Benefits,
    Questions,
    Rating,
  },
  data() {
    return {
      buttonActive: false,
    };
  },
  methods:{
        clickLink(){
          if(this.buttonActive==true){
                this.buttonActive = false;

            }else{
                this.buttonActive = true;
            }
        },
    },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.line {
  margin-top: 80px;
  margin-bottom: 80px;
  width: 100%;
  max-width: 1080px;
  height: 1px;
  opacity: 0.2;
  background-color: black;
}
.content{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 40px;
  width: 90%;
  max-width: 1440px;
}
</style>