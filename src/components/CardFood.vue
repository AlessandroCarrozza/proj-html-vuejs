<script>
export default{
    name: "CardFood",
    props: {
        name: String,
        type: String,
        image: String,
        btnText: String,
    }
}
</script>


<template>
  <li>
    <h1>{{ name }}</h1>
    <h4>{{ type }} dog food</h4>
    <img :src="'./src/assets/' + image" alt="">
    <a href="#" class="btn-shop">{{ btnText }}</a>
  </li>
</template>


<style scoped lang="scss">
@use "../styles/partials/variables" as *;
li{
    margin: 0.5rem;
    width: calc(100% / 3 - 1rem);
    background-color: $bg-color-primary;
    padding: 4rem 0;
    background-image: url("../assets/bg-transp.png");

    h1{
        color: white;
    }

    h4{
        padding: 1rem 0;
        color: $text-color-primary;
    }

    img{
        width: 60%;
        padding: 1.5rem 0;
    }

    .btn-shop{
        margin: auto;
        color: white;
        background-color: $btn-color-primary;
        width: 170px;
        padding: 0.7rem 1.2rem;
        border-radius: 30px;
        display: block;
    }
}
</style>