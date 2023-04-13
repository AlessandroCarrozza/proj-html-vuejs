<script>
import {store} from "../store";
export default{
    name: "CardProductLatest",
    data(){
        return{
            store,
        }
    },
    props: {
        image: String,
        name: String,
        price: String,
        oldPrice: String,
        secondPrice: String,
        status: String,
    }
}
</script>


<template>
<li>
    <img :src="'./src/assets/' + image" alt="">
    <h3>{{ name }}</h3>
    <h5 v-if="oldPrice != null">${{ oldPrice }}</h5>
    <h4>${{ price }}</h4>
    <h4 v-if="secondPrice != null"> - ${{ secondPrice }}</h4>
    <span class="status" v-if="status != null">{{ status }}!</span>
</li>
</template>


<style scoped lang="scss">
li{
    width: calc(100% / 3 - 1rem);
    margin: 1rem 0.5rem;
    position: relative;

    img{
        width: 100%;
    }

    h4, h5{
        display: inline-block;
        padding-bottom: 1rem;
    }

    h3{
        padding: 1.5rem 0 0.5rem;
    }

    .status{
        display: inline-block;
        background-color: green;
        position: absolute;
        top: 1rem;
        left: 1rem;
        border-radius: 50%;
        color: white;
        padding: 0.5rem;
    }
}
</style>