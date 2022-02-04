<template>
    <header>
        <a href="#" class="logo">
            <v-img
            alt="Logo"
            src="../../assets/logoGreen.png"
            ></v-img>
        </a>
        <div id="menu-btn" :class="classMenu" @click="toggle">
            <div class="menu-btn_burguer"></div>
            <HamburguerMenu :class="classMenu"/>
        </div>
    </header>
</template>

<script>
import HamburguerMenu from "../hamburguer-menu/hamburguer-menu_component.view.vue";
export default {
    name: 'Home',
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
header{
    background: white;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 30px 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
    transition: 0.6s;
}

.logo{
    position: relative;
    width: 81px;
    height: 33px;
    z-index: 0;
}

header #menu-btn
{
    display: flex;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    z-index: 0;
    transition: all .5s ease-in-out;
}

header #menu-btn::before 
{
    content: '';
    position: absolute;
    top: 3px;
    background: #1F2D27;
}


.menu-btn_burguer
{
    width: 30px;
    height: 5px;
    background: #1F2D27;
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
    background: #1F2D27;
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
</style>