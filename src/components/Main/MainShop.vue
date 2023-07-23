<script>
import CardCategory from "./CardCategory.vue";
import CardFood from "./CardFood.vue";
import CardProduct from "./CardProduct.vue";
import BtnAboutUs from "../BtnAboutUs.vue";
import { store } from "../../store";
export default {
    name: "MainShop",
    components: {
        CardCategory,
        CardFood,
        CardProduct,
        BtnAboutUs,
    },
    data() {
        return {
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
                <p class="sub-title">Lorem ipsum dolor sit amet consectetur lorem lorem ipsum dolor sit amet consectetur
                    ipsum lorem latinum</p>
                <ul class="categories">
                    <CardCategory v-for="category in store.categoryList" :image="category.image" :name="category.name"
                        :number="category.number"></CardCategory>
                </ul>
            </div>

            <ul class="foods">
                <CardFood v-for="food in store.foodList" :name="food.name" :type="food.type" :image="food.image"
                    :btnText="food.btnText"></CardFood>
            </ul>

            <div class="new-arrivals">
                <div class="layover"></div>
                <div class="titles">
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
                <CardProduct v-for="product in store.bestSellersList" :product="product"></CardProduct>
            </ul>
        </div>
    </section>
</template>


<style scoped lang="scss">
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

#shop {
    padding: 3rem 0;
    text-align: center;

    .sub-title {
        width: 500px;
        padding: 1rem 0 2rem;
        margin: auto;
    }

    .browse-category {

        h1 {
            font-weight: 400;
        }

        p {
            font-weight: 300;
            font-size: 0.9rem;
        }
    }

    .categories,
    .foods,
    .best-sellers {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .foods {
        padding: 5rem 0;
    }

    .new-arrivals {
        height: 400px;
        background-image: url("../../assets/bg-new-arrivals.jpg");
        background-size: cover;
        @include flex-center;
        position: relative;

        .layover {
            background-color: rgba(0, 0, 0, 0.3);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }

        .titles {
            z-index: 2;
        }

        h1 {
            padding: 3rem 0;
            color: white;
            font-size: 2.5rem;
        }

        h5 {
            color: white;
            text-transform: uppercase;
        }
    }

    .all-time-products {
        @include flex-between;
        padding: 5rem 0 1rem;

        .titles {
            text-align: left;

            h1 {
                padding: 1rem 0;
                font-weight: 500;
            }

            h4 {
                font-size: 0.9rem;
                color: $btn-color-primary;
            }
        }

        .btn-all-products {
            background-color: $btn-color-primary;
            padding: 0.7rem 1.5rem;
            border-radius: 30px;
            color: white;
        }
    }
}
</style>