<template>
    <div class="about">
        <div class="cont1">
        <h1 class="tittle">Sobre <span>nós</span></h1>
        <p class="text">A HAXN é uma empresa de tecnologia e serviços agregados
        especializada em assessoria de licitações públicas, que muda completamente
        a forma com que as empresas privadas negociam com setores públicos, impactando
        radicalmente o mercado de vendas governamentais.  Usamos as melhores tecnologias
        e Data Centers disponíveis. Garantimos alta disponibilidade, segurança e
        velocidade junto a um serviço de ponta, onde o foco é aumentar as suas vendas
        governamentais e facilitar o seu dia a dia, sendo o seu departamento de licitações
        completo e terceirizado.</p>
        </div>
        <video class="imagemTeam" controls>
            <source  src="../../assets/video.mp4" type="video/mp4">
            Seu navegador n~~ao suporta tags de vídeo.
        </video>
        <!-- <img class="imagemTeam" src="../../assets/team.png" alt="dois_caras_apertando_as_mãos"> -->
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .about{
        padding: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
        margin-top: 40px;
        background: #EEF4FA;
    }
    p{
        text-align: initial;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 2.4rem;
        line-height: 28px;
        /* or 175% */


        color: #282938;

        opacity: 0.7;
    }
    .imagemTeam{
        width: 60%;
    }
    .cont1{
        width: 1000px;
        padding: 20px;
    }
    @media (max-width: 1080px){
        .about{
            flex-direction: column;
        }
        .cont1{
        width: fit-content;
    }
    .imagemTeam{
        width: 100%;
    }
    }
    @media (max-width: 1080px){
        .about{
            padding: 20px;
        }
    }
    @media (max-width: 360px){
        .about{
            padding: 10px;
        }
    }
</style>