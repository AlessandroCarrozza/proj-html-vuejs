<script>
import {store} from "../store";
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
#footer-bottom{

    .container{
        border-top: 1px solid black;

        .navbar{
           display: flex;
           justify-content: center;
           padding: 3rem 0;

        li{
            margin: 0 1rem;
        }

        a{
            color: white;
        }
    }

    .socials{
        display: flex;
        justify-content: center;

        li{
            margin: 0 1rem;

            i{
                color: white;
                font-size: 1.5rem;
            }
        }
    }

    }
}
</style>