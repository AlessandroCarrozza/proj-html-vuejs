<script>
export default {
    name: "HeaderTop",
}
</script>


<template>
    <section id="header-top">
        <div class="container">
            <div class="logo">
                <img src="../../../public/dark-pet-logo.png" alt="Logo">
            </div>
            <div>
                <div class="search">
                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" placeholder="Search...">
                </div>
            </div>
            <div class="call">
                <h4>Questions?</h4>
                <span>Call us: 1.800.123.4567</span>
            </div>
            <div class="icons">
                <i class="fa-solid fa-inbox"></i>
                <i class="fa-regular fa-user"></i>
            </div>
        </div>
    </section>
</template>


<style scoped lang="scss">
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;
#header-top {
    height: 50%;
    border-bottom: 1px solid $input-color;
    display: flex;
    justify-content: space-between;

    .container {
        @include flex-between;
        align-items: center;
    }

    .logo img {
        height: 40px;
    }

    .search {
        width: 300px;
        height: 40px;
        display: flex;

        span {
            width: 30px;
            background-color: $input-color;
            display: inline-block;
            border-top-left-radius: 50px;
            border-bottom-left-radius: 50px;
            @include flex-center;
            padding-left: 0.6rem;

            i {
                font-size: 0.8rem;
            }
        }

        input {
            width: 270px;
            border: none;
            background-color: $input-color;
            border-top-right-radius: 50px;
            border-bottom-right-radius: 50px;
            padding-left: 0.6rem;
        }
    }

    .call h4 {
        display: inline-block;
        font-weight: 600;
        font-size: 0.9rem;
        padding: 0 0.2rem;
    }

    .call span{
        font-size: 0.9rem;
        color: grey;
    }

    .icons i {
        padding: 0 0.6rem;
        font-size: 1.3rem;
        cursor: pointer;
        color: grey;
    }
}
</style>