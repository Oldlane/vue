<template>
<div class="newsList">
    <ul>
        <router-link 
        v-for='item of column'
        :key='item._id'
        tag='li' 
        :to="{name:'detail',params:{id:item._id},query:{dataname:'column'}}"
        >
          <a href="javascript:;">
            <h2>{{item.title}}</h2>
            <p>{{item.des}}</p>
          </a>
        </router-link>
        
        
    </ul>
</div>
</template>
<script>
import {mapState} from 'vuex'
import {UPDATE_COLUMN} from '../store/types'
export default {
  // data(){
  //   return {
  //     list:[]
  //   }
  // },
  computed:mapState(['column']), //跳过getters直接向state拿数据
  mounted(){
    // this.$store.dispatch({type:'xx',payload:'xx'})
    this.$store.dispatch({type:UPDATE_COLUMN})

    // axios({
    //   url:'/api/column'
    // }).then(
    //   res => this.list = res.data.data
    // )
  }
}
</script>

<style scoped>
.content .newsList{width:6.4rem; margin:0 auto;}
.newsList ul{ padding:0 0.4rem;}
.newsList ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
.newsList ul li h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
.newsList ul li p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
.newsList{clear: both;margin-bottom:1rem;margin-top:.7rem;}
</style>

