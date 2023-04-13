<script>
import CardArticle from "./CardArticle.vue";
import {store} from "../store";
export default{
    name: "MainAdvices",
    components: {
        CardArticle,
    },
    data() {
        return{
            store,
        }
    }
}
</script>


<template>
    <section id="advices">
        <div class="container">
            <h1>Get the best tricks and tips</h1>
            <h5>Recent articles</h5>

            <ul class="recent-articles">
                <CardArticle v-for="article in store.articlesList"
                :image="article.image"
                :title="article.title"
                :date="article.date"></CardArticle>
            </ul>

            <a href="#" class="btn-all-articles">Read all articles</a>
        </div>
    </section>
</template>


<style scoped lang="scss">
#advices{
    .container{
        text-align: center;

        h5{
            padding: 1rem 1.5rem;
        }

        .recent-articles{
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 2rem;
        }

        .btn-all-articles{
            background-color: green;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 30px;
        }
    }
}
</style>