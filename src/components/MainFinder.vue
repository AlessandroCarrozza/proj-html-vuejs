<script>
import CardInfoIcons from "./CardInfoIcons.vue";
import {store} from "../store";
export default{
    name: "MainFinder",
    components: {
        CardInfoIcons,
    },
    data() {
        return{
            store,
        }
    }
}
</script>


<template>
<section id="finder">
    <div class="finder-top">
        <div class="sx">
            <div class="layover"></div>
            <div class="titles">
                <h5>Find the best animal supplies</h5>
                <h1>Popular accessories</h1>
                <a href="#">View all toys accessories</a>
            </div>
        </div>
        <div class="dx">
            <div class="layover"></div>
            <div class="titles">
                <h5>Find the best pet food</h5>
                <h1>new food arrivals</h1>
                <a href="#">View all food products</a>
            </div>
        </div>
    </div>
    <div class="finder-bottom">
        <div class="container">
            <ul class="info-icons">
                <CardInfoIcons v-for="info in store.infoIconsList"
                :icon="info.icon"
                :title="info.title"></CardInfoIcons>
            </ul>
        </div>
    </div>
</section>
</template>


<style scoped lang="scss">
@use "../styles/partials/variables" as *;
#finder{
    margin: 4rem 0;
    color: white;

    .finder-top{
        height: 330px;

        .sx, .dx{
            height: 100%;
            width: 50%;
            display: inline-block;
            position: relative;

            .layover{
                background-color: rgba(0, 0, 0, 0.3);
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }

            .titles{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                text-align: center;

                h5{
                    text-transform: uppercase;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                }

                h1{
                    padding: 2rem 0;
                    font-weight: 500;
                    font-size: 2rem;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                }

                a{
                background-color: white;
                color: grey;
                padding: 0.7rem 1.5rem;
                border-radius: 30px;
                font-size: 0.8rem;
            }
            }

        }

        .sx{
            background-image: url("../assets/bg-finder-1.jpg");
            background-size: cover;
        }

        .dx{
            background-image: url("../assets/bg-finder-2.jpg");
            background-size: cover;
        }
    }

    .finder-bottom{
        background-color: $bg-color-primary;
        background-image: url("../assets/bg-transp.png");
        padding: 4rem 0;

        .info-icons{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    }
}
</style>