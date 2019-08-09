<template>
  <div id="app">
    <!-- <Loading v-show='$root.$data.bLoading'></Loading> -->
    <Loading v-show='bLoading'></Loading>
    <!-- <Header v-show='$root.$data.bNav'></Header> -->
    <Header v-show='bNav'></Header>
    <router-view></router-view>
    <!-- <Footer v-show='$root.$data.bFoot'></Footer> -->
    <Footer v-show='bFoot'></Footer>
  </div>
</template>

<script>

import Loading from './components/Loading'
import Header from './components/Header'
import Footer from './components/Footer'

import {mapGetters} from 'vuex'
import * as types from './store/types'
export default {
  name: 'app',
  components: {
   Header,Footer,Loading
  },
  computed:mapGetters(['bNav','bFoot','bLoading']),
  watch:{
    $route:{
      handler({path}){
        if(/home|column|follow/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,true)
          this.$store.dispatch(types.VIEW_FOOT,true)
          // this.$root.$data.bNav=true
          // this.$root.$data.bFoot=true
        }
        if(/user/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false)
          this.$store.dispatch(types.VIEW_FOOT,true)
          // this.$root.$data.bNav=false
          // this.$root.$data.bFoot=true
        }
        if(/login|reg|detail/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false)
          this.$store.dispatch(types.VIEW_FOOT,false)
          // this.$root.$data.bNav=false
          // this.$root.$data.bFoot=false
        }
      },
      immediate:true
    }
  }
}
</script>

<style>

</style>
