<template>
    <div>
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="身份证正面">
                
                <el-upload 
                action="" 
               :http-request="httprequest" 
                :multiple="false" 
                :limit="3" 
                :on-change = 'handleChange'
                :on-exceed="handleExceed" 
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
            </el-form>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        region: ""
      },
      fileList: []
    };
  },
  methods: {
    //覆盖默认的上传行为
    httprequest() {},
    handleChange(file, fileList) {
      this.fileList = fileList;
      console.log(this.fileList);
    },
    handleExceed(files, fileList) {
      console.log(files)
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },

    onSubmit() {
      let formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("region", this.form.region);
      formData.append("file[]", this.fileList);
      // console.log(formData.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
  
      // 添加请求头
      axios
        .post("http://172.19.26.60:8081/rest/user/headurl", formData, config)
        .then(response => {
          if (response.data.code === 0) {
            self.ImgUrl = response.data.data;
          }
          console.log(response.data);
        });
    }
  }
};
</script>
