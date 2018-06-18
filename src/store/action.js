export const addGoods = ({ dispatch }, payload) => {
    dispatch('ADD_GOODS', payload)
  }
  
  export const updateGoods = ({ dispatch },  payload) => {
    dispatch('UPDATE_GOODS',  payload)
  }

  export const deleteGoodsById = ({ dispatch },  payload) => {
    dispatch('DELETE_GOODSBYID',  payload)
  }
  

