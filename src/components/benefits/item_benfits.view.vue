<template>
    <div class="benefit-container">
        <img class="iconPng" :src="require(`@/assets/${image}`)">
        <h1 class="itemTittle">{{tittle}}</h1>
        <h3 class="itemSubtittle">{{subTittle}}</h3>
        <p class="itemDescription">{{description}}</p>
        <p v-for="(item, index) in list" :key="index">{{item}}</p>
    </div>
</template>

<script>
export default {
    props: {
        tittle: {
            default: 'Test'
        },
        subTittle: {
            default: 'subTittle'
        },
        list: {
            default: ()=>[]
        },
        description:{
            default: ''
        },
        image:{
            default:'icon1.png'
        }
    }
}
</script>

<style scoped>
.benefit-container{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}
.iconPng{
    width: 50px;
}
.itemTittle{
    color: #123274;
    font-size: 24px;
}
.itemSubtittle{
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 10px;
    text-align: center;
}
.itemDescription{
    text-align: center;
}

p {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
}
</style>