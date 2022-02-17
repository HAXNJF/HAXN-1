<template>
    <footer>
        <img class="logoWhite" src="../../assets/logo.png" alt="logo-white">
        <ul class="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Sobre Nós</a></li>
                <li><a href="#plans">Planos</a></li>
                <li><a href="#rate">Avaliações</a></li>
                <li><a href="#question">Perguntas</a></li>
        </ul>
        <div class="copy">
            <p>Desenvolvido por Kayo Sávio</p>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.logoWhite{
    width: 200px;
}
footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: #0B3072;
    width: 100%;
    height: fit-content;
}
.menu{
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.menu li{
    list-style: none;
    padding: 30px 20px 10px;    
}
.menu li a{
    text-decoration: none;
    color: white;
}
.copy{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    width: 100%;
    height: 50px;
    background-color: white;
}
@media (max-width: 620px){
    .menu{
        flex-direction: column;
    }
}
</style>