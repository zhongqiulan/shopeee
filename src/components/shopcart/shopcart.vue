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
                                <li>
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
                    <!--商品列表-->
                    <div class="cart-box">
                        <input id="jsondata" name="jsondata" type="hidden">
                        <table width="100%" align="center" class="cart-table" border="0" cellspacing="0" cellpadding="8">
                            <tbody>
                                <tr>
                                    <th width="48" align="center">
                                        <a>选择</a>
                                    </th>
                                    <th align="left" colspan="2">商品信息</th>
                                    <th width="84" align="left">单价</th>
                                    <th width="104" align="center">数量</th>
                                    <th width="104" align="left">金额(元)</th>
                                    <th width="54" align="center">操作</th>
                                </tr>
                                <tr v-for="item in goodsList" :key="item.id">
                                    <td width="48" align="center">
                                        <el-switch v-model="item.isSelected" active-color="#0094ff" inactive-color="#eeeeee">
                                        </el-switch>
                                    </td>
                                    <td align="left" colspan="2">
                                        <img :src="item.img_url" alt="">
                                        <span style="margin-left:10px;">{{item.title}}</span>
                                    </td>
                                    <td width="84" align="left">{{item.sell_price}}</td>
                                    <td width="104" align="center">
                                        <inputnumber @numberChange="getChangeNumber" :goodsId="item.id" :goodsNumber="item.buycount" />
                                    </td>
                                    <td width="104" align="left">{{item.sell_price*item.buycount}}</td>
                                    <td width="54" align="center">
                                        <a @click="deleteGoodsById(item.id)">删 除</a>
                                    </td>
                                </tr>
                                <tr v-if="goodsList.length==0">
                                    <td colspan="10">
                                        <div class="msg-tips">
                                            <div class="icon warning">
                                                <i class="iconfont icon-tip"></i>
                                            </div>
                                            <div class="info">
                                                <strong>购物车没有商品！</strong>
                                                <p>您的购物车为空，
                                                    <a href="/index.html">马上去购物</a>吧！</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th align="right" colspan="8">
                                        已选择商品
                                        <b class="red" id="totalQuantity">{{getTotalCount}}</b> 件 &nbsp;&nbsp;&nbsp; 商品总金额（不含运费）：
                                        <span class="red">￥</span>
                                        <b class="red" id="totalAmount">{{getTotalAmount}}</b>元
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--/商品列表-->
                    <!--购物车底部-->
                    <div class="cart-foot clearfix">
                        <div class="right-box">
                            <button class="button" @click="continueBuy">继续购物</button>
                            <button class="submit" @click="goToOrder">立即结算</button>
                        </div>
                    </div>
                    <!--购物车底部-->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    img {
        width: 30px;
        height: 30px;
    }
</style>

<script>
    import { getLocalGoods } from '../../common/localStorageTool'

    //导入子组件
    import inputnumber from '../subcomponents/inputnumber'

    export default {
        components: {
            inputnumber
        },
        data() {
            return {
                goodsList: []
            }
        },
        created() {
            this.getGoodsListData()

        },
        computed: {
            getTotalCount() {
                let totalCount = 0
                this.goodsList.forEach(item => {
                    if (item.isSelected) {
                        totalCount += item.buycount
                    }
                })

                return totalCount
            },
            getTotalAmount() {
                let totalAmount = 0

                this.goodsList.forEach(item => {
                    if (item.isSelected) {
                        totalAmount += item.buycount * item.sell_price
                    }
                })

                return totalAmount
            }
        },
        methods: {
            //获取购物车需要展示的数组
            getGoodsListData() {
                //1.获取保存到本地的对象 {"90":5,"93":6}
                const localGoods = getLocalGoods()

                //2.声明一个临时的数组
                const tempArray = []
                for (const key in localGoods) {
                    tempArray.push(key)
                }

                if (tempArray.length == 0) return

                //3.准备好url
                const url = `site/comment/getshopcargoods/${tempArray.join(',')}`
                this.$axios.get(url).then(res => {
                    res.data.message.forEach(item => {
                        item.isSelected = true
                        item.buycount = localGoods[item.id]
                    })

                    this.goodsList = res.data.message
                }).catch(err => {
                    console.log(err)
                })
            },
            //获取子组件传递过来的值
            /**
             * goods ===> 子组件传递过来的格式是
             * {
             *  goodsId:87,
             *  goodsNumber:3
             * }
            */
            getChangeNumber(goods) {
                //更改自己的数组，然后重新计算
                this.goodsList.forEach(item => {
                    if (item.id == goods.goodsId) {
                        item.buycount = goods.goodsNumber
                    }
                })

                //调用Vuex中的Mutations的updateGoods
                this.$store.commit('updateGoods', {
                    goodsId: goods.goodsId,
                    count: goods.goodsNumber
                })
            },
            //根据id删除某个商品
            deleteGoodsById(goodsId) {
                this.$confirm('是否删除该商品?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //1.先把该goods对象的索引的元素干掉
                    const deleteIndex = this.goodsList.findIndex(item=>{
                        return item.id === goodsId
                    })

                    this.goodsList.splice(deleteIndex,1)

                    //2.调用Vuex的方法
                    this.$store.commit('deleteGoodsById',goodsId)
                }).catch(() => {
                    console.log("取消")
                });
            },
            //去下单
            goToOrder(){
                const tempArray = []
                
                this.goodsList.forEach(item=>{
                    if(item.isSelected){
                        tempArray.push(item.id)
                    }
                })

                if(tempArray.length == 0){
                    this.$message.error('请至少选择一个商品进行结算!');
                    return
                }

                //通过编程式导航触发路由
                this.$router.push({path:`/order/${tempArray.join(',')}`})
            },
            //继续购物
            continueBuy(){
                //通过编程式导航触发路由
                this.$router.push({path:'/goodslist'})
            }
        }
    }
</script>