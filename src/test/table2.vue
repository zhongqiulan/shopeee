<template>
  <div id="table2">
    <!-- <router-link to="{ path:'/home/game', query: { num:  1} }" >默认按钮</router-link> -->
    
    <el-button @click="toGame">默认按钮</el-button>
    <el-button round  @click="$store.commit('switch_dialog')">圆角按钮</el-button> 
    <iframe-model v-if="$store.state.showModel.show" >
    </iframe-model>
    <el-upload
               
               class='ensure ensureButt'
               :action="importFileUrl"
               :data="upLoadData"
               name="importfile"
               :onError="uploadError"
               :onSuccess="uploadSuccess"
               :beforeUpload="beforeAvatarUpload"
               >
   <el-button size="small" type="primary">确定</el-button>
   </el-upload>
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
    
      importFileUrl: 'http:dtc.com/cpy/add',
    upLoadData: {
        cpyId: '123456', 
        occurTime: '2017-08'
    }
    }
  },
  methods: {
 toGame() {
    this.$router.push({
          path: '/cicdMain',
          query: { id: 1, stage: 2 }
        })
 },
  // 上传成功后的回调
    uploadSuccess (response, file, fileList) {
      console.log('上传文件', response)
    },
    // 上传错误
    uploadError (response, file, fileList) {
      console.log('上传失败，请重试！')
    },
    // 上传前对文件的大小的判断
    beforeAvatarUpload (file) {
      const extension = file.name.split('.')[1] === 'xls'
      const extension2 = file.name.split('.')[1] === 'xlsx'
      const extension3 = file.name.split('.')[1] === 'doc'
      const extension4 = file.name.split('.')[1] === 'docx'
      const isLt2M = file.size / 1024 / 1024 < 10
      if (!extension && !extension2 && !extension3 && !extension4) {
        console.log('上传模板只能是 xls、xlsx、doc、docx 格式!')
      }
      if (!isLt2M) {
        console.log('上传模板大小不能超过 10MB!')
      }
      return extension || extension2 || extension3 || extension4 && isLt2M

  }
}}
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
