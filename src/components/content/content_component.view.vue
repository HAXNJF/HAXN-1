<template>
    <div class="content">
      <a name="home"></a>
      <div class="line"></div> 
      <Home/>
      <a name="benefits"></a>
      <Benefits/>
      <a name="about"></a>
      <div class="line"></div>
      <About/>
      <div class="line"></div>
      <a name="plans"></a>
      <Plans/>
      <a name="rate"></a>
      <!-- <div class="line"></div>
      <Rating/> -->
      <a name="question"></a>
      <div class="line"></div>
      <Questions/>
      <a name="icon"></a>
      <div class="line"></div>
      <h1 class="tittle">Nossos <span>Clientes</span></h1>
      <div class="icons_view">
        <Icons logo="emp1.png" link="https://www.rezenderoriz.com.br/"/>
        <Icons logo="emp2.png" link="https://sjetextil.com.br/"/>
        <Icons logo="emp3.png" link="https://cortavirus.com.br/"/>
        <Icons logo="emp4.png" link="https://unoseguranca.com.br/"/>
      </div>
      <div class="icons_view2">
        <Icons logo="emp5.png" link="https://upservice.com.br/"/>
        <Icons logo="emp6.jpeg" link="https://www.libraservadministrativos.com.br/"/>
        <Icons logo="emp7.png" link="https://www.supremaserv.com/"/>
        <Icons logo="emp8.png" link="https://www.dcolimpeza.com.br/"/>
      </div>
    </div>
</template>

<script>
import Home from '../home/home_component.view';
import Icons from '../icons/icons_view.vue';
import About from '../about/about_component.view';
import Benefits from '../benefits/benefits_component.view';
import Plans from '../plans/plans_component.view';
import Questions from '../questions/questions_component.view';
// import Rating from '../rating/rating_component.view';

export default {
    name: 'Content',
    components: {
    About,
    Home,
    Plans,
    Benefits,
    Questions,
    Icons,
    // Rating,
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
.icons_view{
  display: grid;
  flex-direction: row;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 80px;
}
.icons_view2{
  margin-top: 80px;
  display: grid;
  flex-direction: row;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 80px;
  padding-bottom: 40px;
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