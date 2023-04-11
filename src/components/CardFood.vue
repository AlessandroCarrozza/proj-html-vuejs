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
    <h5>{{ type }} dog food</h5>
    <img :src="'./src/assets/' + image" alt="">
    <div class="btn-shop">{{ btnText }}</div>
  </li>
</template>


<style scoped lang="scss">
li{
    margin: 0.5rem;
    width: calc(100% / 3 - 1rem);
    background-color: green;
    padding: 4rem 0;
    background-image: url("../assets/bg-transp.png");

    h5{
        padding: 1rem 0;
    }

    img{
        width: 60%;
        padding: 1.5rem 0;
    }

    .btn-shop{
        margin: auto;
        color: white;
        background-color: lightgreen;
        width: 170px;
        padding: 0.5rem 1rem;
        border-radius: 30px;
    }
}
</style>