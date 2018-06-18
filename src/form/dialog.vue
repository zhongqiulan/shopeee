<!--子组件-->
<template>
  <el-dialog :visible.sync="$store.state.dialog.show">
      <h1>纸短情长</h1>
       <el-button @click="$store.dispatch('switch_dialogs')">默认按钮</el-button>
  </el-dialog>
</template> 

<script>
export default {

}
</script>