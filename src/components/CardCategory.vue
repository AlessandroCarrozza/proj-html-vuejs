<script>

export default{
    name: "CardCategory",
    props: {
        image: String,
        name: String,
        number: Number,
    }
}
</script>


<template>
<li>
    <img :src="'./src/assets/' + image" alt="">
    <span>{{ name }}</span>
    <span>({{ number }})</span>
</li>
</template>


<style scoped lang="scss">
li{
    margin: 1rem 0.5rem;
    width: calc(100% / 4 - 1rem);

    img{
        width: 100%;
        margin-bottom: 0.3rem;
    }
}
</style>