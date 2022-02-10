<template>
    <header class="navigation">
        <div class="headerContainer">
            <a href="#" class="logo">
                <img class="logo" alt="Logo" src="../../assets/logo-white.png"/>
            </a>
            <ul class="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Sobre Nós</a></li>
                <li><a href="#plans">Planos</a></li>
                <li><a href="#rate">Avaliações</a></li>
                <li><a href="#question">Perguntas</a></li>
                <li class="phone"><a href=""><img class="iconPhone" src="../../assets/phone.png" alt="phone-icon">0800</a></li>
            </ul>
            <div id="menu-btn" :class="classMenu" @click="toggle">
                <div class="menu-btn_burguer"></div>
                <HamburguerMenu :class="classMenu"/>
            </div>
        </div>
    </header>
</template>

<script>
import HamburguerMenu from "../hamburguer-menu/hamburguer-menu_component.view.vue";
export default {
    name: 'Navigation',
    components: {
    HamburguerMenu
  },
    data() {
        return {
            menuOpen: false,
            classMenu: '',
    };
  },
    methods:{
        toggle(){
            if(!this.menuOpen){
                this.classMenu = 'active';
                this.menuOpen = true;
                }
            else{
                this.classMenu = '';
                this.menuOpen = false;        
                } 
        }
    },

}
</script>

<style scoped>
.iconPhone{
    margin-right: 10px;
}
.menu{
    list-style: none;
    color: white;
    display: flex;
}
.menu li{
    font-size: 2.4rem;
}
.menu li a{
    color: white;
    padding: 20px;
    text-decoration: none;
}
.menu li a:hover{
  background: rgba(255,255,255, 0.15)
}

header{  
    position: fixed;
    background-color: #08357C;
    display: flex;
    justify-content: center;
    top: 0;
    width: 100%;
    height: 100px;
    z-index: 5;
    transition: 0.6s;
}
.headerContainer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 90%;
    max-width: 1440px;
}

.logo{
    width: 80px;
    margin-left: 2%;
}

header #menu-btn
{
    display: none;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-right: 2%;
    cursor: pointer;
    z-index: 0;
    transition: all .5s ease-in-out;
}

header #menu-btn::before 
{
    content: '';
    position: absolute;
    top: 3px;
    background: white;
}


.menu-btn_burguer
{
    width: 30px;
    height: 5px;
    background: white;
    border-radius: 5px;
    transition: all .5s ease-in-out;
    z-index: 0;
}

.menu-btn_burguer::before,
.menu-btn_burguer::after
{
    content: '';
    position: absolute;
    width: 30px;
    height: 5px;
    background: white;
    border-radius: 5px;
    transition: all .5s ease-in-out;
}

.menu-btn_burguer::before
{
    transform: translateY(-10px);    
}

.menu-btn_burguer::after
{
    transform: translateY(10px);    
}

/* Animation*/ 
#menu-btn.active .menu-btn_burguer{
    transform: translateX(-50px);
    background: transparent;
}

#menu-btn.active .menu-btn_burguer::before{
    transform: rotate(45deg) translate(35px, -35px);
    background: white;
}

#menu-btn.active .menu-btn_burguer::after{
    transform: rotate(-45deg) translate(35px, 35px);
    background: white;
}

@media (max-width: 1015px){
    header #menu-btn{
        display: flex;
    }
    .menu{
        display: none;
    }
}
</style>