<script>
export default {
  name: "CardProduct",
  props: {
    product: Object,
  }
}
</script>


<template>
  <li :class="product.title ? 'latestProduct' : 'bestProduct'">
    <img :src="'./src/assets/' + product.image" alt="">
    <h3>{{ product.title ? product.title : product.name }}</h3>
    <h5 v-if="product.oldPrice != null">${{ product.oldPrice }}</h5>
    <h4>${{ product.price }}</h4>

    <div class="d-inline-block" v-if="product.title">
      <h4 v-if="product.secondPrice != null">&nbsp- ${{ product.secondPrice }}</h4>
      <span class="status" v-if="product.status != null">{{ product.status }}!</span>
    </div>
  </li>
</template>


<style scoped lang="scss">
@use "../../styles/partials/variables" as *;

.bestProduct {
  margin: 1rem;
  width: calc(100% / 4 - 2rem);

  img {
    width: 100%;
  }

  h3 {
    padding: 0.5rem 0;
    font-weight: 400;
  }

  h4,
  h5 {
    display: inline-block;
    font-weight: 400;
    color: $btn-color-primary;
  }

  h5 {
    text-decoration: line-through;
    padding: 0 0.2rem;
  }
}

.latestProduct {
  width: calc(100% / 3 - 1rem);
  margin: 1rem 0.5rem;
  position: relative;

  img {
    width: 100%;
  }

  h4,
  h5 {
    display: inline-block;
    padding-bottom: 1rem;
    font-weight: 400;
    color: $btn-color-primary;
  }

  h5 {
    text-decoration: line-through;
    padding: 0 0.2rem;
  }

  h3 {
    padding: 1.5rem 0 0.5rem;
    font-weight: 500;
  }

  .status {
    display: inline-block;
    background-color: $btn-color-primary;
    position: absolute;
    top: 1rem;
    left: 1rem;
    border-radius: 50%;
    color: white;
    padding: 0.5rem;
  }
}
</style>