<template>
  <section class="frequent-questions">
    <h1 class="tittle"><span>Perguntas</span> Frequentes</h1>
    <Question :tittle="questions.tittle1" :description="questions.description1"/>
    <Question :tittle="questions.tittle2" :description="questions.description2"/>
    <Question :tittle="questions.tittle3" :description="questions.description3"/>
    <Question :tittle="questions.tittle4" :description="questions.description4"/>
    <Question :tittle="questions.tittle5" :description="questions.description5" v-show="moreQuestion"/>
    <Question :tittle="questions.tittle6" :description="questions.description6" v-show="moreQuestion"/>
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
        tittle1: 'Como funcionam as licitações públicas? ',
        tittle2: 'Quais documentos a minha empresa precisa para participar de licitações públicas?',
        tittle3: 'Como funciona o pagamento dos contratos públicos?',
        tittle4: 'Não tenho capital de giro para iniciar minhas vendas, existe alguma alternativa?',
        tittle5: 'Sou microempreendedor, posso participar de licitações públicas?',
        tittle6: 'Qual é a validade do plano?',
        description1: 'Licitações públicas é um processo de compra governamental. Onde o governo anuncia o que quer comprar, você avalia o objeto os prazos e condições, cadastrando assim a sua proposta para aquele pregão. Vencendo a disputa é só aguardar o empenho (ordem de serviço) e entregar o produto.',
        description2: 'Para participar de licitações públicas é necessário que a sua empresa esteja com as obrigações ficais e trabalhistas em dia. As principais certidões são as Certidões de regularidade fiscal da Receita Federal, negativa de débitos estaduais, negativa de débitos municipais, de regularidade do FGTS e negativa de débitos trabalhistas.',
        description3: 'O governo tem um prazo de 30 dias úteis após a entrega do produto/serviço para realizar a quitação da nota fiscal. Porém na pratica o governo paga em até 15 dias úteis. A HAXN antes de entrar em qualquer proposta, faz uma analise de risco de pagamento do órgão, diminuindo os riscos para os nossos clientes.',
        description4: 'O governo criou um programa de antecipação de recebíveis. O AntecipaGov foi desenvolvido com o objetivo de permitir que fornecedores usem seus contratos administrativos, como garantia para empréstimos e financiamentos em instituições financeiras credenciadas, pelo Ministério da Economia (ME).',
        description5: 'Qualquer empresa devidamente registrada e com as suas obrigações fiscais e trabalhistas em dia, podem participar de processos licitatórios e ainda usufruir de benefícios estabelecidos na Lei 123 2006, tais como: Regularização tardia de algum documento fiscal com pendências; Direito de preferência, apelidado com “empate ficto”; Exclusividade nas licitações cujo valor seja de até R$80.000,00.',
        description6: 'Nossos planos possuem validade de até 6 meses.',
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
  background: #123274;
  padding: 15px;
  width: 250px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 160%;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: 1s;
}
.linkQuestions:hover{
  background-color: #3877bb;
}
</style>