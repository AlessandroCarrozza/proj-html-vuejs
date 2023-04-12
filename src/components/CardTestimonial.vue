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
  </li>
</template>


<style scoped lang="scss">
li{
    width: calc(100% / 3);

    img{
        width: 30%;
        border-radius: 50%;
    }
}
</style>