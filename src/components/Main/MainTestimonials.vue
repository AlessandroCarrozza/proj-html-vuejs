<script>
import CardTestimonial from "./CardTestimonial.vue";
import {store} from "../../store";
export default{
    name: "MainTestimonials",
    components: {
        CardTestimonial,
    },
    data() {
        return{
            store,
        }
    }
}
</script>


<template>
  <section id="user-testimonials">
    <div class="container">
        <h1>Users Testimonials</h1>
        <ul class="testimonials">
            <CardTestimonial v-for="testimonial in store.testimonialsList" 
            :image="testimonial.image"
            :message="testimonial.testimonial"
            :userName="testimonial.userName"></CardTestimonial>
        </ul>
    </div>
  </section>
</template>


<style scoped lang="scss">
@use "../../styles/partials/variables" as *;
#user-testimonials{
    text-align: center;
    background-color: $bg-color-primary;
    background-image: url("../../assets/bg-transp.png");
    padding: 3rem 0 7rem;
    color: white;

    h1{
        padding: 2rem 0 3rem;
        font-size: 2rem;
        font-weight: 500;
    }

    .testimonials{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
}
</style>