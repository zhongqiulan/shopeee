<template>  
  <div>加油站</div>  
</template>  
<script>  
  import {bus} from "../common/commonvue.js"  
  export default{  
    mounted(){  
      //通过on监听事件，回调方法获取数据  
      bus.$on("eventTarget",v=>{  
        console.log(v);  
      });  
    }  
  }  
</script>  