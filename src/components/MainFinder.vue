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
            <div class="titles">
                <h4>Find the best animal supplies</h4>
                <h1>Popular accessories</h1>
                <a href="#">View all toys accessories</a>
            </div>
        </div>
        <div class="dx">
            <div class="titles">
                <h4>Find the best pet food</h4>
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
#finder{
    margin: 4rem 0;

    .finder-top{
        height: 330px;

        .sx, .dx{
            height: 100%;
            width: 50%;
            display: inline-block;
            position: relative;

            .titles{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;

                h1{
                    padding: 2rem 0;
                }

                a{
                background-color: white;
                color: black;
                padding: 0.5rem 1rem;
                border-radius: 30px;
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
        background-color: green;
        background-image: url("../assets/bg-transp.png");
        padding: 4rem 0;

        .info-icons{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }
}
</style>