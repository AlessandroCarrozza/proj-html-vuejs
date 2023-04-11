<script>
export default{
    name: "MainJumbotron",
}
</script>


<template>
  <div class="jumbotron">
    <div class="jumb-top"></div>
    <div class="jumb-mid"></div>
    <div class="jumb-bottom"></div>
  </div>
</template>


<style scoped lang="scss">
.jumb-top{
    height: 70px;
    border: 2px solid black;
    background-color: green;
    background-image: url("../assets/bg-transp.png");
    background-size: contain;
}

.jumb-mid{
    height: 500px;
    background-image: url("../assets/bg-jumb.jpg");
    background-size: cover;
}

.jumb-bottom{
    height: 140px;
    border: 2px solid black;
}
</style>