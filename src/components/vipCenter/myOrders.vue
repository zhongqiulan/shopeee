<template>
    <div>
        <div class="el-row">
            <div class="el-col el-col-24">
                <div class="comp">
                    <div class="tmpl routeanimate">
                        <div class="section">
                            <div class="location">
                                <span>当前位置：</span>
                                <a href="/index.html">首页</a> &gt;
                                <a href="#/site/member/center" class="">会员中心</a>&gt;
                                <a href="#/site/member/orderlist" class="router-link-exact-active ">我的订单</a>
                            </div>
                        </div>
                        <div class="section clearfix">
                            <div class="left-260">
                                <div class="bg-wrap">
                                    <div class="avatar-box">
                                        <a href="/user/center/avatar.html" class="img-box">
                                            <i class="iconfont icon-user-full"></i>
                                        </a>
                                        <h3>

                                            ivanyb

                                        </h3>
                                        <p>
                                            <b>注册会员</b>
                                        </p>
                                    </div>
                                    <div class="center-nav">
                                        <ul>
                                            <li>
                                                <h2>
                                                    <i class="iconfont icon-order"></i>
                                                    <span>订单管理</span>
                                                </h2>
                                                <div class="list">
                                                    <p>
                                                        <a href="#/site/member/orderlist" class="router-link-exact-active ">
                                                            <i class="iconfont icon-arrow-right"></i>交易订单</a>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <h2>
                                                    <i class="iconfont icon-user"></i>
                                                    <span>账户管理</span>
                                                </h2>
                                                <div class="list">
                                                    <p>
                                                        <a href="#/site/member/center" class="">
                                                            <i class="iconfont icon-arrow-right"></i>账户资料</a>
                                                    </p>
                                                    <p>
                                                        <a href="#/site/member/center" class="">
                                                            <i clrouter-linkss="iconfont icon-router-linkrrow-right"></i>头像设置</a>
                                                    </p>
                                                    <p>
                                                        <a href="#/site/member/center" class="">
                                                            <i class="iconfont icon-arrow-right"></i>修改密码</a>
                                                    </p>
                                                    <p>
                                                        <a href="javascript:void(0)">
                                                            <i class="iconfont icon-arrow-right"></i>退出登录</a>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="right-auto">
                                <div class="bg-wrap" style="min-height: 765px;">
                                    <div class="sub-tit">
                                        <ul>
                                            <li class="selected">
                                                <a href="/user/order-list.html">交易订单</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="table-wrap">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="ftable">
                                            <tbody>
                                                <tr>
                                                    <th width="16%" align="left">订单号</th>
                                                    <th width="10%">姓名</th>
                                                    <th width="12%">订单金额</th>
                                                    <th width="11%">下单时间</th>
                                                    <th width="10%">状态</th>
                                                    <th width="12%">操作</th>
                                                </tr>
                                                <tr v-for="item in myOrders.message" :key="item.id">
                                                    <td>{{item.order_no}}</td>
                                                    <td align="left">{{item.accept_name}}</td>
                                                    <td align="left">
                                                        <strong style="color: red;">￥{{item.order_amount}}</strong>
                                                        <br> {{item.paymentTitle}}
                                                    </td>
                                                    <td align="left">{{item.add_time | dateFmt('YYYY-MM-DD HH:mm:ss')}}</td>
                                                    <td align="left">
                                                        <span v-if="item.status == 1">待付款</span>
                                                        <span v-else-if="item.status == 2">已付款待发货</span>
                                                        <span v-else-if="item.status == 3">已发货待签收</span>
                                                        <span v-else-if="item.status == 4">已签收</span>
                                                        <span v-else-if="item.status == 5">已取消</span>
                                                    </td>
                                                    <td align="left">
                                                        <!-- 声明式导航 params -->
                                                        <!-- <router-link :to="'/orderInfo/'+item.id+'/222'" class="">查看订单</router-link> -->

                                                        <!-- 声明式导航 query -->
                                                        <router-link :to="'/orderInfo?orderId='+item.id" class="">查看订单</router-link>

                                                        <!-- 编程式导航 -->
                                                        <!-- <a @click="goToOrderInfo(item.id)" class="">查看订单</a> -->
                                                        <br>
                                                        <router-link v-if="item.status == 1" :to="'/payOrder/'+item.id" class="">|去付款</router-link>
                                                        <br>
                                                        <a href="javascript:void(0)">|取消</a>
                                                        <br>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="page-foot">
                                            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageIndex" :page-sizes="[10, 20, 30, 50]"
                                                :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="myOrders.totalcount">
                                            </el-pagination>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        data() {
            return {
                pageIndex: 1,//页码
                pageSize: 10,//页容量
                myOrders: {},//订单对象
            }
        },
        mounted() {
            this.getMyOrdersData()
        },
        methods: {
            //获取我的订单列表的数据
            getMyOrdersData() {
                const url = `site/validate/order/userorderlist?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`

                this.$axios.get(url).then(res => {
                    this.myOrders = res.data
                })
            },
            //更改了页容量
            handleSizeChange(pageSize){
                this.pageSize = pageSize //重新赋值页容量
                this.pageIndex = 1 //更改了页容量之后，从第一页开始查询

                this.getMyOrdersData() //重新查询
            },
            //更改了页码
            handleCurrentChange(pageIndex){
                this.pageIndex = pageIndex //重新赋值页码

                this.getMyOrdersData() //重新查询
            },
            //跳转到订单详情组件中去
            goToOrderInfo(orderId){
                //编程式导航，并且通过params传值
                // this.$router.push({name:'orderInfo',params:{orderId,goodsId:333}})

                //编程式导航，并且通过query传值
                // this.$router.push({path:'/orderInfo',query: { orderId}})
            }
        }
    }
</script>