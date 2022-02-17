<template>
  <div class="app">
    <Loading v-show="status"/>
    <Navigation/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Loading from './components/loading/loading_component.view';
import Navigation from './components/navigation/navigation_component.view';
import Content from './components/content/content_component.view.vue';
import Footer from './components/footer/footer_component.view.vue';

export default {
  components: {
    Loading,
    Navigation,
    Content,
    Footer
    },
  name: 'App',
  data(){
    return{
      status: false,
    }
  },
  created(){
    this.status= true;
    setTimeout(()=>{ this.status = false}, 700);
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity, transform;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  transform: translateY(-2em);
  opacity: 0;
}
</style>
