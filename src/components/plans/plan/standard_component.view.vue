<template>
    <div class="plan">
        <h2 class="planTittle">Standard</h2>
        <h1 class="price">R$990,00</h1>
        <p class="planText">Limite de faturamento em contratos<br> <span style="font-weight: bold">R$ 500.000,00</span> ao ano.</p>
        <div class="allTopic">
        <div class="topic">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Recolhimento e atualização de documentos de habilitação;</p>
        </div>
        <div class="topic">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Gerenciamento de cadastro nos portais de compras do Governo e Privado (B2B); Comprasnet
; Portal de Compras Públicas; Licitações-E; Caixa Econômica Federal; Petronect; Mercado Eletrônico, NIMBI; </p>
        </div>
        <div class="topic">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Busca de oportunidades DIARIAMENTE;</p>
        </div>
        <div class="topic" >
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Análise de Edital;</p>
        </div>
        <div class="topic" >
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Analise de mercado;</p>
        </div>
        <div class="topic">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Analise de risco de pagamento do órgão;</p>
        </div>
        <div class="topic">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Elaboração e cadastramento de proposta comercial;</p>
        </div>
        <div class="topic">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Comissionamento de 2.5% no êxito se ultrapassarmos o limite de faturamento.</p>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active: false,
        }
    },
    methods:{
        showMore(){
            this.active = true;
        },
        showLess(){
            this.active = false;
        }
    },
}
</script>

<style scoped>
.allTopic{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.buttonShow{
    display: flex;
    justify-content: center;
    align-items: center;
}
.plan{
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    padding: 20px 30px 30px 40px;
    height: fit-content;
    background: #0b1742;
    border-radius: 12px;
}
.price{
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 3.8rem;
    line-height: 56px;
    color: #FFFFFF;
}
.planTittle{
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 36px;
    color: #FFFFFF;
}
.planText{
    padding-top: 8px;
    margin-bottom: 20px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 28px;
    color: #FFFFFF;
    opacity: 0.7;
    text-align: center;
}
.pointer{
    margin-top: 2px;
    height: 24px;
}
.topic{
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.topicText{
    padding-left: 8px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 28px;
    color: #FFFFFF;
}
.verMais{
    margin-top: 20px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 254px;
    height: 64px;
    background: #c4aa60;
    color: black;
    border-radius: 41px;
    }
    @media (max-width: 418px){
        .plan{
            width: fit-content;
            height: fit-content;
        }
    }
    .verMais:hover{
    background-color: #6b5f3d;
    color: white;
}
</style>