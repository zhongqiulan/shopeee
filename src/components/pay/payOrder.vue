<template>
    <div>
        <div>
            <div class="section">
                <div class="location">
                    <span>当前位置：</span>
                    <a href="/index.html">首页</a> &gt;
                    <a href="javascript:;">支付中心</a>
                </div>
            </div>

            <div class="section">
                <div class="wrapper">
                    <div class="bg-wrap">
                        <div class="nav-tit pay">
                            <a href="javascript:;" class="selected">支付中心</a>
                        </div>
                        <div class="form-box payment">
                            <div class="el-row">
                                <div class="el-col el-col-18">
                                    <div class="el-row">
                                        <div class="el-col el-col-12">
                                            <dl class="form-group">
                                                <dt>订 单 号：</dt>
                                                <dd>{{orderInfo.order_no}}</dd>
                                            </dl>
                                        </div>
                                        <div class="el-col el-col-12">
                                            <dl class="form-group">
                                                <dt>收货人姓名：</dt>
                                                <dd>{{orderInfo.accept_name}}</dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div class="el-row">
                                        <div class="el-col el-col-12">
                                            <dl class="form-group">
                                                <dt>送货地址：</dt>
                                                <dd>{{orderInfo.area}}&nbsp;{{orderInfo.address}}
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="el-col el-col-12">
                                            <dl class="form-group">
                                                <dt>手机号码：</dt>
                                                <dd>{{orderInfo.mobile}}</dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div class="el-row">
                                        <div class="el-col el-col-12">
                                            <dl class="form-group">
                                                <dt>支付金额：</dt>
                                                <dd>{{orderInfo.order_amount}} 元</dd>
                                            </dl>
                                        </div>
                                        <div class="el-col el-col-12">
                                            <dl class="form-group">
                                                <dt>支付方式：</dt>
                                                <dd>在线支付</dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div class="el-row">
                                        <div class="el-col el-col-12">
                                            <dl class="form-group">
                                                <dt>备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：</dt>
                                                <dd>{{orderInfo.message}}</dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div class="el-col el-col-6">
                                    <img id="imgLogo" src="../../statics/site/images/alipay.png" hidden>

                                    <div id="container2">
                                        <canvas width="250" height="250"></canvas>
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
    //导入二维码插件
    import ".././../statics/site/js/jqueryplugins/qrcode/js/jqueryqr"

    export default{
        data(){
            return {
                orderInfo:{},
                interval:-1
            }
        },
        created(){
            this.getOrderInfoData()
            this.cycleOrderStatus()
        },
        methods:{
            //获取订单信息
            getOrderInfoData(){
                this.getOrderInfo()
            },
            cycleOrderStatus(){
                this.interval = setInterval(()=>{
                    this.getOrderInfo()
                },3000)
            },
            getOrderInfo(){
                const url = `site/validate/order/getorder/${this.$route.params.orderId}`

                this.$axios.get(url).then(res=>{
                    this.orderInfo = res.data.message[0]
                    if(this.orderInfo.status == 2){
                        this.$router.push({path:'/pcPaySuccess'})
                    }
                })
            }
        },
        mounted(){
            setTimeout(() => {
            //图片logo
            $("#container2").erweima({
                mode: 4,
                mSize:30,//设置大了扫描不到
                image: $("#imgLogo")[0],
                text:`http://47.106.148.205:8899/site/validate/pay/alipay/${this.$route.params.orderId}`
            });

            }, 200);
        },
        beforeDestroy(){
            clearInterval(this.interval)
        }
    }
</script>