<template>
    <div class="loading-screen">
        <img class="logoIcon" src="../../assets/logo.png" alt="loading">
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.logoIcon{
    width: 50rem;
}

.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    background: #123274;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
</style>