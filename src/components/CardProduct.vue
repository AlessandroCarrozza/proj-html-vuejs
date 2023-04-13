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
    <h5 v-if="oldPrice != null">${{ oldPrice }}</h5>
    <h4>${{ price }}</h4>
  </li>
</template>


<style scoped lang="scss">
@use "../styles/partials/variables" as *;
li{
    margin: 1rem;
    width: calc(100% / 4 - 2rem);

    img{
        width: 100%;
    }

    h3{
      padding: 0.5rem 0;
      font-weight: 400;
    }

    h4, h5{
      display: inline-block;
      font-weight: 400;
      color: $btn-color-primary;
    }

    h5{
      text-decoration: line-through;
      padding: 0 0.2rem;
    }
}
</style>