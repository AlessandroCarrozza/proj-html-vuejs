<script>
import CardArticle from "./CardArticle.vue";
import {store} from "../../store";
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
            <h1>Get the best tricks & tips</h1>
            <h4>Recent articles</h4>

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
@use "../../styles/partials/variables" as *;
#advices{
    .container{
        text-align: center;

        h1{
            font-weight: 500;
            font-size: 2rem;
        }

        h4{
            padding: 1rem 1.5rem;
            color: $btn-color-primary;
        }

        .recent-articles{
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 2rem;
        }

        .btn-all-articles{
            background-color: $btn-color-primary;
            color: white;
            padding: 0.7rem 1.5rem;
            border-radius: 30px;
        }
    }
}
</style>