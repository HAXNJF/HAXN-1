<template>
    <div class="containerLogo">
        <a :href="link" class="linkImg"><img :src="require(`@/assets/${logo}`)" alt="" class="logo"></a>
    </div>
</template>

<script>
export default {
    props: {
        logo: {
            default: "google.jpg"
        },
        link: {
            default: "https://www.google.com"
        }
    }
}
</script>

<style scoped>
.containerLogo{
    cursor: pointer;
    width: 250px;
    height: 250px;
    box-shadow: 0px 14px 36px 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
}
.containerLogo:hover{
    box-shadow: 0px 10px 30px 5px rgba(0, 9, 78, 0.3);
}
.logo{
    width: 100%;
}
</style>