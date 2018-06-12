<template>
  <div id="table2">
    <!-- <router-link to="{ path:'/home/game', query: { num:  1} }" >默认按钮</router-link> -->
    <el-button @click="toGame">默认按钮</el-button>
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
 toGame() {
    this.$router.push({
          path: '/cicdMain',
          query: { id: 1, stage: 2 }
        })
 }

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
