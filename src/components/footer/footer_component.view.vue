<template>
    <footer>
        <img class="logoWhite" src="../../assets/whiteLogo.png" alt="logo-white">
        <div class="icons">
          <a href="https://www.instagram.com/haxnempreendimentos/" class="link"><img src="@/assets/instagram_white.png" alt="" class="icon"></a>
          <a href="https://www.twitter.com/haxnlicita" class="link"><img src="@/assets/twitter_white.png" alt="" class="icon"/></a>
          <a href="https://www.facebook.com/haxnempreendimentos" class="link"><img src="@/assets/facebook_white.png" alt="" class="icon"></a>
          <a href="https://www.youtube.com/channel/UCywU-tFndbG8SHlW3HfeHrA" class="link"><img src="@/assets/youtube_white.png" alt="" class="icon"></a>
          <a href="https://www.linkedin.com/company/haxn/" class="link"><img src="@/assets/linkedin_white.png" alt="" class="icon"></a>
        </div>
        <div class="menu">
            <p class="address"><span>HAXN Rio de Janeiro</span><br> Avenida Julio de Sá Bierrenbach alm N° 65 <br>BLC 01 SALA 101
            Jacarepagua,<br> Rio de Janeiro - RJ
            22775-028</p>
            <p class="address"><span>HAXN Minas Gerais</span><br> Rua Espirito Santo N° 1115 SL 2011
            Centro,<br> Juiz de Fora - MG
            36016-905
            </p>
        </div>
        <p class="developed">© 2020–2022 HAXN Empreendimentos Ltda,Todos os direitos reservados.  Desenvolvido por Kayo Sávio</p>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.link{
    color: white;
}
.address{
    padding: 20px;
    width: 100%;
    max-width: 500px;
    text-align: center;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    opacity: 0.8;
}
.address span{
    font-size: 20px;
    font-weight: 600;
}
.developed{
    margin-top: 40px;
    color: white;
    opacity: 0.3;
    text-align: center;
}
.logoWhite{
    width: 200px;
}
footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #0B3072;
    width: 100%;
    height: fit-content;
}
.menu{
    width: 100%;
    max-width: 900px;
    font-size: 16px;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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