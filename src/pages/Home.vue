<template>
    <div class="home">
        <Slider :banner='banner'></Slider>
        <List :list='home' dataname='home'></List>
    </div>

</template>

<script>
import Slider from '../components/Slider'
import List from '@/components/List'  //@直接到src目录下

import {mapGetters} from 'vuex'
import * as types from '../store/types'
export default {
    name:"home",
    components:{
        List,Slider
    },
    // data(){
    //     return {
    //         list:[],
    //         banner:"skjflsf"
    //     }
    // },
    mounted(){
        this.$store.dispatch(types.UPDATE_HOME)
        this.$store.dispatch(types.UPDATE_BANNER)


        // axios({
        //     url:'/api/home',
        //     params:{_page:1,_limit:10}
        // }).then(
        //     res => this.list=res.data.data
        // )

        //  axios({
        //     url:'/api/banner',
        //     params:{_page:1,_limit:10}
        // }).then(
        //     res => {this.banner=res.data.data
        //     }
        // )
        
    },
    computed:mapGetters([
        'home','banner'
    ])
}
</script>

