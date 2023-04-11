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
            oldPrice: "$95.00",
        },
        {
            image: "product-8.jpg",
            name: "Transport cage",
            price: "25.00",
        },
    ],
})