<!--父组件中引入子组件-->
<template>
  <div id="vuex1">
    <a href="javascript:;" @click="$store.dispatch('switch_dialogs')">点击</a>
    <t-dialog></t-dialog>
  </div>
</template>

<script>
import dialog from './dialog.vue'
export default {
  components:{
    "t-dialog":dialog
  }
}
</script>
<style>
  #vuex1 {
    margin-top: 100px;
  }
</style>
