<script>
import BtnAboutUs from "./BtnAboutUs.vue";
export default{
    name: "MainJumbotron",
    components: {
        BtnAboutUs,
    }
}
</script>


<template>
  <section class="jumbotron">
    <div class="jumb-top">
        <ul class="container">
            <li>
                <i class="fa-regular fa-map"></i>
                <span><span>International </span>Shipping Services</span>
            </li>

            <li>
                <i class="fa-regular fa-map"></i>
                <span><span>International </span>Shipping Services</span>
            </li>
            
            <li>
                <i class="fa-regular fa-map"></i>
                <span><span>International </span>Shipping Services</span>
            </li>
        </ul>
    </div>

    <div class="jumb-mid">
        <div class="container">
            <div class="titles">
                <h3>testo testo testo</h3>
                <h1>questo è il title principale testo testo testoooooo</h1>
                <BtnAboutUs></BtnAboutUs>
            </div>
        </div>
    </div>

    <div class="jumb-bottom">
        <div class="container">
            <div class="img-jumb">
                <img src="../assets/food-jumb.png" alt="Pet Food">
            </div>
            <span>Get 50% of discount on our site before visite site <a href="#">visit the shoppppp</a></span>
        </div>
    </div>
</section>
</template>


<style scoped lang="scss">
.jumb-top{
    height: 60px;
    background-color: green;
    background-image: url("../assets/bg-transp.png");
    background-size: contain;
    color: white;

    .container{
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}

.jumb-mid{
    height: 500px;
    background-image: url("../assets/bg-jumb.jpg");
    background-size: cover;
    color: white;

    .container{
        height: 100%;
        display: flex;
        align-items: center;

        .titles{
        width: 50%;

        h1{
            padding: 2rem 0;
        }
        }
    }
}

.jumb-bottom{
    height: 120px;
    background-color: green;
    background-image: url("../assets/bg-transp.png");
    background-size: contain;
    justify-content: space-around;
    color: white;

    .container{
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;
    }

    .img-jumb{
        height: 100%;
        width: 400px;
        display: inline-block;
        position: relative;

        img{
        height: 80%;
        position: absolute;
        bottom: 0;
        }
    }
}
</style>