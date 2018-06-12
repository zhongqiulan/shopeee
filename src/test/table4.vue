<template>
  <div>
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
  </div>
</template>

<script>

export default {
 
  data () {
    return {
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

