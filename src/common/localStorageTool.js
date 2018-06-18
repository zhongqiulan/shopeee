const KEY = "goodsInfo"

/**
 * 从当前的localStorage中获取存在的商品信息
 * {id1:数量,id2:数量,...}
 */
const getLocalGoods = ()=>{
    return JSON.parse(localStorage.getItem(KEY) || '{}')
    
}

/**
 * 获取本地最新的商品总数
 */
const getLocalGoodsCount = () => {
    //1.获取本地已经有的商品信息
    //localGoods === {"87":5,"88":1,"89":2,"91":3}
    const localGoods = getLocalGoods()

    let totalCount = 0

    for(const key in localGoods){
        totalCount+=localGoods[key]
    }

    return totalCount
}

/**
 * 将传入的goods对象 {goodsId:"91",count:3}保存到本地的localStorage中
 * 并且保存完毕之后，要将现在最新的总数返回
 */
const addLocalGoods = (goods) => {
    //1.获取本地已经有的商品信息
    //localGoods === {"87":5,"88":1,"89":2,"91":3}
    const localGoods = getLocalGoods()

    //2.我就判断一下，我们新传入的goods中的goodsId，是否在localGoods
    //中，如果没有，在localStorage加一个，如果存在就把它数量相加
    if(localGoods[goods.goodsId]){
        localGoods[goods.goodsId]+=goods.count
    }else{
        localGoods[goods.goodsId]=goods.count
    }

    //3.保存到本地
    localStorage.setItem(KEY,JSON.stringify(localGoods))

    //4.把本地最新的之返回回去(将来返回给Vuex)
    return getLocalGoodsCount()
}

/**
 * 更新本地localStorage中存在的商品的数量
 */
const updateLocalGoods = (goods) => {
    //1.获取本地已经有的商品信息
    //localGoods === {"87":5,"88":1,"89":2,"91":3}
    const localGoods = getLocalGoods()

    //2.直接更新goods.goodsId对象商品的数量
    localGoods[goods.goodsId] = goods.count

    //3.保存到本地
    localStorage.setItem(KEY,JSON.stringify(localGoods))

    //4.把本地最新的之返回回去(将来返回给Vuex)
    return getLocalGoodsCount()
}

/**
 * 根据goodsId删除本地的商品
 */
const deleteLocalGoodsById = (goodsId) => {
    //1.获取本地已经有的商品信息
    //localGoods === {"87":5,"88":1,"89":2,"91":3}
    const localGoods = getLocalGoods()

    //2.删除对象的属性
    delete localGoods[goodsId]

    //3.保存到本地
    localStorage.setItem(KEY,JSON.stringify(localGoods))

    //4.把本地最新的之返回回去(将来返回给Vuex)
    return getLocalGoodsCount()
}

//按需导出
export {addLocalGoods,getLocalGoodsCount,getLocalGoods,updateLocalGoods,deleteLocalGoodsById}

 /** 
  * 和上面是等价的
 export const addLocalGoods  = (goods) => {

}
*/