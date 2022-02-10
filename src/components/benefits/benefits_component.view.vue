<template>
    <section class="container">
        <ul class="benefits">
            <li>
              <img class="iconPng" src="../../assets/icon1.png">
              <h1>Atendimento<br>Personalizado</h1>
              <p class="text-benefits">Dinheiro na sua conta no dia<br> seguinte à contratação</p>
            </li>
           <li>
             <img class="iconPng" id="trending-down-img" src="../../assets/icon2.png">
             <h1>Estratégias<br>Relevantes</h1>
             <p class="text-benefits">Mais de 70 milhões<br> de contratos homologados.</p>
           </li>
           <li>
             <img class="iconPng" src="../../assets/icon3.png">
             <h1>Sem Mensalidade</h1>
             <p class="text-benefits">Pagamentos debitados direto<br> da sua conta do FGTS</p>
           </li>
         </ul>
    </section>
</template>

<script>
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 0px;
    width: auto;
    padding: 30px;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 0px 14px 36px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    /* border-radius: 0px 0px 42px 42px; */
}

.iconPng{
  padding: 10px;
}

h1{
  color: #08357C;
  text-align: center;
}

.benefits {
  display: flex; 
  list-style: none;
  align-items: center;
  justify-content: center;
}

@media (max-width: 986px){
  .benefits{
    flex-direction: column;
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