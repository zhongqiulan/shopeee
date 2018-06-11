<template>
  <div class="adiv">
    <p>a组件</p>
    <button type="button" v-on:click="handleClick">点击打开组件b弹窗</button>
  </div>
</template>

<script>
import {bus} from "../common/commonvue.js" 
export default {
  data(){
    return {
      
    }
  },
  methods: {
    handleClick () {
      bus.$emit('isLogFn','true')
    }
   
  }
}
</script>

<style>
.adiv{
  width: 400px;
  height: 200px;
  border: 1px solid #000;
  margin: 0 auto;
}
</style>