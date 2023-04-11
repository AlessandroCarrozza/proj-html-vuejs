<script>
export default{
    name: "AppHeader",
    data() {
        return{
            navbarList: ["Home", "Shop", "About", "Blog", "Contact", "Shop by brand"],
        }
    }
}
</script>


<template>
    <header>
        <div class="header-top">
            <div class="container">
                <div class="logo">
                    <img src="../../public/dark-pet-logo.png" alt="Logo">
                </div>
                <div>
                    <div class="search">
                        <span><i class="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" placeholder="Search...">
                    </div>
                </div>
                <div class="call">
                    <h4>Questions?</h4>
                    <span>Call us 33932939293932</span>
                </div>
                <div class="icons">
                    <i class="fa-solid fa-store"></i>
                    <i class="fa-regular fa-user"></i>
                </div>
            </div>
        </div>

        <div class="header-bottom">
            <ul class="navbar">
                <li v-for="li in navbarList"><a href="#">{{ li }}</a></li>
            </ul>
        </div>
    </header>
</template>


<style scoped lang="scss">
header{
    height: 120px;
    .header-top, .header-bottom{
        height: 50%;
    }
    .header-top{
        border-bottom: 1px solid lightgrey;
        display: flex;
        justify-content: space-between;

        .container{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo img{
            height: 40px;
        }

        .search{
            width: 250px;
            height: 40px;
            display: flex;

            span{
                width: 30px;
                background-color: lightgrey;
                display: inline-block;
                border-top-left-radius: 50px;
                border-bottom-left-radius: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-left: 0.6rem;

                i{
                    font-size: 0.8rem;
                }
            }

            input{
                width: 220px;
                border: none;
                background-color: lightgrey;
                border-top-right-radius: 50px;
                border-bottom-right-radius: 50px;
                padding-left: 0.6rem;
            }
        }

        .call h4{
            display: inline-block;
        }

        .icons i{
            padding: 0 0.6rem;
            font-size: 1.3rem;
            cursor: pointer;
        }
    }

    .navbar{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;

        li{
            padding: 0 1rem;

            a{
                color: grey;
            }
        }
    }
}
</style>