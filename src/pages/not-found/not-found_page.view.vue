<template>

    <div id="notfound">
        <div class="notfound">
            <div class="notfound-404">
                <h1>Oops!</h1>
            </div>
            <br>
            <br>
            <h2>Não foi possível encontrar esta página</h2>
            <p>Voce está tentando acessar uma página que não existe.</p>
            <a @click="$router.go(-1);$router.go(-1)">Voltar a página</a>
        </div>
    </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>

    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100vh;
        padding: 0;
        margin: 0;
    }

    #notfound {
        position: relative;
        height: 100vh;
    }

    #notfound .notfound {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .notfound {
        max-width: 410px;
        width: 100%;
        text-align: center;
    }

    .notfound .notfound-404 {
        height: 280px;
        position: relative;
        z-index: -1;
    }

    .notfound .notfound-404 h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 230px;
        margin: 0px;
        font-weight: 900;
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        background: url('https://res.cloudinary.com/ddoqf0oy0/image/upload/v1592674733/bg_loki3z.jpg') no-repeat;
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: cover;
        background-position: center;
    }


    .notfound h2 {
        font-family: 'Montserrat', sans-serif;
        color: #000;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
        margin-top: 0;
    }

    .notfound p {
        font-family: 'Montserrat', sans-serif;
        color: #000;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 20px;
        margin-top: 0px;
    }

    .notfound a {
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        text-decoration: none;
        text-transform: uppercase;
        background: #0046d5;
        display: inline-block;
        padding: 15px 30px;
        border-radius: 40px;
        color: #fff;
        font-weight: 700;
        -webkit-box-shadow: 0px 4px 15px -5px #0046d5;
        box-shadow: 0px 4px 15px -5px #0046d5;
    }


    @media only screen and (max-width: 767px) {
        .notfound .notfound-404 {
            height: 142px;
        }
        .notfound .notfound-404 h1 {
            font-size: 112px;
        }
    }

</style>
