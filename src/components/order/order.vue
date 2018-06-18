<template>
    <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="/cart.html">购物车</a>
            </div>
        </div>

        <div class="section">
            <div class="wrapper">
                <div class="bg-wrap">
                    <!--购物车头部-->
                    <div class="cart-head clearfix">
                        <h2>
                            <i class="iconfont icon-cart"></i>我的购物车</h2>
                        <div class="cart-setp">
                            <ul>
                                <li class="first active">
                                    <div class="progress">
                                        <span>1</span>
                                        放进购物车
                                    </div>
                                </li>
                                <li class="active">
                                    <div class="progress">
                                        <span>2</span>
                                        填写订单信息
                                    </div>
                                </li>
                                <li class="last">
                                    <div class="progress">
                                        <span>3</span>
                                        支付/确认订单
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--购物车头部-->
                    <el-form :model="orderInfo" label-width='150px' :rules="rules" ref="ruleForm" class="cart-box demo-ruleForm">
                        <h2 class="slide-tit">
                            <span>1、收货地址</span>
                        </h2>
                        <div class="form-box address-info">
                            <el-form-item label="收货人姓名:" prop="accept_name">
                                <el-input style="width:500px;" v-model="orderInfo.accept_name"></el-input>
                            </el-form-item>

                            <el-form-item label="所属区域:" prop="area">
                                <v-distpicker :province="orderInfo.area.province.value" :city="orderInfo.area.city.value" :area="orderInfo.area.area.value"
                                    @selected="onSelected"></v-distpicker>
                            </el-form-item>

                            <el-form-item label="详细地址:" prop="address">
                                <el-input style="width:500px;" v-model="orderInfo.address"></el-input>
                            </el-form-item>

                            <el-form-item label="手机号码:" prop="mobile">
                                <el-input style="width:500px;" v-model="orderInfo.mobile"></el-input>
                            </el-form-item>

                            <el-form-item label="电子邮箱:">
                                <el-input style="width:250px;" v-model="orderInfo.email"></el-input>
                            </el-form-item>

                            <el-form-item label="邮政编码:">
                                <el-input style="width:250px;" v-model="orderInfo.post_code"></el-input>
                            </el-form-item>
                        </div>
                        <h2 class="slide-tit">
                            <span>2、支付方式</span>
                        </h2>
                        <ul class="item-box clearfix">
                            <!--取得一个DataTable-->
                            <li>
                                <el-radio v-model="orderInfo.payment_id" label="6">在线支付</el-radio>
                                手续费:0.0元
                            </li>
                        </ul>
                        <h2 class="slide-tit">
                            <span>3、配送方式</span>
                        </h2>
                        <ul class="item-box clearfix">
                            <!--取得一个DataTable-->
                            <li>
                                <el-radio-group @change="expressChange" v-model="orderInfo.express_id">
                                    <el-radio label="1">顺丰快递(20.0元)</el-radio>
                                    <el-radio label="2">圆通快递(10.0元)</el-radio>
                                    <el-radio label="3">韵达(8.0元)</el-radio>
                                </el-radio-group>
                            </li>
                        </ul>
                        <h2 class="slide-tit">
                            <span>4、商品清单</span>
                        </h2>
                        <div class="line15"></div>
                        <table width="100%" border="0" align="center" cellpadding="8" cellspacing="0" class="cart-table">
                            <tbody>
                                <tr>
                                    <th colspan="2" align="left">商品信息</th>
                                    <th width="84" align="left">单价</th>
                                    <th width="84" align="center">购买数量</th>
                                    <th width="104" align="left">金额(元)</th>
                                </tr>
                                <tr v-for="item in goodsList" :key="item.id">
                                    <td width="68">
                                        <a target="_blank" href="/goods/show-89.html">
                                            <img :src="item.img_url" class="img">
                                        </a>
                                    </td>
                                    <td>
                                        <a target="_blank" href="/goods/show-89.html">{{item.title}}</a>
                                    </td>
                                    <td>
                                        <span class="red">
                                            ￥{{item.sell_price}}
                                        </span>
                                    </td>
                                    <td align="center">{{item.buycount}}</td>
                                    <td>
                                        <span class="red">
                                            ￥{{item.sell_price * item.buycount}}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="line15"></div>
                        <h2 class="slide-tit">
                            <span>5、结算信息</span>
                        </h2>
                        <div class="buy-foot clearfix">
                            <div class="left-box">
                                <dl>
                                    <dt>订单备注(100字符以内)</dt>
                                    <dd>
                                        <textarea v-model="orderInfo.message" name="message" class="input" style="height:35px;"></textarea>
                                    </dd>
                                </dl>
                            </div>
                            <div class="right-box">
                                <p>
                                    商品
                                    <label class="price">{{totalCount}}</label> 件&nbsp;&nbsp;&nbsp;&nbsp; 商品金额：￥
                                    <label id="goodsAmount" class="price">{{totalPrice}}</label> 元&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                                <p>
                                    运费：￥
                                    <label id="expressFee" class="price">{{orderInfo.expressMoment}}</label> 元
                                </p>
                                <p class="txt-box">
                                    应付总金额：￥
                                    <label id="totalAmount" class="price">{{getPayAmount}}</label>
                                </p>
                                <p class="btn-box">
                                    <a class="btn button" @click="goShopCart">返回购物车</a>
                                    <a id="btnSubmit" @click="goToOrder" class="btn submit">确认提交</a>
                                </p>
                            </div>
                        </div>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VDistpicker from 'v-distpicker'

    import { getLocalGoods } from '../../common/localStorageTool'

    export default {
        components: { VDistpicker },
        created() {
            this.getGoodsListData()
            let url = JSON.stringify(this.orderInfo)
            console.log(url)
            console.log(this.$refs.ruleForm)
        },
        computed: {
            getPayAmount() {
                return this.totalPrice + this.orderInfo.expressMoment
            }
        },
        data() {
            /**
             * rule：规则对象
             * value:你传入进来的要校验的原始值
             * callback:决定你是否验证通过，直接调用callback() 就代表校验功能，
             * 如果校验失败，在调用callback的时候，里面创建一个Error并且写好
             * 错误的提示
            */
            var checkMobile = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('手机号码不能为空'));
                }

                //利用正则对传入进来的手机号的值value,进行校验
                var myreg = /^[1][3,4,5,6,7,8][0-9]{9}$/;
                if (myreg.test(value)) {
                    callback();
                } else {
                    callback(new Error('手机号码非法'));
                }
            };

            return {
                goodsList: [],//展示给用户看的买的商品信息
                totalCount: 0, //总件数
                totalPrice: 0, //总金额
                orderInfo: {//shu这些数据就是要提交到后台去的
                    accept_name: '赵坚强',//收货人姓名
                    address: '中粮商务公园3栋1304',//详细地址
                    mobile: '13812345678',//手机号码
                    email: 'huangwei@itcast.cn',//电子邮箱
                    post_code: '518000',//邮政编码
                    area: { //所属区域
                        province: { code: "440000", value: "广东省" },
                        city: { code: "440300", value: "深圳市" },
                        area: { code: "440306", value: "宝安区" }
                    },
                    payment_id: "6", //支付方式，暂时只支持在线支付
                    express_id: "1",//1.顺丰 2.圆通 3.韵达
                    expressMoment: 20,//运费，默认20元
                    message: "请快点发货",//留言
                    goodsAmount: 0,//纯粹的商品总价格，不含运费
                    goodsids: '',//结算的商品id，多个之间用，分割
                    cargoodsobj: {}//本地存储的要结算的商品对象
                },
                rules: {
                    accept_name: [
                        { required: true, message: '请输入收货人姓名', trigger: 'blur' }
                    ],
                    area: [
                        { required: true, message: '所属区域不能为空', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '请输入详细地址', trigger: 'blur' }
                    ],
                    mobile: [
                        { required: true, validator: checkMobile, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            //省市区联动时候选择了区之后触发的事件
            onSelected(data) {
                this.orderInfo.area = data
            },
            //当切换了快递方式之后
            expressChange(label) {
                switch (label) {
                    case "1":
                        this.orderInfo.expressMoment = 20
                        break;

                    case "2":
                        this.orderInfo.expressMoment = 10
                        break;

                    case "3":
                        this.orderInfo.expressMoment = 8
                        break;

                    default:
                        break;
                }
            },
            //获取用户将要下单的商品信息，展示给用户看
            getGoodsListData() {
                //给orderInfo的goodsids设置值
                this.orderInfo.goodsids = this.$route.params.ids

                const url = `site/validate/order/getgoodslist/${this.$route.params.ids}`

                //获取本地的所有商品信息(包含了准备结算和不结算)
                const localGoods = getLocalGoods()

                //本地的，要结算的商品对象
                const tempGoodsObj = {}
                const tempIds = this.$route.params.ids.split(',')
                tempIds.forEach(key => {
                    tempGoodsObj[key] = localGoods[key]
                })

                //赋值给orderInfo.cargoodsobj，tempGoodsObj要结算，排除不结算的
                this.orderInfo.cargoodsobj = tempGoodsObj

                this.$axios.get(url).then(res => {
                    //临时总数量
                    let tempTotalCount = 0
                    //临时总价格
                    let tempTotalPrcie = 0
                    res.data.message.forEach(item => {
                        item.buycount = localGoods[item.id]

                        //计算商品的总数量和总价格
                        tempTotalCount += item.buycount
                        tempTotalPrcie += item.buycount * item.sell_price
                    })

                    //赋值给模型，那么对应视图就会发生变化
                    this.totalCount = tempTotalCount
                    this.totalPrice = tempTotalPrcie

                    //给orderInfo.goodsAmount 赋值
                    this.orderInfo.goodsAmount = tempTotalPrcie

                    this.goodsList = res.data.message
                })
            },
            //返回购物车组件(通过编程式导航)
            goShopCart() {
                this.$router.push({ path: '/shopcart' })
            },
            goToOrder() {
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        //注意:发送请求之前，一定要把this.orderInfo的信息，全部准备好，记得打印一下，看看
                        const url = `site/validate/order/setorder`

                        this.$axios.post(url,this.orderInfo).then(res=>{
                            if(res.data.status == 1){
                                this.$message.error(res.data.message)
                            }

                            //提交成功之后需要做的事情
                            //1、跳转到支付页面，并且带上订单id
                            this.$router.push({path:`/payOrder/${res.data.message.orderid}`})

                            //2.删除本地已经下过订单的商品，同时更新buycount的值
                            const tempArray = this.$route.params.ids.split(',')
                            tempArray.forEach(goodsId=>{
                                //调用Vuex的deleteGoodsById方法，既可以删除本地的，也可以更新buycount
                                this.$store.commit('deleteGoodsById',goodsId)
                            })
                        })
                    } else {
                        this.$message.warning("请完善信息，再下单！")
                    }
                });
            }
        }
    }
</script>