<script>
import CardCategory from "./CardCategory.vue";
import CardFood from "./CardFood.vue";
import CardProduct from "./CardProduct.vue";
import BtnAboutUs from "./BtnAboutUs.vue";
import {store} from "../store";
export default{
    name: "MainShop",
    components: {
        CardCategory,
        CardFood,
        CardProduct,
        BtnAboutUs,
    },
    data(){
        return{
            store,
        }
    },
}
</script>


<template>
  <section id="shop">
    <div class="container">
        <div class="browse-category">
            <h1>Browse by category</h1>
            <p class="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab sit dolores cum animi adipisci iure eum explicabo, ut, magnam earum optio laudantium beatae libero repudiandae quidem dolore quo blanditiis!</p>    
            <ul class="categories">
                <CardCategory v-for="category in store.categoryList" 
                :image="category.image" 
                :name="category.name" 
                :number="category.number"></CardCategory>
            </ul>
        </div>

        <ul class="foods">
            <CardFood v-for="food in store.foodList" 
            :name="food.name" 
            :type="food.type" 
            :image="food.image" 
            :btnText="food.btnText"></CardFood>
        </ul>

        <div class="new-arrivals">
            <div>
                <h5>Find the best animal supplies</h5>
                <h1>New arrivals weekly</h1>
                <BtnAboutUs></BtnAboutUs>
            </div>
        </div>

        <div class="all-time-products">
            <div class="titles">
                <h4>All-time best sellers</h4>
                <h1>Items everyone loves</h1>
            </div>
            <div>
                <a href="#" class="btn-all-products">View all products</a>
            </div>
        </div>
        <ul class="best-sellers">
            <CardProduct v-for="product in store.bestSellersList" 
            :image="product.image" 
            :name="product.name" 
            :price="product.price"
            :oldPrice="product.oldPrice"></CardProduct>
        </ul>
    </div>
  </section>
</template>


<style scoped lang="scss">
#shop{
    padding: 3rem 0;
    text-align: center;

    .sub-title{
        width: 500px;
        padding: 1rem 0 2rem;
        margin: auto;
    }

    .categories, .foods, .best-sellers{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .foods{
        padding: 5rem 0;
    }

    .new-arrivals{
        height: 400px;
        background-image: url("../assets/bg-new-arrivals.jpg");
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;

        h1{
        padding: 3rem 0;
    }
    }

    .all-time-products{
        display: flex;
        justify-content: space-between;
        padding: 5rem 0 1rem;

        .titles{
            text-align: left;

            h1{
                padding: 1rem 0;
            }
        }

        .btn-all-products{
            background-color: green;
            padding: 0.5rem 1rem;
            border-radius: 30px;
            color: white;
        }
    }
}
</style>