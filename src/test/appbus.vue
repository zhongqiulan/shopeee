<template>  
  <div id="app">  
    <img src="../statics/site/images/beauty.jpg">  
    <!--<router-view/>-->  
    <car></car>  
    <gas-station></gas-station>  
  </div>  
</template>  
  
<script>  
import Car  from "./car.vue"  
import GasStation  from "./gasStation.vue"  
export default {  
  name: 'App',  
  components:{Car,GasStation}  
}  
</script>  