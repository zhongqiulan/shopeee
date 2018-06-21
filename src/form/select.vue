<template>
    <div>
        <el-row class="demo-autocomplete">
  <el-col :span="12">
     <el-select v-model="value6" 
     @change="handleSelect"
      placeholder="请选择">
    <el-option
      v-for="item in cities"
      :key="item.value"
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
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value6: '' ,
        zhi:''
      };
    },
    methods: {
      handleSelect(item) {
        console.log(item.label);
        this.zhi = item.value
      }
    },
   
  }
</script>