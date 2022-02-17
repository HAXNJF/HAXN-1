<template>
    <div @click="changeActive" id="container-question">
      <div id="question" :class="questionActive">
        <p class="textQuestion">Teste</p>
      </div>
      <div v-show="questionDescription" class="answer">
        <div class="questions-inside-container">
          <h1>Teste</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt explicabo in minus nostrum magnam illum quis? Consequuntur blanditiis, voluptates quo atque repellendus sit molestias, vitae minus reiciendis, tempora ex? Deserunt?</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
            return {
            questionActive: '',
            questionDescription: false,
            }
        },
    methods:{
        changeActive(){
            if(!this.questionDescription){
                this.questionActive = 'active';
                this.questionDescription = true;
                }
            else{
                this.questionActive = '';
                this.questionDescription = false;        
                } 
        },
  },
}
</script>

<style scoped>
.questions-inside-container ul {
  padding: 0;
}

.questions-inside-container ul li {
  list-style: none;
  margin: 10px 0;
}

  #question:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
    background-color: white;
    transition: all 0.3s;
  }
#container-question {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto;
  padding-bottom: 20px;
}

#question {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-content: center;
  background: linear-gradient(to right, #123274 6px, #ffffff 6px);
  width: 90%;
  height: 56px;
  padding: 6px 15.99px 6px 19px;
  margin: auto;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 2.4rem;
  line-height: 136%;
  letter-spacing: 0.02em;
  box-shadow: 0px 3px 17px rgba(31, 45, 39, 0.4);
  border-radius: 8px;
  color: black;
}


#question p {
  align-self: center;
  margin-bottom: 0;
  font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 2.8rem;
    opacity: 0.7;
}

#question:last-child {
  margin-bottom: 39px;
}
#question.active {
  color: #ffffff;
  background: linear-gradient(
      to right,
      white 6px,
      #123274 6px
  );
}

.answer {
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: fit-content;
  background: #ffffff;
  box-shadow: 0px 13px 24px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0 20px 20px;
  padding: 20px;
  z-index: 1;
}

.answer p {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 2.4rem;
  line-height: 180%;
  letter-spacing: 0.02em;
  color: #000000;
}

.linkQuestions {
  margin-top: 20px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 160%;
  text-align: center;
  text-decoration-line: underline;
  color: #3877bb;
}
.questions-inside-container h1 {
  text-align: center;
}
.questions-inside-container p {
  padding-top: 20px;
  text-align: justify;
}
.questions-inside-container ol li {
  margin: 20px 0;
}
</style>