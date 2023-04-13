<script>
export default{
    name: "HeaderBottom",
    data() {
        return{
            navbarList: ["Home", "Shop", "About", "Blog", "Contact", "Shop by brand"],
        }
    }
}
</script>


<template>
    <section id="header-bottom">
        <ul class="navbar">
            <li v-for="li in navbarList"><a href="#">{{ li }}</a></li>
        </ul>
    </section>
</template>


<style scoped lang="scss">
#header-bottom{
    height: 50%;

    .navbar{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    li{
        padding: 0 1rem;

        a{
            color: grey;
        }
    }
}
}
</style>