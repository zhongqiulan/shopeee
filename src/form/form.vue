<template>
    <div id="form">
        <el-form  :model="form" :rules="rules" label-width="80px" ref="ruleForm">
            <el-radio-group  @change="expressChange" v-model="form.resource">
            <el-radio label="1">11</el-radio>
            <el-radio label="2">22</el-radio>
            </el-radio-group>
            <div id="item1"  ref="forms">
                     <el-form-item label="活动名称"  prop="name1">
                        <el-input v-model="form.name1"></el-input>
                    </el-form-item>
                    <el-form-item label="活动名称"  prop="name2">
                        <el-input v-model="form.name2"></el-input>
                    </el-form-item>
                    <el-form-item label="活动名称"  prop="name3">
                        <el-input v-model="form.name3"></el-input>
                    </el-form-item>
                    <el-form-item label="活动名称"  prop="name4">
                        <el-input v-model="form.name4"></el-input>
                    </el-form-item>
                    <el-form-item label="活动名称">
                        <el-input v-model="form.name5"></el-input>
                    </el-form-item>
            </div>
               <div id="item2">
                     <el-form-item label="活动名称" prop="name1">
                        <el-input v-model="form.name1"></el-input>
                    </el-form-item>
                    <el-form-item label="活动名称"  prop="name2">
                        <el-input v-model="form.name2"></el-input>
                    </el-form-item>
            </div>
            <el-row>
            <el-button  @click="goShopCart" >默认按钮</el-button>
       
            </el-row>
        </el-form>
    </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      form: {
        name1: "4",
        name2: "3",
        resource: "1"
      },
      rules: {
        name1: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        name2: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        name3: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        name4: [{ required: true, message: "请输入活动名称", trigger: "blur" }]
      }
    };
  },
  created() {},
  methods: {
    expressChange(label) {
      switch (label) {
        case "1":
          this.form.name = "11";
          $("#item1").show();
          $("#item2").hide();
          this.rules = {
            name1: [
              { required: true, message: "请输入活动名称", trigger: "blur" }
            ],
            name2: [
              { required: true, message: "请输入活动名称", trigger: "blur" }
            ],
            name3: [
              { required: true, message: "请输入活动名称", trigger: "blur" }
            ],
            name4: [
              { required: true, message: "请输入活动名称", trigger: "blur" }
            ]
          };
          console.log(this.form);
          break;

        case "2":
          this.form.name = "222";
          $("#item1").hide();
          $("#item2").show();
          this.rules = {
            name1: [
              { required: true, message: "请输入活动名称", trigger: "blur" }
            ],
            name2: [
              { required: true, message: "请输入活动名称", trigger: "blur" }
            ]
          };
          break;
        default:
          break;
      }
    },
    goShopCart() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          function getGoodsData() {
            return axios.get("site/goods/gettopdata/goods");
          }
          function getGoodsGroupData() {
            return axios.get("site/goods/getgoodsgroup");
          }
          axios.all([getGoodsData(), getGoodsGroupData()]).then(
            axios.spread(function(acct, perms) {
              // 两个请求现在都执行完成
            })
          );
        } else {
          this.$message.warning("请完善各项信息，再点发布按钮！");
        }
      });
    }
  },
  computed: {
    // ...mapState(["orderList"])
  },
//   mounted() {
//     console.log(typeof orderList); //==>undefind
//     console.log(typeof this.orderList); //==>object
//   }
};
</script>
<style>
.el-radio__input.is-checked .el-radio__inner {
  border-color: green;
  background: green;
}
.el-radio__input.is-checked + .el-radio__label {
  color: green;
}
</style>
<style scoped>
#item2 {
  display: none;
}
</style>


