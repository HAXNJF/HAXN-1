<template>
    <div class="container">
        <h1 class="tittle">Nossos <span>Planos</span></h1>
        <p class="text">Seu departamento de licitação completo e tercerizado!</p>
        <div class="plans">
        <Standard/>
        <Plus/>
        </div>
    </div>
</template>

<script>
import Standard from './plan/standard_component.view';
import Plus from './plan/plus_component.view';
import Premium from './plan/premium_component.view';
export default {
    components:{
        Standard,
        Plus,
        Premium
    }
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
}
.plans{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
}

@media (max-width: 1080px){
    .plans{
        grid-template-columns: 1fr;
    }
}
@media (max-width: 870px){
    .plans{
        grid-template-columns: 1fr;
    }
}
</style>