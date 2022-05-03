<template>
    <div class="container">
      <a name="home"></a>
      <div class="info">
        <div class="icons">
          <a href="https://www.instagram.com/haxnempreendimentos/" class="link"><img src="@/assets/instagram.png" alt="" class="icon"></a>
          <a href="https://www.twitter.com/haxnlicita" class="link"><img src="@/assets/twitter.png" alt="" class="icon"/></a>
          <a href="https://www.facebook.com/haxnempreendimentos" class="link"><img src="@/assets/facebook.png" alt="" class="icon"></a>
          <a href="https://www.youtube.com/channel/UCywU-tFndbG8SHlW3HfeHrA" class="link"><img src="@/assets/youtube.png" alt="" class="icon"></a>
          <a href="https://www.linkedin.com/company/haxn/" class="link"><img src="@/assets/linkedin.png" alt="" class="icon"></a>
        </div>
        <h1 class="tittle">Multiplique<br> suas vendas<br> <span>para o governo!</span></h1>
        <p class="text">Seu departamento de licitação completo e tercerizado!</p>
        <div class="buttons">
          <select class="selectNew" v-model="local">
            <option disabled value="">Escolha a unidade mais próxima</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Juiz de Fora">Juiz de Fora</option>
          </select>
          <a class="linkButton" :href="whatsapp">
            <img class="iconWhats" src="../../assets/whatsapp.png" alt="whatsapp-icon">
          Contate nos</a>
        </div>
      </div>
      <img class="imagemFlat" src="../../assets/leilao.png" alt="dois_caras_apertando_as_mãos">
    </div>
</template>

<script>
export default {
  name: 'Home',
    data() {
        return {
            local: '',
            whatsapp: '',
    };
  },
  watch:{
    local(){
      if(this.local=="Rio de Janeiro"){
        this.whatsapp = "https://www.wppredirect.tk/go/?p=552130305567&m=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20da%20HAXN.com.br%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Assessoria%20Especializada%20em%20licita%C3%A7%C3%B5es%20e%20Mercado%20B2B.";
      }else{
        this.whatsapp = "https://www.wppredirect.tk/go/?p=553230171537&m=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20da%20HAXN.com.br%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Assessoria%20Especializada%20em%20licita%C3%A7%C3%B5es%20e%20Mercado%20B2B.";
      }
    }
  },
}
</script>

<style>
.icons{
  display: flex;
  flex-direction: row;
}
.icon{
  cursor: pointer;
  padding-right: 15px;
  width: 40px;
  height: 40px;
}
.iconWhats{
  margin-right: 5px;
}
.text{
  margin-top: 20px;
  margin-bottom: 21px;
}
.buttons{
  display: flex;
  flex-direction: row;
}
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    width: 100%;
    /* border-radius: 0px 0px 42px 42px; */
  }
  .info{
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
.selectNew{
  margin-bottom: 5px;
}
.linkButton {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #123274;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  color: #FFFFFF;
  box-shadow: 0px 3.15551px 31.5551px rgba(231, 234, 238, 0.07);
  width: 180px;
  height: 60px;
  border-radius: 0px 41px 41px 0px;
  text-decoration: none;
}
.linkButton:hover{
  background-color: #1f4ba5;
}
.imagemFlat {
  display: flex;
  justify-content: center;
  width: 100rem;
  margin-bottom: 40px;
}

@media (max-width: 1340px){
  .imagemFlat{
    width: 80rem;
  }
}@media (max-width: 1240px){
  .imagemFlat{
    width: 70rem;
  }
}
@media (max-width: 1080px){
  html{
    font-size: 50%;
  }
  .imagemFlat{
    width: 60rem;
  }
}
@media (max-width: 986px){
  .container{
    flex-direction: column;
  }
  .icons{
    justify-content: center;
  }
  .tittle{
    text-align: center;
  }
}
@media (max-width: 560px){
  .imagemFlat{
    width: 50rem;
  }
  .buttons{
    flex-direction: column;
    align-items: center;
  }
  .linkButton{
    border-radius: 20px;
    width: 350px;
  }
  .selectNew{
    border-radius: 20px;
    width: 350px;
  }
    .tittle{
    text-align: center;
  }
}
@media (max-width: 425px){
  html{
    font-size: 50%;
  }
  .imagemFlat{
    width: 50rem;
  }
}
@media (max-width: 400px){
  .imagemFlat{
    width: 45rem;
}
}
@media (max-width: 360px){
  html{
    font-size: 40%;
  }
  .imagemFlat{
    width: 45rem;
  }
  .buttons{
    flex-direction: column;
  }
  .linkButton{
    font-family: Roboto;
    background-color: #123274;
    font-style: normal;
    font-weight: bold;
    font-size: 1.9rem;
    line-height: 2.2rem;
    text-align: center;
    color: #FFFFFF;
    border-radius: 20px;
    width: 300px;
  }
  .selectNew{
    border-radius: 20px;
    width: 300px;
  }
  .tittle{
    text-align: center;
  }
}
@media (max-width: 360px){
  .imagemFlat{
    width: 40rem;
}
}
</style>