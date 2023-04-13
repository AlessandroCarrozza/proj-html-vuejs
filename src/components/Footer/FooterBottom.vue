<script>
import {store} from "../../store";
export default{
    name: "FooterBottom",
    data() {
        return{
            store,
            footerNavbar: ["Home", "About", "Blog", "Contact", "Shop"],
        }
    }
}
</script>


<template>
<section id="footer-bottom">
    <div class="container">
        <ul class="navbar">
            <li v-for="link in footerNavbar"><a href="#">{{ link }}</a></li>
        </ul>
        <ul class="socials">
            <li v-for="social in store.socialList"><a href="#"><i class="fa-brands" :class="social"></i></a></li>
        </ul>
    </div>
</section>
</template>


<style scoped lang="scss">
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;
#footer-bottom{

    .container{
        border-top: 2px solid $footer-box-color;

        .navbar{
           display: flex;
           justify-content: center;
           padding: 3rem 0;

        li{
            margin: 0 1rem;
        }

        a{
            color: lightgrey;
            font-size: 0.9rem;
        }
    }

    .socials{
        @include jus-center;

        li{
            margin: 0 1rem;

            i{
                color: white;
                font-size: 1.2rem;
            }
        }
    }

    }
}
</style>