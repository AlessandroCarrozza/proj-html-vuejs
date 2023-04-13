<script>
export default{
    name: "HeaderBottom",
    data() {
        return{
            navbarList: [
                {
                    name: "Home",
                    icon: true,
                    active: true,
                },
                {
                    name: "Shop",
                    icon: true,
                },
                {
                    name: "About",
                },
                {
                    name: "Blog",
                },
                {
                    name: "Contact",
                },
                {
                    name: "Shop by brand",
                    icon: true,
                },
            ],
        }
    }
}
</script>


<template>
    <section id="header-bottom">
        <ul class="navbar">
            <li v-for="li in navbarList">
                <a href="#" :class="li.active == true ? 'col-black' : ''">{{ li.name }}</a>
                <i v-if="li.icon != null" class="fa-solid fa-angle-down" :class="li.active == true ? 'col-black' : ''"></i>
            </li>
        </ul>
    </section>
</template>


<style scoped lang="scss">
@use "../../styles/partials/mixins" as *;
#header-bottom{
    height: 50%;

    .navbar{
    @include flex-center;
    height: 100%;
    width: 100%;

    li{
        padding: 0 1rem;
        font-size: 0.9rem;

        a, i{
            color: grey;
        }

        .col-black{
            color: black;
        }

        i{
            position: relative;
            top: 0.1rem;
            padding: 0 0.2rem;
            font-size: 0.8rem;
        }

    }
}
}
</style>