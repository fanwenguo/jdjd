<template>
    <header class="header">
        <p><b>JD</b><input type="text" placeholder="PLUS会员精选爆款"/></p>
        <span>登录</span>
    </header>
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
       
    .header p{
        background:#fff;
        margin-left: 0.2rem;
        flex:1;
        border-radius:0.3rem;
        height:0.6rem;
        line-height:0.6rem;
    } 
    .header p input{
        border:none;
        outline:none;
        margin-left:0.2rem;
    }
    .header p b{
        color:red;
        margin: 0 0.3rem;
    }
    .header span {
        color: white;
        margin:0 0.3rem;
     }
     .header p img{
         display:inline-block;
         width:0.2rem;
         height:0.2rem;
     }
</style>