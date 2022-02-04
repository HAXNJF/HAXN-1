<template>
    <section class="container">
          <h1 class="tittle">Quem pode pegar <br>o <span>saldo do FGTS</span><br> como empréstimo?</h1>
          <p class="container-text">Todo trabalhador brasileiro com saldo na conta do FGTS pode obter esse benefício.</p>
          <!-- <p class="container-text">O empréstimo consignado FGTS foi feito para o cidadão brasileiro enfrentar esse momento desafiador.</p>
          <p class="container-text">Um crédito de fácil acesso e com as menores taxas.</p> -->
         <ul class="benefits">
            <li>
              <img class="iconPng" src="../../assets/money-confirm.png">
              <p class="text-benefits">Dinheiro na sua conta no dia<br> seguinte à contratação</p>
            </li>
           <li>
             <img class="iconPng" id="trending-down-img" src="../../assets/trending-down.png">
             <p class="text-benefits">Crédito com as menores<br> taxas do mercado</p>
           </li>
           <li>
             <img class="iconPng" src="../../assets/check-circle.png">
             <p class="text-benefits">Pagamentos debitados direto<br> da sua conta do FGTS</p>
           </li>
           <li>
             <img class="iconPng" src="../../assets/mouse.jpg">
             <p class="text-benefits">Contratação em poucos cliques,<br> tudo 100% digital</p>
           </li>
         </ul>
    </section>
</template>

<script>
</script>

<style scoped>
.iconPng{
  padding: 10px;
}

.benefits {
  display: flex;
  flex-direction: column;
  text-align: center;
  list-style: none;
  padding: 0;
  margin-top: 40px;
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