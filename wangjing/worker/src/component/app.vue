<template>
    <div class="app">
       <HeadBar/>
	      <Banner/>
    </div>
</template>
<script>
import HeadBar from "./HeadBar.vue";
import Banner from './Banner.vue';
export default {
  name: "app",
  components: {
    HeadBar,
	  Banner
  },
  data() {
    return {
      data: []
      
    };
  }
 }
</script>
<style>
   * {
            margin: 0;
            padding: 0;
        }
        
        html,
        body,
        .app{
            width: 100%;
            height: 100%;
        }
        
        body {
            font-size: 0.32rem;
        }
        
        
        .header {
            width: 100%;
            height: 0.8rem;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            height: 1rem;
            position: absolute;
            left: 0;
            top: 0;
            background: rgba(0, 0, 0, 0.4);
            justify-content: space-between;
            z-index: 100;
        }
        
        .main {
            position: relative;
            width: 100%;
            height: 100%;
            flex: 1;
            overflow-y: scroll;
        }
</style>

