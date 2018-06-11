<template>
  <div class="bdiv" v-show="isLogin">我是组件B弹窗</div>
</template>

<script>
import {bus} from "../common/commonvue.js" 
export default {
  data () {
    return {
      islog:false
    }
  },
  mounted(){
     bus.$on("isLogFn",v=>{  
        console.log(v)
      }); 
  },
  computed: {
    isLogin () {
      if(this.isLog == 'true'){
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>
  .bdiv{
    width: 200px;
    height: 200px;
    border: 1px #000 solid;
    margin: 0 auto;
  }

</style>