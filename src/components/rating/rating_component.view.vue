<template>
    <div class="rate">
      <h1 class="tittle">O que estão dizendo <span>sobre nós?</span></h1>
      <p class="text">Avaliações do nosso serviço na Apple Store e Google Play.</p>
      <div class="gridRate">
        <div class="containerRate">
              <div class="img">
                  <img class="rateImg" height="350px" width="320px" src="../../assets/family.png" alt="">
              </div>
              <div class="client-rate">
                  <p class="clientComment">Muito Bom</p>
                  <div class="flex space-between">
                      <p class="client-name">Sérgio Augusto</p>
                      <img class="stars" src="../../assets/stars.png" alt="">
                  </div>
              </div>
          </div>
          <div class="containerRate">
              <div class="img">
                  <img class="rateImg" height="350px" width="320px" src="../../assets/family.png" alt="">
              </div>
              <div class="client-rate">
                  <p class="clientComment">Muito Bom</p>
                  <div class="flex space-between">
                      <p class="client-name">Sérgio Augusto</p>
                      <img class="stars" src="../../assets/stars.png" alt="">
                  </div>
              </div>
          </div>
          <div class="containerRate">
              <div class="img">
                  <img class="rateImg" height="350px" width="320px" src="../../assets/family.png" alt="">
              </div>
              <div class="client-rate">
                  <p class="clientComment">Muito Bom</p>
                  <div class="flex space-between">
                      <p class="client-name">Sérgio Augusto</p>
                      <img class="stars" src="../../assets/stars.png" alt="">
                  </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.rateImg {
    border-radius: 20px;
}

.gridRate{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
}
.rate{
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.client-rate {
  background: linear-gradient(to right, #123274 6px, #ffffff 6px);
  width: 300px;
  height: fit-content;
  padding: 6px 10px 0px 18px;
  margin: auto;
  box-shadow: 0px 3px 17px rgba(31, 45, 39, 0.4);
  border-radius: 8px;
  color: #1f2d27;
  position: relative;
  top: -40px;
}
.containerRate{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
}
.img {
  text-align: center;
  margin-top: 10px;
}
.clientComment {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 136%;
  letter-spacing: 0.02em;
  color: #5f5f7e;
}
.client-name {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 180%;
  color: #5f5f7e;
}
.stars {
    width: 60px;
    height: 10px;
    align-self: center;
}

@media (max-width: 1040px){
    .gridRate{
        grid-template-columns: 1fr 1fr;
    }
}
@media (max-width: 700px){
    .gridRate{
        grid-template-columns: 1fr;
    }
}
@media (max-width: 340px){
  .rateImg{
    width: 280px;
  }
}
</style>