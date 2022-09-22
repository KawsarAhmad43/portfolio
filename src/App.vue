<template>
  <div>
    <SpinnerCompVue/>
    <NavHeader/>
   
    <router-view></router-view>
    <FooterBottom/>
  </div>
</template>

<script>
  import SpinnerCompVue from "./components/elements/SpinnerComp.vue";
  import NavHeader from "./components/layouts/NavHeader";
  import FooterBottom from "./components/layouts/FooterBottom.vue";



export default {
    name: "App",
    components: { 
      SpinnerCompVue,
      FooterBottom,
      NavHeader
     }
}
</script>