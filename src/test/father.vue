<template>  
    <div id="father">
        <div>父组件的toCity{{toCity}}</div>  
        <train-city @showCityName="updateCity" :sendData="toCity"></train-city>  
    </div>
</template>  
 <script>  
  import trainCity from './train-city'
  export default {  
    name:'father',  
     components: {
        trainCity
    },  
    data () {  
      return {  
        toCity:"北京"  
      }  
    },  
    methods:{  
      updateCity(data){//触发子组件城市选择-选择城市的事件  
        this.toCity = data.cityname;//改变了父组件的值  
        console.log('toCity:'+this.toCity)  
      }  
    }  
  }  
</script> 
<style scoped>
#father {
    margin-top:100px;
}
</style>
