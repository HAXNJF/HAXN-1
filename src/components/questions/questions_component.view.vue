<template>
  <section class="frequent-questions">
    <a name="question"></a>
    <h1 class="tittle"><span>Perguntas</span> Frequentes</h1>
    <Question/>
    <Question/>
    <Question v-show="moreQuestion"/>
    <Question v-show="moreQuestion"/>
    <Question v-show="moreQuestion"/>
    <a @click="showMore" v-show="!moreQuestion" class="linkQuestions">Mais Perguntas</a>
    <a @click="showLess" v-show="moreQuestion" class="linkQuestions">Menos Perguntas</a>
  </section>
</template>

<script>
import Question from './question/question_component';
export default {
  components: {
    Question
  },
  data() {
    return {
      questionActive: '',
      questionDescription: false,
      moreQuestion: false,
    }
  },
  methods: {
        showMore(){
            this.moreQuestion = true;
        },
        showLess(){
            this.moreQuestion = false;
        },
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
.frequent-questions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
}


.linkQuestions {
  margin-top: 20px;
  cursor: pointer;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 160%;
  text-align: center;
  text-decoration-line: underline;
  color: #3877bb;
}
</style>