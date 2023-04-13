<script>
import BtnAboutUs from "../BtnAboutUs.vue";
export default{
    name: "MainJumbotron",
    components: {
        BtnAboutUs,
    }
}
</script>


<template>
  <section id="jumbotron">
    <div class="boxes">
        <span class="box">
            <i class="fa-solid fa-laptop-code"></i>
            <h5>Demos</h5>
        </span>
        <span class="box">
            <div class="on-sale">
                <span class="dollar">$</span><span>39</span>
            </div>
            <h5>On Sale</h5>
        </span>
    </div>
    <div class="jumb-top">
        <ul class="container">
            <li>
                <i class="fa-regular fa-map"></i>
                <span><span class="bold">International </span>Shipping Services</span>
            </li>

            <li>
                <i class="fa-regular fa-clock"></i>
                <span>See our <span class="bold">store hours</span> and service</span>
            </li>
            
            <li>
                <i class="fa-solid fa-check"></i>
                <span>We price match to give you the <span class="bold">best deals </span></span>
            </li>
        </ul>
    </div>

    <div class="jumb-mid">
        <div class="container">
            <div class="layover"></div>
            <div class="titles">
                <h3>Find the best animal supplies</h3>
                <h1>We know animals are a part of your family, let us help take care of them</h1>
                <BtnAboutUs></BtnAboutUs>
            </div>
        </div>
    </div>

    <div class="jumb-bottom">
        <div class="container">
            <div class="img-jumb">
                <img src="../../assets/food-jumb.png" alt="Pet Food">
            </div>
            <span>Get $25 OFF yor first purchase of our homemade pet food! <a href="#">visit the shop</a></span>
        </div>
    </div>
</section>
</template>


<style scoped lang="scss">
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;
#jumbotron{
    position: relative;

    .boxes{
        position: absolute;
        top: 0;
        right: 0;
        z-index: 3;

        .box{
            display: block;
            width: 50px;
            height: 50px;
            background-color: white;
            margin: 1rem;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            
            i{
                font-size: 1.2rem;
            }

            h5{
                font-size: 0.6rem;
            }

            .on-sale{
                color: $btn-color-primary;

                .dollar{
                    font-size: 0.8rem;
                    position: relative;
                    bottom: 0.3rem;
                }
            }
        }
    }
}
.jumb-top{
    height: 60px;
    background-color: $bg-color-primary;
    background-image: url("../../assets/bg-transp.png");
    background-size: contain;
    color: white;

    .container{
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        li i{
            padding: 0 0.3rem;
        }

        li span{
            font-weight: 400;
            font-size: 0.9rem;
            color: lightgrey;

            .bold{
                font-weight: 600;
                color: white;
            }
        }
    }
}

.jumb-mid{
    height: 600px;
    background-image: url("../../assets/bg-jumb.jpg");
    background-size: cover;
    color: white;
    position: relative;

    .container{
        height: 100%;
        @include ali-center;

        .layover{
            background-color: rgba(0, 0, 0, 0.2);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }

        .titles{
        width: 50%;
        z-index: 2;

        h3{
            text-transform: uppercase;
            font-size: 0.9rem;
        }

        h1{
            padding: 2rem 0;
            font-size: 2.5rem;
        }
        }
    }
}

.jumb-bottom{
    height: 120px;
    background-color: $bg-color-primary;
    background-image: url("../../assets/bg-transp.png");
    background-size: contain;
    justify-content: space-around;
    color: white;

    .container{
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;

        a{
            color: lightgrey;
            text-decoration: underline;
            margin: 0 0.5rem;
        }
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