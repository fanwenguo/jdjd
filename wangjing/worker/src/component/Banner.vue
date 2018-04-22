<template>
    <main class="main">
        <div class="banner">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="item in imgs">
                    <img :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination page"  slot="pagination"></div>
		    </swiper>
        </div>
        
    </main>
</template>
<script>
   import {swiper,swiperSlide} from "vue-awesome-swiper";
   /*  import './register';
    import navlist from './navlist';
    import hot from './hot'; */
    export default {
        name:"",
        data(){
            return {
                imgs:[
                    "../../img/swiper1.jpg",
                    "../../img/swiper2.jpg",
                    "../../img/swiper3.jpg",
                    "../../img/swiper4.jpg"
                   
                ],
			    swiperOption: {
                    autoplayDisableOnInteraction:false,
                    autoplay: true,
                    effect:"coverflow",
                    paginationType:"bullets",
		            pagination : '.swiper-pagination',
		            paginationClickable :true,
     		    }
		    }
        },
        componetns:{
            swiper,
            swiperSlide
          
        },
        computed:{
            swiper(){
                return this.$refs.mySwiper.swiper
            }
        }
    }
</script>
<style scoped>
    .banner{
        width:100%;
        height:3.6rem;
    }
    .banner img{
        display:block;
        width:100%;
        height:100%;
    }
    
</style>