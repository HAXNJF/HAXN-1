<template>
    <div id="navigation" :class="changeMenu">
        <img class="logoWhite" src="../../assets/logo.png" alt="logo-white">
        <ul class="menu-itens">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Sobre Nós</a></li>
                <li><a href="#plans">Planos</a></li>
                <li><a href="#rate">Avaliações</a></li>
                <li><a href="#question">Perguntas</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    props: {
        changeMenu: String
    },
}
</script>

<style scoped>
.logoWhite{
    width: 24.0rem;
}
#navigation
{   
    top: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -100%;
    width: 100%;
    height: 110vh;
    background: #123274;
    z-index: -2;
    display: grid;
    place-items: center;
    transition: 0.5s;
}

#navigation.active
{
    right: 0;
}

.menu-itens
{
    display: flex;
    flex-direction: column;
}

.menu-itens li
{
    list-style: none;
}

.menu-itens li a
{
    text-decoration: none;
    color: white;
    padding: 20px;
}

.menu-itens li a:hover
{
    color: #123274;
    background-color: white;
    padding: 20px;
}

.close-button img {
    width: 32px;
    height: 32px;
    font-size: 25px;
    border: none;
    background: #1F2D27;
    color: white;
    cursor: pointer;
    margin-top: 38px;
    margin-right: 31px;
}
.img-title img {
    margin: 51px auto 0px auto;
}

.menu-itens li {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 38px;
    text-align: center;
    color: white;
    padding: 20px 0;
}
</style>