<script>
import MainJumbotron from "./MainJumbotron.vue";
import MainShop from "./MainShop.vue";
export default{
    name: "AppMain",
    components: {
        MainJumbotron,
        MainShop,
    }
}
</script>


<template>
  <main>
    <MainJumbotron></MainJumbotron>
    <MainShop></MainShop>
  </main>
</template>


<style scoped lang="scss">

</style>