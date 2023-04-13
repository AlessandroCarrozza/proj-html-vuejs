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
#main-footer{
    background-color: green;
    padding-bottom: 5rem;
}
</style>