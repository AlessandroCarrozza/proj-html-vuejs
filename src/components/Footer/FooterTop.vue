<script>
import BtnSubscribe from "../BtnSubscribe.vue";
export default{
    name: "FooterTop",
    components: {
        BtnSubscribe,
    },
    data() {
        return{
            shopByBrandLinks: ["Bed", "Food", "Toys", "Transport"],
            usefulLinks: ["My account", "Orders", "Checkout", "Cart"],
        }
    }
}
</script>


<template>
  <section id="footer-top">
    <div class="container">
        <div class="logo-info">
            <img src="../../assets/logo-white.png" alt="">
            <h5>1234 Avada Avenue Avanaville</h5>
            <h5>Info@yourcompany.com</h5>
            <h5>Call us: (1) 23 456 789</h5>
        </div>
        <div class="shop-by-brand">
            <h3>Shop by brand</h3>
            <a href="#" v-for="link in shopByBrandLinks">{{ link }}</a>
        </div>
        <div class="useful-links">
            <h3>Useful links</h3>
            <a href="#" v-for="link in usefulLinks">{{ link }}</a>
        </div>
        <div class="subscribe-newsletter">
            <h3>Subscribe to our newsletter</h3>
            <input type="text" placeholder="Insert your email..*">
            <BtnSubscribe></BtnSubscribe>
        </div>
    </div>
</section>
</template>


<style scoped lang="scss">
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;
#footer-top{
    padding: 4rem 0;
    color: white;

    .container{
        @include flex-between;

        .logo-info{
            color: white;

            img{
                height: 70px;
                padding-bottom: 1rem;
            }

            h5{
                padding: 0.2rem 0;
                font-weight: 400;
            }
        } 

        h3{
            padding-bottom: 1rem;
        }

        .shop-by-brand a, .useful-links a{
            display: block;
            color: white;
            padding: 0.5rem 0;
            font-weight: 400;

            &:hover{
                text-decoration: underline;
            }
        }

        .shop-by-brand h3, .useful-links h3{
            font-weight: 400;
            font-size: 1.5rem;
        }

        .subscribe-newsletter{
            background-color: $footer-box-color;
            text-align: center;
            padding: 2rem;
            background-image: url("../../assets/bg-transp.png");

            input{
                display: block;
                margin: 0.5rem auto 1.5rem;
                border: none;
                height: 40px;
                border-radius: 30px;
                width: 150px;
                padding-left: 1rem;
            }

            h3{
                width: 150px;
                margin: auto;
                text-align: left;
            }
        }
    }
}
</style>