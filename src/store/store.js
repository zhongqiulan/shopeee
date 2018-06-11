import Vue from 'vue' //相当于 var Vue = require('vue')
import Vuex from 'vuex'

//使用基于Vue的第三方插件
Vue.use(Vuex) //Vue.propertype.$store

//Vuex相关的代码
import {
    addLocalGoods,
    getLocalGoodsCount,
    updateLocalGoods,
    deleteLocalGoodsById
} from '../common/localStorageTool'

const store = new Vuex.Store({
    state: {//全局需要操作的数据
        buyCount: 0
    },
    getters: {
        /**
         * 参数是固定的，代表要操作数据的state
         */
        getBuyCount(state) {//相当于计算属性
            if (state.buyCount > 0) {
                return state.buyCount
            } else {
                return getLocalGoodsCount()
            }
        }
    },
    mutations: {
        /**
         * payload === {goodsId:87,count:2}
         * 新增
         */
        addGoods(state, payload) {
            state.buyCount = addLocalGoods(payload)
        },
        /**
         * payload === {goodsId:87,count:2}
         * 修改
         */
        updateGoods(state, payload) {
            state.buyCount = updateLocalGoods(payload)
        },
        /**
         * 删除
         * 此次的载荷就是goodsId
         */
        deleteGoodsById(state, goodsId) {
            state.buyCount = deleteLocalGoodsById(goodsId)
        }
    }
})

export {store}