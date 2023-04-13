<script>
export default{
    name: "CardTestimonial",
    props: {
        image: String,
        message: String,
        userName: String,
    }
}
</script>


<template>
  <li>
    <img :src="'./src/assets/' + image" alt="">
    <p>{{ message }}</p>
    <h5>{{ userName }}, ThemeFusion</h5>
  </li>
</template>


<style scoped lang="scss">
li{
    width: calc(100% / 3);

    img{
        width: 30%;
        border-radius: 50%;
    }

    p{
      padding: 1rem 0;
    }
}
</style>