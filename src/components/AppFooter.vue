<script>
import FooterTop from "./FooterTop.vue";
import FooterBottom from "./FooterBottom.vue";
import FooterCopyright from "./FooterCopyright.vue";
export default{
    name: "AppFooter",
    components: {
        FooterTop,
        FooterBottom,
        FooterCopyright,
    }
}
</script>


<template>
  <footer>
    <div id="main-footer">
        <FooterTop></FooterTop>
        <FooterBottom></FooterBottom>
    </div>
    <FooterCopyright></FooterCopyright>
  </footer>
</template>


<style scoped lang="scss">
@use "../styles/partials/variables" as *;
#main-footer{
    background-color: $bg-color-primary;
    padding-bottom: 5rem;
}
</style>