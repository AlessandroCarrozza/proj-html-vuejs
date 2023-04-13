<script>
export default{
    name: "BtnSubscribe",
}
</script>


<template>
  <a href="#" class="btn-subscribe">Subscribe</a>
</template>


<style scoped lang="scss">
@use "../styles/partials/variables" as *;
.btn-subscribe{
    background-color: $btn-color-primary;
    color: white;
    padding: 0.7rem 2.5rem;
    border-radius: 30px;
}
</style>