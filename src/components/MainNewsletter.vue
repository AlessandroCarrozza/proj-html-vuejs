<script>
import BtnSubscribe from "./BtnSubscribe.vue";
export default{
    name: "MainNewsletter",
    components: {
        BtnSubscribe,
    }
}
</script>


<template>
  <section id="newsletter">
    <div class="container">
        <h1>Join our newsletter</h1>
        <p>Testo per indurre l'utente ad iscriversi alla newsletter, dovrà essere convincente edesaustivo.</p>
        <input type="text" placeholder="Insert our email...*">
        <BtnSubscribe></BtnSubscribe>
    </div>
  </section>
</template>


<style scoped lang="scss">
@use "../styles/partials/variables" as *;
#newsletter{
    .container{
        background-image: url("../assets/bg-newsletter.jpg");
        background-size: cover;
        position: relative;
        bottom: 4rem;
        padding: 5rem 0 6rem 5rem;

        h1{
            font-size: 2rem;
        }

        p{
            width: 50%;
            padding: 3rem 0;
            font-weight: 400;
        }

        input{
            height: 40px;
            width: 300px;
            border-radius: 30px;
            border: none;
            background-color: $input-color;
            padding-left: 1rem;
            margin-right: 1rem;
        }
    }
}
</style>