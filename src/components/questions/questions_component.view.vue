<template>
  <section class="frequent-questions">
    <h1 class="tittle"><span>Perguntas</span> Frequentes</h1>
    <Question :tittle="questions.tittle1" :description="questions.description1"/>
    <Question :tittle="questions.tittle2" :description="questions.description2"/>
    <Question :tittle="questions.tittle3" :description="questions.description3"/>
    <Question :tittle="questions.tittle4" :description="questions.description4"/>
    <Question :tittle="questions.tittle5" :description="questions.description5" v-show="moreQuestion"/>
    <Question :tittle="questions.tittle6" :description="questions.description6" v-show="moreQuestion"/>
    <Question :tittle="questions.tittle7" :description="questions.description7" v-show="moreQuestion"/>
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
      questions: {
        tittle1: 'Como e feito o cálculo de limite de faturamento de cada plano?',
        tittle2: 'O que é Empenho?',
        tittle3: 'O que acontece se a minha empresa atingir o limite de faturamento do plano escolhido?',
        tittle4: 'O comissionamento é cobrado em cima do valor bruto do contrato ou do valor da ordem de serviço? ',
        tittle5: 'Como é pago o comissionamento?',
        tittle6: 'Qual é a validade do plano?',
        tittle7: 'Quem são nossos clientes ?',
        description1: 'O limite de faturamento de cada plano é baseado sobre o valor das ordens de serviços (empenhos), não levando em conta o valor bruto do contrato fechados com entes públicos, pois pode haver diferença no valor total empenhados ao final do contrato.',
        description2: 'O empenho é a etapa em que o governo reserva o dinheiro que será pago quando o bem for entregue ou o serviço concluído.',
        description3: 'Quando exceder o limite de faturamento em contratos públicos obtidos com assessoria da HAXN Empreendimentos, iremos cobrar um comissionamento sobre o valor dos contratos que ultrapassarem o limite pré-estabelecido, referente ao plano escolhido.',
        description4: 'O valor do comissionamento e baseado sobre o valor bruto do contrato, porém pago de acordo com os valores empenhados. Ou seja, somente em cima do valor efetivamente recebido e constante em sua NOTA FISCAL emitida.',
        description5: 'O comissionamento é pago  quando o cliente receber o  valor do empenho em sua conta bancária.',
        description6: 'Os nossos planos começam com uma validade mínima de 6 meses.',
        description7: 'Projetos acrílicos CORTA-VIRUS – Ligue Grátis: 0800-591-1967 (cortavirus.com.br), Rezende Roriz Rezende Roriz | Incorporação e Construção, Uno vigilância UNO Segurança & Vigilância – Especializada em Segurança Patrimonial, Vigilância Armada e Desarmada com Expertise em Segurança para Eventos! (unoseguranca.com.br), DCO DCO Limpeza | Saúde e Bem-Estar, Libra https://www.libraservadministrativos.com.br/, Suprema https://www.supremaserv.com/, Seka Empreendimentos, ALDV, Sally Clean, Ecofarma, Almanac, Owl FIlms',
      }
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
  height: fit-content;
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
.linkQuestions:hover{
  color: #121212;
}
</style>