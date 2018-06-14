<template>
  <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">
      <table class="edit-table">
      <thead>
        <th>姓名</th><th>{{getTotalCount}}</th><th>成绩</th>
      </thead>
      <tbody>
        <tr><td>bbbjjjjGGGGG44</td><td><input v-model="item1"/></td><td><i class="el-icon-remove-outline"></i></td></tr>
        <tr><td>bbbbGGGGGGGG44</td><td><input v-model="item2"/></td><td><i class="el-icon-remove-outline"></i></td></tr>
        <tr><td>bbbbGGGGGGGG44</td><td><input v-model="item3"/></td><td><i class="el-icon-remove-outline"></i></td></tr>
        <tr><td>bbbbGGGGGGGG44</td><td><input v-model="item4"/></td><td><i class="el-icon-remove-outline"></i></td></tr>

      </tbody>
    </table>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
        <table class="edit-table">
      <thead>
        <th>姓名</th><th>{{getTotalCount}}</th><th>成绩</th>
      </thead>
      <tbody>
        <tr><td>bbbbGGGGGGGG44</td><td><input v-model="item1"/></td><td><i class="el-icon-remove-outline"></i></td></tr>
        <tr><td>bbbbGGGGGGGG44</td><td><input v-model="item2"/></td><td><i class="el-icon-remove-outline"></i></td></tr>
        <tr><td>bbbbGGGGGGGG44</td><td><input v-model="item3"/></td><td><i class="el-icon-remove-outline"></i></td></tr>
        <tr><td>bbbbGGGGGGGG44</td><td><input v-model="item4"/></td><td><i class="el-icon-remove-outline"></i></td></tr>

      </tbody>
    </table>
    </el-tab-pane>
  </el-tabs>

    

    <el-upload
  class="docUploader"
  ref='docUploader'
  action=""
  :limit="1"
  :on-change="handleChange"
  :multiple="false"
  :auto-upload="false"
  accept=".doc, .docx, .pdf"
  
  >
  <el-button size="small" type="primary" slot="trigger" @click="clearDOC">选取文件</el-button>
  <el-button style="margin-left:10px;" size="small" type="success" @click="handleUpload">点击推送</el-button>
</el-upload>

  </div>
</template>

<script>

export default {
 
  data () {
    return {
      activeName: 'second',
    item1:1,
    item2:2,
    item3:4,
    item4:5
    }
  },
  computed:{
       getTotalCount() {
                let totalCount = 0
                totalCount = this.item1+this.item2+this.item3+this.item4
                return totalCount
            },
  },
  methods: {
    handleClick(tab, event) {
        console.log(tab, event);
      },
     handleChange(file) {
        this.fileType = file.name.endsWith('.pdf')?2:1
        this.file = file
        console.log(this.fileType);
      },
      clearDOC(){
        this.$refs.docUploader.clearFiles()
      },
      handleUpload() {
        const fd = new FormData()
        fd.append('file',this.file.raw)
        fd.append('msgType',this.msgType)
        fd.append('fileType',this.fileType)
        fd.append('deviceIdList',this.deviceeIdList)
        uploadWordPDF(fd).then(data=>{
          const result = data.data
        })
      }


 
}}

</script>

<style lang="scss">
.edit-table{
    width:85%;
    margin:0 auto;
    border:1px solid gray;
    border-collapse: collapse;
    th{
      border:1px solid gray;
      height: 50px;
      text-align: center;
    }
  tbody{
    
    tr{
        height: 50px;
        text-align: center;
      td{
        border:1px solid gray;
        i {
            font-size: 18px;
            color: green;
        }
        input{
            text-align: center;
            border-radius: 4px;
            height: 30px;
            width: 70px;
            background-color: #f5f5f5;
            border:1px solid gray;
        }
      }
    }
  }
}
</style>

