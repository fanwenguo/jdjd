<template>
    <div>
        <nav>
            <div class="navContent">
                <dl>
                    <dt>
                        <img src="../../image/nav3.png"/>
                    </dt>
                    <dd>
                        <span>京东超市</span>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="../../image/nav1.png"/>
                    </dt>
                    <dd>
                        <span>全球购</span>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="../../image/nav8.png"/>
                    </dt>
                    <dd>
                        <span>京东服饰</span>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="../../image/nav10.png"/>
                    </dt>
                    <dd>
                        <span>京东生鲜</span>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="../../image/nav9.png"/>
                    </dt>
                    <dd>
                        <span>京东到家</span>
                    </dd>
                </dl>
            </div>
            <div class="navContent">
                <dl>
                    <dt>
                        <img src="../../image/nav4.png"/>
                    </dt>
                    <dd>
                        <span>充值缴费</span>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="../../image/nav2.png"/>
                    </dt>
                    <dd>
                        <span>9.9元拼</span>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="../../image/nav5.png"/>
                    </dt>
                    <dd>
                        <span>领券领券</span>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="../../image/nav6.png"/>
                    </dt>
                    <dd>
                        <span>赚钱赚钱</span>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="../../image/nav7.png"/>
                    </dt>
                    <dd>
                        <span>物流查询</span>
                    </dd>
                </dl>
            </div>
        
        </nav>
        <div class="imageBox">
            <img src="../../image/fuli.jpg"/>
        </div>
    </div>
</template>
<script>
    export default {
        name:"",
        data(){
            return {
              
            }
        }
    }
</script>
<style scoped>
    nav{
        width:100%;
        height:2.6rem;
        margin-top:0.1rem;
    }
    .navContent{
        width:100%;
        height:1.5rem;
        display:flex;
        justify-content:space-around;
    }
    .navContent dl{
        text-align:center;
    }
    .navContent dl dt{
        width:0.7rem;
        height:0.7rem;
        margin-left:0.1rem;
    }
     .navContent dd{
         text-align:center;
         font-size:0.26rem;
         color:#999;
     }
    .navContent dl dt img{
        display:block;
        width:100%;
        height:100%;
    }
    .imageBox{
        width:100%;
        height:2.4rem;
        margin-top:0.2rem;
    }
    .imageBox img{
        display:block;
        width:100%;
        height:100%;
    }
</style>