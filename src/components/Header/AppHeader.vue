<script>
import HeaderTop from "./HeaderTop.vue";
import HeaderBottom from "./HeaderBottom.vue";
export default{
    name: "AppHeader",
    components: {
        HeaderTop,
        HeaderBottom,
    }
}
</script>


<template>
    <header>
        <HeaderTop></HeaderTop>
        <HeaderBottom></HeaderBottom>
    </header>
</template>


<style scoped lang="scss">
header{
    height: 120px;
}
</style>