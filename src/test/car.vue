<template>  
  <div @click="handle">汽车</div>  
</template>  
<script>  
  import {bus} from "../common/commonvue.js"  
  export default{  
    methods:{  
      handle(){  
        //通过emit触发事件，并传值  
        bus.$emit("eventTarget","我要加油");  
      }  
    }  
  }  
</script> 