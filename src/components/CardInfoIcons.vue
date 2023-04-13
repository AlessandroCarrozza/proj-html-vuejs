<script>

export default{
    name: "CardInfoIcons",
    props: {
        icon: String,
        title: String,
    }
}
</script>


<template>
<li>
    <i :class="icon"></i>
    <h4>{{ title }}</h4>
</li>
</template>


<style scoped lang="scss">
li{
    text-align: center;

    i{
        font-size: 2rem;
        padding: 1rem;
    }

    h4{
        color: lightgrey;
        font-weight: 400;
        font-size: 0.9rem;
    }
}
</style>