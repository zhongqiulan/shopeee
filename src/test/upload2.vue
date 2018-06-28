<template>
    <div>
        <el-upload
        class="upload-demo"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-change="handleChange"
        :on-remove="handleRemove"
        :file-list="fileList"
        :before-upload = "beforeUpload"
        :on-success="uploadSuccess"
        :auto-upload="false">
        
        <el-button slot="trigger" size="small" type="text"><i class="el-icon-upload" style="padding-left:10px"></i>选取文件</el-button>
        <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
        <el-button type="text" @click="submitUpload"><i class="el-icon-upload" style="padding-left:10px"  ></i>点击上传</el-button>
        <div @click="submitUpload">点击上传</div>
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
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    handlePreview(file) {
        console.log('chufal')
    //   return window.open='www.baidu.com';
    },
    handleChange(file, fileList) {
        // console.log(file)
        // console.log(fileList)
        this.fileList = fileList
    },
     uploadSuccess(response, file, fileList){
          // console.log(file)
      },
      beforeUpload(file){
        console.log(file)
      }
  }
};
</script>