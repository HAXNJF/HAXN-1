<template>
    <div class="plan">
        <h2 class="planTittle">Standard</h2>
        <h1 class="price">R$999</h1>
        <p class="planText">Única plataforma integrada, completa e
        automatizada do mercado.</p>
        <div class="allTopic">
        <div class="topic">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Elaboração de e-mail específico para acompanhamento de pregões e empenhos; Grupo WhatsApp Empresarial para comunicação e
 informativos;</p>
        </div>
        <div class="topic">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Recolhimento de documento e apontamento de pendências fiscais  e legais;</p>
        </div>
        <div class="topic">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Gerenciamento de cadastro nos portais de compras do Governo e Privado (B2B); SICAF; Portal de Compras Públicas; Licitações-E;
Caixa Econômica Federal; Petronect; Mercado Eletrônico, NIMBI; Bling; Mercado Livre; Americanas; Magalu e diversos outros</p>
        </div>
        <div class="topic" v-show="active">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Análise de risco (análise completa de risco de pagamento do órgão);</p>
        </div>
        <div class="topic" v-show="active">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Elaboração e Cadastramento de Proposta Comercial</p>
        </div>
        <div class="topic" v-show="active">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Busca de oportunidades DIARIAMENTE</p>
        </div>
        <div class="topic" v-show="active">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Análise de Concorrência/Mercado</p>
        </div>
        <div class="topic">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Análise de Edital</p>
        </div>
        <div class="buttonShow">
            <button 
            v-show="!active" 
            @click="showMore" 
            class="verMais">
            ver mais
            </button>
            <button 
            v-show="active" 
            @click="showLess" 
            class="verMais">
            ver menos
            </button>
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 406px;
    height: fit-content;
    background: #1C1E53;
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
    padding-top: 20px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 36px;
    color: #FFFFFF;
}
.planText{
    padding-top: 8px;
    padding-left: 48px;
    padding-right: 48px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 28px;
    color: #FFFFFF;
    opacity: 0.7;
}
.pointer{
    margin-top: 2px;
    padding-left: 48px;
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
    padding-right: 48px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
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
    background: #FCD980;
    color: black;
    border-radius: 41px;
    }
    @media (max-width: 418px){
        .plan{
            width: fit-content;
            height: fit-content;
        }
    }
</style>