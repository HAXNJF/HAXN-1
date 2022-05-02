<template>
 
    <section class="container">
    
        <div class="numeros">
          <Item 
          tittle=""
          subTittle="+50 milhões arrematados desde o inicio de nossa operação em  julho de 2020"
          description=""
          image="money.svg"
          />
          <Item 
          tittle=""
          subTittle="+1200 processos licitatorios participados desde o inicio de nossa operação"
          description=""
          image="processo.svg"
          />
          <Item
          :list="items"
          tittle=""
          subTittle="+80% das licitações que vencemos, nossos clientes obtiveram mais lucros do que esperado"
          description=""
          image="analytic.svg"
          />
        </div>
    </section>
    
</template>

<script>
import Item from './item_numeros.view';
export default {
  components: {
    Item,
  },
  data() {
    return {
      items: [
    
      ]
    }
  }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    padding: 50px;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 0px 14px 36px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    /* border-radius: 0px 0px 42px 42px; */
}

.iconPng{
  padding: 10px;
}



.numeros {
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}

@media (max-width: 986px){
  .numeros{
    flex-direction: column;
}
}

li{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}

.text-numeros {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 180%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
}

</style>