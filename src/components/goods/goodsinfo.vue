<template>
    <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="/goods.html">购物商城</a> &gt;
                <a href="/goods/42/1.html">商品详情</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <div class="left-925">
                        <div class="goods-box clearfix">
                            <div class="pic-box">
                                <div class="magnifier" id="magnifier1">
                                    <div class="magnifier-container">
                                        <div class="images-cover"></div>
                                        <!--当前图片显示容器-->
                                        <div class="move-view"></div>
                                        <!--跟随鼠标移动的盒子-->
                                    </div>
                                    <div class="magnifier-assembly">
                                        <div class="magnifier-btn">
                                            <span class="magnifier-btn-left">&lt;</span>
                                            <span class="magnifier-btn-right">&gt;</span>
                                        </div>
                                        <!--按钮组-->
                                        <div class="magnifier-line">
                                            <ul class="clearfix animation03">
                                                <li v-for="item in goods.imglist" :key="item.id">
                                                    <div class="small-img">
                                                        <img :src="item.thumb_path" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <!--缩略图-->
                                    </div>
                                    <div class="magnifier-view"></div>
                                    <!--经过放大的图片显示容器-->
                                </div>
                            </div>
                            <div class="goods-spec" v-if="goods.goodsinfo">
                                <h1>{{goods.goodsinfo.title}}</h1>
                                <p class="subtitle">{{goods.goodsinfo.sub_title}}</p>
                                <div class="spec-box">
                                    <dl>
                                        <dt>货号</dt>
                                        <dd id="commodityGoodsNo">{{goods.goodsinfo.goods_no}}</dd>
                                    </dl>
                                    <dl>
                                        <dt>市场价</dt>
                                        <dd>
                                            <s id="commodityMarketPrice">¥{{goods.goodsinfo.market_price}}</s>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>销售价</dt>
                                        <dd>
                                            <em id="commoditySellPrice" class="price">¥{{goods.goodsinfo.sell_price}}</em>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="spec-box">
                                    <dl>
                                        <dt>购买数量</dt>
                                        <dd>
                                            <div class="stock-box">
                                                <el-input-number size="small" v-model="goodsCount" :min="1" :max="goods.goodsinfo.stock_quantity"></el-input-number>
                                            </div>
                                            <span class="stock-txt">
                                                库存
                                                <em id="commodityStockNum">{{goods.goodsinfo.stock_quantity}}</em>件
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <div id="buyButton" class="btn-buy">
                                                <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                                                <button ref="addToShopCartRef" @click="addToShopCart" class="add">加入购物车</button>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div id="goodsTabs" class="goods-tab bg-wrap">
                            <Affix>
                                <div id="tabHead" class="tab-head" style="position: static; top: 517px; width: 925px;">
                                    <ul>
                                        <li>
                                            <a @click="isShowComment=false" href="javascript:;" :class={selected:!isShowComment}>商品介绍</a>
                                        </li>
                                        <li>
                                            <a @click="isShowComment=true" href="javascript:;" :class={selected:isShowComment}>商品评论</a>
                                        </li>
                                    </ul>
                                </div>
                            </Affix>
                            <div v-if="goods.goodsinfo" v-show="!isShowComment" class="tab-content entry" style="display: block;">
                                <p v-html="goods.goodsinfo.content"></p>
                            </div>
                            <div v-show="isShowComment" class="tab-content" style="display: block;">
                                <div class="comment-box">
                                    <div id="commentForm" name="commentForm" class="form-box">
                                        <div class="avatar-box">
                                            <i class="iconfont icon-user-full"></i>
                                        </div>
                                        <div class="conn-box">
                                            <div class="editor">
                                                <textarea ref="commentRef" id="txtContent" name="txtContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                                                <span class="Validform_checktip"></span>
                                            </div>
                                            <div class="subcon">
                                                <input @click="postComment" id="btnSubmit" name="submit" type="submit" value="提交评论" class="submit">
                                                <span class="Validform_checktip"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul id="commentList" class="list-box">
                                        <p v-if="goodsComment.message" v-show="goodsComment.message.length==0" style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);">暂无评论，快来抢沙发吧！</p>
                                        <li v-for="item in goodsComment.message">
                                            <div class="avatar-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </div>
                                            <div class="inner-box">
                                                <div class="info">
                                                    <span>{{item.user_name}}</span>
                                                    <span>{{item.add_time | dateFmt('YYYY-MM-DD HH:mm:ss')}}</span>
                                                </div>
                                                <p>{{item.content}}</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div v-if="goodsComment.totalcount>0" class="page-box" style="margin: 5px 0px 0px 62px;">
                                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageIndex" :page-sizes="[1, 3, 10, 20]"
                                            :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="goodsComment.totalcount">
                                        </el-pagination>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="left-220">
                        <div class="bg-wrap nobg">
                            <div class="sidebar-box">
                                <h4>推荐商品</h4>
                                <ul class="side-img-list">
                                    <li v-for="item in goods.hotgoodslist" :key="item.id">
                                        <div class="img-box">
                                            <router-link :to="'/goodsinfo/'+item.id" class="">
                                                <img :src="item.img_url">
                                            </router-link>
                                        </div>
                                        <div class="txt-box">
                                            <router-link :to="'/goodsinfo/'+item.id" class="">{{item.title}}</router-link>
                                            <span>{{item.add_time | dateFmt("YYYY-MM-DD")}}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 动画的那个div -->
        <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
            <div class="animateImg" v-show="isShowImage" ref="animateImgRef" v-if="goods.imglist">
                <img width="100%" height="100%" :src="goods.imglist[0].thumb_path" alt="">
            </div>
        </transition>
    </div>
</template>

<style scoped>
    .animateImg {
        position: absolute;
        width: 40px;
        height: 40px;
        left: 30px;
        top: 100px;
        transition: all 0.8s;
    }

    @import "../../statics/site/js/jqueryplugins/jqimgzoom/css/magnifier.css";
</style>

<script>
    import "../../statics/site/js/jqueryplugins/jqimgzoom/js/magnifier.js"
import axios from "axios";
    //按需导入iview的图钉组件
    import { Affix } from 'iview';

    export default {
        components: {
            Affix
        },
        data() {
            return {
                goods: {}, //商品数据
                goodsCount: 1, //商品数量
                isShowComment: false,//是否显示商品评论
                pageIndex: 1,//评论分页时候的页码，默认值是1
                pageSize: 3,//分页时候的页容量
                goodsComment: {},//商品评论
                addToShopCartRefOffset: null,//加入购物车偏移量的值
                shopCartOffset: null,//根组件购物车的偏移量的值
                isShowImage: false//是否显示被动画的元素
            }
        },
        beforeCreate(){
            console.log("-goodsinfo--beforeCreate----")
        },
        created() {
            console.log("-goodsinfo--created----")
            //加载商品信息
            this.getGoodsInfoData()
            //加载商品的评论
            this.getGoodsCommentData()
        },
        beforeMount(){
            console.log("-goodsinfo--beforeMount----")
        },
        mounted() {
            console.log("-goodsinfo--mounted")
            setTimeout(() => {
                //获取加入购物车按钮的偏移量
                this.addToShopCartRefOffset = $(this.$refs.addToShopCartRef).offset()
                //获取根组件购物车的偏移量
                this.shopCartOffset = $("#shopCartId").offset()

                //赋值给我们被动画的那个div
                $(this.$refs.animateImgRef).offset({ 'left': this.addToShopCartRefOffset.left, 'top': this.addToShopCartRefOffset.top })
            }, 200);
        },
        beforeUpdate(){
            console.log("-goodsinfo--beforeUpdate")
        },
        updated() {
            console.log("-goodsinfo--updated--")
            setTimeout(() => {
                $('#magnifier1').imgzoon({ magnifier: '#magnifier1' });
            }, 200);
        },
        beforeDestroy(){
            console.log("-goodsinfo--beforeDestroy--")
        },
        destroyed(){
            console.log("-goodsinfo--destroyed--")
        },
        watch: {
            $route: function (newValue) {
                //重置商品数量为1
                this.goodsCount = 1
                //重新加载商品信息
                this.getGoodsInfoData()
                //重新加载商品的评论
                this.getGoodsCommentData()
            }
        },
        methods: {
            //获取商品详情数据
            getGoodsInfoData() {
                const url = `site/goods/getgoodsinfo/${this.$route.params.goodsId}`

                this.$axios.get(url).then(res => {
                    console.log(res)
                    this.goods = res.data.message
                }, err => {
                    console.log(err)
                })
            },
            //分页获取商品对应的评论信息
            getGoodsCommentData() {
                const url = `site/comment/getbypage/goods/${this.$route.params.goodsId}?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`

                this.$axios.get(url).then(res => {
                    this.goodsComment = res.data
                })
            },
            //分页相关的处理函数
            handleCurrentChange(pageIndex) {
                this.pageIndex = pageIndex

                this.getGoodsCommentData()
            },
            handleSizeChange(pageSize) {
                this.pageSize = pageSize
                this.pageIndex = 1

                this.getGoodsCommentData()
            },
            //提交评论
            postComment() {
                const commenttxt = this.$refs.commentRef.value

                if (commenttxt.trim().length <= 0) {
                    this.$message({
                        message: '请输入评论内容!',
                        type: 'warning'
                    });
                    return
                }

                const url = `site/validate/comment/post/goods/${this.$route.params.goodsId}`

                this.$axios.post(url, { commenttxt }).then(res => {
                    if (res.data.status != 0) {//评论失败
                        this.$message.error('评论失败!');
                    }

                    //1.给用户提示
                    this.$message({
                        message: '评论成功！',
                        type: 'success'
                    });

                    //2.清空内容
                    this.$refs.commentRef.value = ''

                    //3.重新加载第一页的数据
                    this.pageIndex = 1
                    this.getGoodsCommentData()
                })
            },
            //加入购物车
            addToShopCart(){
                this.isShowImage = true

                //准备好载荷
                const goods = {
                    goodsId:this.$route.params.goodsId,
                    count:this.goodsCount
                }

                //调用Vuex的mutations方法
                this.$store.commit('ADD_GOODS',goods)
            },
            //动画相关，进入的动画
            beforeEnter: function (el) {
                // 设置动画的起始位置
                el.style.left = `${this.addToShopCartRefOffset.left}px`
                el.style.top = `${this.addToShopCartRefOffset.top}px`
                el.style.transform = 'scale(1)'
            },
            // 此回调函数是可选项的设置
            // 与 CSS 结合时使用
            enter: function (el, done) {
                //刷新动画帧
                el.offsetWidth

                el.style.transform = 'scale(0.5)'

                //设置进入阶段结束的位置
                el.style.left = `${this.shopCartOffset.left}px`
                el.style.top = `${this.shopCartOffset.top}px`
                // ...
                done()
            },
            afterEnter: function (el) {
                // ...
                this.isShowImage = false
            },
        }
    }
</script>