<script>
import MainJumbotron from "./MainJumbotron.vue";
import MainShop from "./MainShop.vue";
import MainTestimonials from "./MainTestimonials.vue";
export default{
    name: "AppMain",
    components: {
        MainJumbotron,
        MainShop,
        MainTestimonials,
    }
}
</script>


<template>
  <main>
    <MainJumbotron></MainJumbotron>
    <MainShop></MainShop>
    <MainTestimonials></MainTestimonials>
  </main>
</template>


<style scoped lang="scss">

</style>