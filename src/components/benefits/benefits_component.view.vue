<template>
    <section class="container">
        <div class="benefits">
          <Item 
          tittle="Missão"
          subTittle="A razão pela qual existimos."
          description="Desenvolver, com excelência, a prestação de serviços em assessoria de licitações publicas, na busca de oportunidades vantajosos  e seguras para nossos clientes.  "
          image="task.svg"
          />
          <Item 
          tittle="Visão"
          subTittle="Como e Onde queremos chegar."
          description="Através de lisura, comprometimento, desempenho e efetividade, sermos reconhecidos pela excelência de nosso atendimento, logrando êxito em contratações públicas para os nossos clientes e, ao mesmo tempo, garantindo que o dinheiro público seja aplicado com transparência."
          image="eye.svg"
          />
          <Item
          :list="items"
          tittle="Valores"
          subTittle="Identidade da empresa."
          image="smile.svg"
          />
        </div>
    </section>
</template>

<script>
import Item from './item_benfits.view';
export default {
  components: {
    Item,
  },
  data() {
    return {
      items: [
        'Ética',
        'Responsabilidade social',
        'Empreendedorismo',
        'Excelência',
        'Respeito',
        'Transparência',
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
    width: 100%;
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



.benefits {
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}

@media (max-width: 986px){
  .benefits{
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;

}
}

li{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}

.text-benefits {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 180%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
}

</style>