<template>
    <div>
        <el-row class="demo-autocomplete">
  <el-col :span="12">
     <el-select v-model="value6" 
     @change="handleSelect"
      placeholder="请选择">
    <el-option
      v-for="(item,index) in cities"
      :key="index"
      :label="item.label"   
      :value="item">
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>  
    </el-option>
  </el-select>
  </el-col>
<span>{{zhi}}</span>
</el-row>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        restaurants: [],
       
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Shanghai',
          label: '南京'
        }, {
          value: 'Shanghai',
          label: '成都'
        }, {
          value: 'Shanghai',
          label: '深圳'
        }, {
          value: 'Shanghai',
          label: '广州'
        }],
        value6: '111' ,
        zhi:''
      };
    },
    methods: {
      handleSelect(item) {
        console.log(item.label);
        this.zhi = item.value
        this.value6 = item.label
      }
    },
   
  }
</script>