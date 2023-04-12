<script>
import CardTestimonial from "./CardTestimonial.vue";
import {store} from "../store";
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
  <section class="user-testimonials">
    <div class="container">
        <h1>User Testimonials</h1>
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
.user-testimonials{
    text-align: center;
    background-color: green;
    background-image: url("../assets/bg-transp.png");

    .testimonials{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
}
</style>