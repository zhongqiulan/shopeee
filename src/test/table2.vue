<template>
  <div id="table2">
    <el-button round  @click="showModal = true">圆角按钮</el-button> 
    <iframe-model v-if="showModal" @close="showModal = false">
    </iframe-model>
  </div>
 </template>

<script>
import iframeModel from './iframe'
export default {
   mounted(){
        $(".modal-container").niceScroll({
             cursorwidth: "5px",
        });
    },
  components: { iframeModel},
  name: '',
  data () {
    return {
      showModal: false
    }
  },
  methods: {
 

  }
}
</script>
<style scoped>
    #table2 {     
        background-color: silver;
        width:86%;
        margin:0 auto;
        padding-top: 50px;
        height: 500px;
    }
    
 
</style>
