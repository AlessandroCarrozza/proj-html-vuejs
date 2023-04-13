<script>
import MainJumbotron from "./MainJumbotron.vue";
import MainShop from "./MainShop.vue";
import MainTestimonials from "./MainTestimonials.vue";
import MainNewsletter from "./MainNewsletter.vue";
import MainAdvices from "./MainAdvices.vue";
import MainFinder from "./MainFinder.vue";
import MainShopLatest from "./MainShopLatest.vue";
export default{
    name: "AppMain",
    components: {
        MainJumbotron,
        MainShop,
        MainTestimonials,
        MainNewsletter,
        MainAdvices,
        MainFinder,
        MainShopLatest,
    }
}
</script>


<template>
  <main>
    <MainJumbotron></MainJumbotron>
    <MainShop></MainShop>
    <MainTestimonials></MainTestimonials>
    <MainNewsletter></MainNewsletter>
    <MainAdvices></MainAdvices>
    <MainFinder></MainFinder>
    <MainShopLatest></MainShopLatest>
  </main>
</template>


<style scoped lang="scss">

</style>