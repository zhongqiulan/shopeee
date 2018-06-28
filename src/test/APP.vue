<template>
  <div id="app">
    
   <div id="crRelease">
      <!-- <aPage style="height:30px;width:500px" ></aPage> -->
      <v-center></v-center>
      6
    1111111111111
    <bPage ></bPage>
    <el-button @click="go">默认按钮</el-button>
   </div>
    <crRelease v-if="showCRrelease"></crRelease>
    
  </div>
</template>

<script>
import center from "./center.vue";
import bPage from "./b.vue";
import crRelease from "./crRelease.vue";

export default {
  data() {
    return {
      showCRrelease: false
    };
  },
  name: "app",
  components: {
    center:vCenter,
    bPage,
    crRelease
  },
  methods: {
    go(){
      $('#crRelease').hide()
      this.showCRrelease = true;
    }
  }
};
</script>

<style>
</style>