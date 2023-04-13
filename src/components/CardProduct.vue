<script>
export default{
    name: "CardProduct",
    props: {
        image: String,
        name: String,
        price: String,
        oldPrice: String,
    }
}
</script>


<template>
  <li>
    <img :src="'./src/assets/' + image" alt="">
    <h3>{{ name }}</h3>
    <h5>{{ oldPrice }}</h5>
    <h4>${{ price }}</h4>
  </li>
</template>


<style scoped lang="scss">
li{
    margin: 1rem;
    width: calc(100% / 4 - 2rem);

    img{
        width: 100%;
    }

    h4, h5{
      display: inline-block;
    }
}
</style>