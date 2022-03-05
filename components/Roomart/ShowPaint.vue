<template>
<SharedModal :showPaint="showPaint" v-if="showPaint" @close="!showPaint">
    <div class="container">
        <div class="row justify-content-center mt-5 heigth-100-vh">
            <div class="col-12 w-100 text-right">
                <button @click="openModal()" class="btn btn-default text-white">
                    Fechar
                </button>
            </div>
            <div class="col-12">
                <div class="d-flex justify-content-around align-items-center w-100">
                    <button type="button" class="zIndex btn btn-default" @click="$refs.carouselRoomArts.prev()">Prev</button>
                    <VueSlickCarousel class="w-75" ref="carouselRoomArts" v-bind="options">
                        <div v-for="i in 5" :key="i">
                            <div class="row justify-content-center align-items-center">
                                <div class="col-5 mt-5">
                                    <img src="/assets/img/armario.jpg" class="img-fluid img" alt="" />
                                </div>
                                <div class="col-5 d-flex">
                                    <div class="separator"></div>
                                    <div class="p-4 text-white">
                                        <p>teste teste ateest tears teaste teaste</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </VueSlickCarousel>
                    <button class="zIndex btn btn-default" type="button" @click="$refs.carouselRoomArts.next()">Next</button>
                </div>
            </div>
        </div>
    </div>
</SharedModal>
</template>

<script>
export default {

    props: {
        ['showPaint']: Boolean,
        ['openModal']: Function
    },
    data() {
        return {
            settings: {
                dots: true,
                dotsClass: "slick-dots custom-dot-class",
                edgeFriction: 0.35,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            },
            options: {
                infinite: true,
                speed: 500,
                dots: true,
                dotsClass: "slick-dots ",
                prevArrow: false,
                nextArrow: false,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                pauseOnFocus: true,
                pauseOnHover: false,
                // responsive: [
                //   {
                //     breakpoint: 600,
                //     settings: {
                //       slidesToShow: 1,
                //       slidesToScroll: 1,
                //       initialSlide: 1,
                //       vertical: true,
                //       verticalSwiping: true,
                //     },
                //   },
                // ],
            },
        }
    },
}
</script>

<style scoped>
.heigth-100-vh {
    /* height: 100vh; */
    align-items: center;
}

button {
    color: #FFF0DE !important;
    border-bottom: 1px solid #FFF0DE;
}

.img {
    width: 350px;
    height: 400px;
}

.separator {
    height: 200px;
    width: 0.2px !important;
    border: 0.2px solid #FFF0DE;
}

hr {
    /* height: 100%; */
    transform: rotate(90deg);
    color: white;
    background-color: white;
    /* margin-left: -500px; */
}

.zIndex {
    z-index: 1;
}

.slick-arrow {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 45%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
}

.slick-prev {
    left: 150px;
    z-index: 10;
}

.slick-prev::before {
    content: "";
    display: inline-block;
    width: 36px;
    height: 36px;
    border-left: 8px solid rgba(0, 0, 0, 0.5);
    border-bottom: 8px solid rgba(0, 0, 0, 0.5);
    transform: rotate(45deg);
}

.slick-prev:focus::before,
.slick-prev:hover::before {
    border-left: 8px solid rgba(0, 0, 0, 0.8);
    border-bottom: 8px solid rgba(0, 0, 0, 0.8);
}

.slick-next {
    right: 150px;
    z-index: 10;
}

.slick-next::before {
    content: "";
    display: inline-block;
    width: 36px;
    height: 36px;
    border-top: 8px solid rgba(0, 0, 0, 0.5);
    border-right: 8px solid rgba(0, 0, 0, 0.5);
    transform: rotate(45deg);
}

.slick-next:focus::before,
.slick-next:hover::before {
    border-top: 8px solid rgba(0, 0, 0, 0.8);
    border-right: 8px solid rgba(0, 0, 0, 0.8);
}
</style>
