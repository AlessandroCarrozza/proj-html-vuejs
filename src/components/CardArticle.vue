<script>

export default{
    name: "CardArticle",
    props: {
        image: String,
        title: String,
        date: String,
    }
}
</script>


<template>
<li>
 <img :src="'./src/assets/' + image" alt="">
 <div class="info-article">
    <h3>{{ title }}</h3>
    <h5>{{ date }}</h5>
 </div>
</li>
</template>


<style scoped lang="scss">
li{
    width: calc(100% / 4 - 2rem);
    margin: 1rem;
    text-align: left;

    img{
        width: 100%;
    }

    .info-article{
        width: 80%;
        margin: auto;
    }

    h3{
        font-weight: 500;
        padding: 1rem 0 0.5rem;
    }
}
</style>