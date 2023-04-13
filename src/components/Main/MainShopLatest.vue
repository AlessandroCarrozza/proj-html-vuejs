<script>
import CardProductLatest from "./CardProductLatest.vue";
import {store} from "../../store";
export default{
    name: "MainShopLatest",
    data(){
        return{
            store,
        }
    },
    components: {
        CardProductLatest,
    }
}
</script>


<template>
  <section id="shop-latest">
    <div class="container">
        <h1>New products arrivals</h1>
        <h4>Latest products</h4>

        <ul class="products-latest">
            <CardProductLatest v-for="productLatest in store.productsLatestList"
            :image="productLatest.image"
            :name="productLatest.name"
            :price="productLatest.price"
            :oldPrice="productLatest.oldPrice"
            :secondPrice="productLatest.secondPrice"
            :status="productLatest.status"
            ></CardProductLatest>
        </ul>
    </div>
  </section>
</template>


<style scoped lang="scss">
@use "../../styles/partials/variables" as *;
#shop-latest{
    text-align: center;
    padding: 2rem 0 5rem;

    h1{
        font-weight: 500;
        font-size: 2rem;
    }

    h4{
        padding: 1rem 0 1.5rem;
        font-weight: 400;
        color: $btn-color-primary;
    }

    .products-latest{
        display: flex;
        flex-wrap: wrap;
    }
}
</style>