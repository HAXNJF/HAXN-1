<template>
    <div class="plan">
        <h2 class="planTittle">Plus</h2>
        <h1 class="price">R$1.490,00</h1>
        <p class="planText">Limite de faturamento em contratos<br> <span style="font-weight: bold">R$ 1.000.000,00</span> ao ano.</p>
        <div class="allTopic">
        <div class="topic">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Com direito aos itens do plano Standard;</p>
        </div>
        <div class="topic">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Envio de lances;</p>
        </div>
        <div class="topic">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Acompanhamento de sessão Publica;</p>
        </div>
        <div class="topic" >
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Acompanhamento da adjudicação e homologação do processo licitatório;</p>
        </div>
        <div class="topic">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Acompanhamento do contrato após homologação;</p>
        </div>
        <div class="topic">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Elaboração de peça recursal;</p>
        </div>
        <div class="topic">
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Elaboração de contrarrazões;</p>
        </div>

        <div class="topic" >
            <img class="pointer" src="../../../assets/Pointer.png" alt="pointer">
            <p class="topicText">Elaboração de peça de reequilíbrio de preço do contrato;</p>
        </div>
        
        <div class="buttonShow">
            <div class="buttonShow">
            <a class="verMais" :href="whatsapp">
            <img class="iconWhats" src="@/assets/whatsapp.png" alt="whatsapp-icon">
            Contate nos</a>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active: false,
            whatsapp: 'https://api.whatsapp.com/send?phone=553284873343',
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
    width: 100%;
    max-width: 500px;
    height: fit-content;
    padding: 20px 30px 48px 60px;
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
    text-decoration: none;
    margin-top: 20px;
    font-weight: 500;
    font-size: 1.8rem;
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