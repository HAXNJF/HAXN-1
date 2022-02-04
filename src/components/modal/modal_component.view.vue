<template>
  <div>
    <div v-show="buttonActive" class="modal-simule flex">
      <div v-show="simuleRealize" class="modal-simule-container align-center">
        <h1 class="tittle">Você tem direito a:</h1>
        <div class="line"></div>
        <p class="saldo">{{ valorDisponivel | currencyFilter }}</p>
        <p class="saldo-question">Você gostaria de antecipar quantos anos do saque-aniversário?</p>
        <select v-model="valueYear" class="selectMonth">
          <option v-for="(option, index) in yearOptions" :key="index" :value="option.value">{{ option.label }}</option>
        </select>
        <p class="saldo-question">Quer saber como resgatar? Fale com os nossos representantes!</p>
        <div class="flex">
          <button class="button-simular"><a :href="url" class="linkRepresent" target="_blank">Quero agora!</a>
          </button>
        </div>
        <p class="close-page" @click="simuleRealize=false">Ressimular</p>
      </div>
      <div v-show="!simuleRealize" class="modal-simule-container align-center">
        <h1 class="tittle">Simule</h1>
        <div class="line"></div>
        <p class="saldo-question">Qual o seu saldo FGTS?</p>
        <input v-model="money" class="saldo-input" placeholder="R$" type="number">
        <div class="month">
          <p class="saldo-question">Qual mês você faz aniversário?</p>
          <select v-model="valueMonth" class="selectMonth">
            <option v-for="(option, index) in monthOptions" :key="index" :value="option.value">{{ option.month }}
            </option>
          </select>
          <a class="acess-fgts-app" href="https://www.instagram.com/fgtsja.oficial/">Saiba mais!</a>
        </div>
        <p class="saldo-question2">Não lembra de suas informações?</p>
        <button class="button-simular" @click="simulate">Simular</button>
        <p class="close-page" @click="changeActive">Não, obrigado</p>
      </div>
      <div class="closeSimule" @click="changeActive"></div>
    </div>
    <ButtonSimule @simulation="changeActive"/>
  </div>
</template>

<script>
import ButtonSimule from '../button-simule/button-simule_component.view';
import ModalComponentController from './modal_component.controller';
import {currencyFilter} from '$services/converters_service.services';
import {differenceInDays} from 'date-fns';

export default {
  name: 'Modal',
  filters: {
    currencyFilter
  },
  components: {
    ButtonSimule,
  },
  data() {
    return {
      buttonActive: false,
      simuleRealize: false,
      valueSimulate: '',
      valueMonth: 0,
      valueYear: '',
      money: '',
      valorDisponivel: 0,
      monthOptions: [
        {month: 'Janeiro', value: 0},
        {month: 'Fevereiro', value: 1},
        {month: 'Março', value: 2},
        {month: 'Abril', value: 3},
        {month: 'Maio', value: 4},
        {month: 'Junho', value: 5},
        {month: 'Julho', value: 6},
        {month: 'Agosto', value: 7},
        {month: 'Setembro', value: 8},
        {month: 'Outubro', value: 9},
        {month: 'Novembro', value: 10},
        {month: 'Dezembro', value: 11},
      ],
      yearOptions: [
        {label: '1 aniversário', value: 1},
        {label: '2 aniversário', value: 2},
        {label: '3 aniversário', value: 3},
        {label: '4 aniversário', value: 4},
        {label: '5 aniversário', value: 5},
      ]
    };
  },
  computed: {
    url() {
      return `https://www.wppredirect.tk/go/?p=5527999011449&m=Gostaria%20de%20sacar%20R$%20${this.money},%20meu%20anivers%C3%A1rio%20%C3%A9%20${this.monthOptions[this.valueMonth].month}.${this.valueYear}`
    }
  },
  methods: {
    changeActive() {
      if (this.buttonActive == true) {
        this.buttonActive = false;
        this.simuleRealize = false;
      } else {
        this.buttonActive = true;
      }
    },
    simulate() {
      this.simuleRealize = true;
      const timeInMs = Date.now();
      const dayNow = new Date(timeInMs);
      const atualYear = new Date().getFullYear();
      const monthBirthday = new Date(atualYear, this.valueMonth, 1, 0, 0)
      const diferencaEmDiasDoAniversario = differenceInDays(monthBirthday, dayNow)
      this.controller.simular({diferencaEmDiasDoAniversario, valorDesejado: parseFloat(this.money)})
    }

  },
  beforeMount() {
    this.controller = new ModalComponentController(this);
  }

}
</script>

<style scoped>
.flex {
  display: flex;
}

.align-center {
  text-align: center;
}

.selectMonth {
  margin-top: 7px;
  margin: auto;
  display: block;
  width: 300px;
  height: 50px;
  background: #ffffff;
  opacity: 0.5;
  border: 3px solid #244d3b;
  box-sizing: border-box;
  box-shadow: 0px 13px 24px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
}

.modal-simule {
  content: "";
  position: fixed;
  top: 0vh;
  left: 0px;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: flex-end;
  z-index: 6;
}

.modal-simule-container {
  padding: 20px;
  position: absolute;
  width: 375px;
  height: 450px;
  background: white;
  border-radius: 20px;
  position: absolute;
  z-index: 6;
}

.line {
  margin: auto;
  margin-top: 4px;
  max-width: 302px;
  height: 1px;
  background: rgba(0, 0, 0, 0.2);
}

/****************************************/
.tittle {
  margin-top: 15px;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  color: #1f2d27;
}

.saldo-input {
  margin-top: 7px;
  margin: auto;
  display: block;
  width: 300px;
  height: 50px;
  background: #ffffff;
  opacity: 0.5;
  border: 3px solid #244d3b;
  box-sizing: border-box;
  box-shadow: 0px 13px 24px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
}

.saldo-question2 {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 160%;
  text-align: center;
  color: #1f2d27;
}

.acess-fgts-app {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 160%;
  text-align: center;
  margin-top: 5px;
  text-decoration-line: underline;
  color: #3877bb;
}

.saldo {
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 0.02em;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #11bb77;
}

button {
  display: block;
  margin: auto;
}

.modal-simule::before {
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(58, 83, 72, 0.1);
}

.saldo-question {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 160%;
  text-align: center;
  color: #1f2d27;
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 0 20px;
}

.acess-fgts-app {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 160%;
  text-align: center;
  text-decoration-line: underline;
  color: #3877bb;
}

button {
  display: block;
  margin: auto;
}

.month {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.button-simular {
  cursor: pointer;
  color: white;
  font-size: 19px;
  width: 320px;
  height: 63px;
  background: #11bb77;
  box-shadow: 0px 3.15551px 31.5551px rgba(231, 234, 238, 0.07);
  border-radius: 16.8294px;
  margin-top: 10px;
  border: none;
}

.buttons-simulate {
  cursor: pointer;
  color: white;
  font-size: 19px;
  width: 160px;
  height: 63px;
  background: #11bb77;
  box-shadow: 0px 3.15551px 31.5551px rgba(231, 234, 238, 0.07);
  border-radius: 16.8294px;
  margin-top: 14px;
  border: none;
}

.close-page {
  cursor: pointer;
  width: 121px;
  margin: 16.94px auto 26.94px auto;
  padding: 10px;
  font-weight: bold;
  margin-top: 5px;
  padding: 10px 0;
}

.linkRepresent {
  text-decoration: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 21px;
  text-align: center;

  color: #FFFFFF;
}

body,
h1,
p,
h2,
ul,
li {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}

* {
  box-sizing: border-box;
}

.closeSimule {
  position: fixed;
  top: 0;
  z-index: 4;
  background: rgba(31, 45, 39, 0.9);
  height: 100%;
  width: 100vw;
}
</style>
