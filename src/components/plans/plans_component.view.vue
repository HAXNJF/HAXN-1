<template>
    <div class="container">
        <a name="plans"></a>
        <h1 class="tittle">Nossos <span>Planos</span></h1>
        <p class="text">Única plataforma integrada, completa e
        automatizada do mercado.</p>
        <div class="plans">
        <Standard/>
        <Plus/>
        <Premium/>
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
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
}

@media (max-width: 1280px){
    .plans{
        grid-template-columns: 1fr 1fr;
    }
}
@media (max-width: 870px){
    .plans{
        grid-template-columns: 1fr;
        
    }
}
</style>