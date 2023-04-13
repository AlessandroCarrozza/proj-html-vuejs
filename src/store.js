import {reactive} from "vue"
export const store = reactive({
    categoryList: [
        {
            image: "product-1.jpg",
            name: "Bed",
            number: 1,
        },
        {
            image: "product-2.jpg",
            name: "Food",
            number: 6,
        },
        {
            image: "product-3.jpg",
            name: "Toys",
            number: 6,
        },
        {
            image: "product-4.jpg",
            name: "Transport",
            number: 6,
        },
    ],
    foodList: [
        {
            name: "Kibble",
            type: "Dry",
            image: "food-1.png",
            btnText: "Shop dry food",
        },
        {
            name: "Moist",
            type: "Canned",
            image: "food-2.png",
            btnText: "Shop moinst food",
        },
        {
            name: "Frozen",
            type: "Freeze-Dried",
            image: "food-3.png",
            btnText: "Shop frozen food",
        },
    ],
    bestSellersList: [
        {
            image: "product-5.jpg",
            name: "Transport cage",
            price: "25.00",
        },
        {
            image: "product-6.jpg",
            name: "Transport cage",
            price: "25.00",
        },
        {
            image: "product-7.jpg",
            name: "Transport cage",
            price: "25.00",
            oldPrice: "95.00",
        },
        {
            image: "product-8.jpg",
            name: "Transport cage",
            price: "25.00",
        },
    ],
    testimonialsList: [
        {
            image: "avatar-1.jpg",
            testimonial: "Questa è una testimonianza simulata al fine di migliorare graficamente la sezione apposita per le testimonianze.",
            userName: "Lisa Smith",
        },
        {
            image: "avatar-2.jpg",
            testimonial: "Questa è una testimonianza simulata al fine di migliorare graficamente la sezione apposita per le testimonianze.",
            userName: "Melissa Green",
        },
        {
            image: "avatar-3.jpg",
            testimonial: "Questa è una testimonianza simulata al fine di migliorare graficamente la sezione apposita per le testimonianze.",
            userName: "Sam Lewis",
        },
    ],
    articlesList: [
        {
            image: "blog-1.jpg",
            title: "How to 'Loose leash walk' your dog",
            date: "April 21st, 2020",
        },
        {
            image: "blog-2.jpg",
            title: "Stop cats from scratching furniture",
            date: "April 19st, 2020",
        },
        {
            image: "blog-3.jpg",
            title: "Where to buy the best pet food",
            date: "April 18st, 2020",
        },
        {
            image: "blog-4.jpg",
            title: "Proper care for your pet toys",
            date: "April 17st, 2020",
        },
    ],
    infoIconsList: [
        {
            icon: "fa-solid fa-truck",
            title: "Free worldwide deliveries",
        },
        {
            icon: "fa-solid fa-map",
            title: "Find stores near you",
        },
        {
            icon: "fa-solid fa-dollar-sign",
            title: "Best prices guarranteed",
        },
        {
            icon: "fa-solid fa-credit-card",
            title: "All credit cards accepted",
        },
    ],
    productsLatestList: [
        {
            image: "product-9.jpg",
            name: "Colored pet bed",
            price: "18.00",
            secondPrice: "26.00",
        },
        {
            image: "product-3.jpg",
            name: "Colorfull ball set",
            price: "29.00",
        },
        {
            image: "product-2.jpg",
            name: "Dog bone",
            price: "18.00",
            oldPrice: "29.00",
            status: "sale",
        },
        {
            image: "product-4.jpg",
            name: "Animal transport bed",
            price: "29.00",
        },
        {
            image: "product-10.jpg",
            name: "Animal transport cage",
            price: "35.00",
        },
        {
            image: "product-11.jpg",
            name: "Closable cat litter",
            price: "16.00",
        },
    ],
    socialList: ["fa-facebook-f", "fa-twitter", "fa-instagram", "fa-youtube"],
})