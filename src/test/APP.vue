<template>
  <div id="app">
    <aPage ></aPage>
    <bPage ></bPage>
  </div>
</template>

<script>

import aPage from './a.vue'
import bPage from './b.vue'

export default {
  data () {
    return {
      
    }
  },
  name: 'app',
  components: {
    aPage,
    bPage
  },
  methods: {
    
  }
}
</script>

<style>
</style>