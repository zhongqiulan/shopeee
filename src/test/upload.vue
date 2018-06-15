<template>
    <div>
     <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  accept='.doc'
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :on-success="uploadSuccess"
  :file-list="fileList">
  <!-- <el-button size="small" type="primary">点击上传</el-button> -->
 <el-button type="text">点击上传<i class="el-icon-upload" style="padding-left:10px"></i></el-button>
</el-upload>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        window.location.href=file.url;
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      uploadSuccess(response, file, fileList){
          console('fffffff')
      }
    }
  }
</script>
<style>
.el-upload-list__item{
    width:560px;
}
</style>
