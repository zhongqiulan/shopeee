<template>
    <div id="form">
        <el-form ref="form" :model="form" label-width="80px">
            <el-radio-group  @change="expressChange" v-model="form.resource">
            <el-radio label="1">jjjjjjjjjjjjjjjjjj</el-radio>
            <el-radio label="2">llllllllllllllll</el-radio>
            </el-radio-group>
            <div id="item1"  ref="forms">
                     <el-form-item label="活动名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="活动名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="活动名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="活动名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="活动名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
            </div>
               <div id="item2">
                     <el-form-item label="活动名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="活动名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                  
            </div>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
      return {
        form: {
          name: '4',
          resource:"1"
        }
      }
    },
    created(){
        
    },
    methods: {
            expressChange(label) {
                switch (label) {
                    case "1":
                        this.form.name = '11'
                        $('#item1').show()
                        break;

                    case "2":
                       this.form.name='222'
                       $('#item1').hide()
                        break;
                    default:
                        break;
                }
            },
    }
}
</script>
<style>
.el-radio__input.is-checked .el-radio__inner {
    border-color: green;
    background: green;
}
.el-radio__input.is-checked+.el-radio__label {
    color:green;
}
</style>

