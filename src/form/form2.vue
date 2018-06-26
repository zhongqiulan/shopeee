<template>
    <div id="form">
        <el-form  :model="form"  label-width="80px" ref="form">
            <el-radio-group  @change="expressChange" v-model="form.resource">
            <el-radio label="1">11</el-radio>
            <el-radio label="2">22</el-radio>
            </el-radio-group>
            <div id="item1"  v-for="(item,index) in form.tableData" >
                <el-form-item 
                :label="item.name"  
                :rules="form.rules.name"
                :prop="'tableData.' + index + '.address'"
                >
                <el-input v-model="item.address"></el-input>
            </el-form-item>
               
            </div>
            <div id="item2" v-for="(item,index) in form.tableData" >
                <el-form-item 
                    :label="item.name"  
                    :rules="form.rules.name"
                    :prop="'tableData.' + index + '.address'"
                    >
                    <el-input v-model="item.address"></el-input>
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
        tableData: [
          {
            name: "王小虎1",
            address: ""
          },
          {
            name: "王小虎2",
            address: ""
          },
          {
            name: "王小虎3",
            address: "上海市普陀区金沙江路 1518 弄3"
          },
          {
            name: "王小虎4",
            address: "上海市普陀区金沙江路 1518 弄4"
          }
        ],
        rules: {
          name: [
            { required: true, message: '请输入活动名称1', trigger: 'blur' },
        
          ],
      
        },
        resource: "1"
      }
    };
  },
  created() {},
  methods: {
    expressChange(label) {
      switch (label) {
        case "1":
          $("#item1").show();
          $("#item2").hide();
          this.form.tableData = [
            {
              name: "王小虎1",
              address: "上海市普陀区金沙江路 1518 弄1"
            },
            {
              name: "王小虎2",
              address: "上海市普陀区金沙江路 1518 弄2"
            },
            {
              name: "王小虎3",
              address: "上海市普陀区金沙江路 1518 弄3"
            },
            {
              name: "王小虎4",
              address: "上海市普陀区金沙江路 1518 弄4"
            }
          ];

          break;

        case "2":
          $("#item1").hide();
          $("#item2").show();
          this.form.tableData = [
            {
              name: "王小虎1",
              address: "上海市普陀区金沙江路 1518 弄1"
            },
            {
              name: "王小虎2",
              address: "上海市普陀区金沙江路 1518 弄2"
            }
          ];
          break;
        default:
          break;
      }
    },
    goShopCart() {
      this.$refs.form.validate(valid => {
        if (valid) {
          //   function getGoodsData() {
          //     return axios.get("site/goods/gettopdata/goods");
          //   }
          //   function getGoodsGroupData() {
          //     return axios.get("site/goods/getgoodsgroup");
          //   }
          //   axios.all([getGoodsData(), getGoodsGroupData()]).then(
          //     axios.spread(function(acct, perms) {
          //       // 两个请求现在都执行完成
          //     })
          //   );
        } else {
          this.$message.warning("请完善各项信息，再点发布按钮！");
        }
      });
    }
  },
  computed: {
    // ...mapState(["orderList"])
  }
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


