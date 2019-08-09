<template>
    <div class="follow">
        <!-- <List :list='$store.state.follow' dataname='follow'></List> -->
        <List :list='follow' dataname='follow'></List>
        
    </div>
</template>
<script>
import List from '@/components/List'

import {mapGetters} from 'vuex'
import * as types from '../store/types'

export default {
    name:'follow',
    components:{List},
    // data(){
    //     return {
    //         list:[]
    //     }
    // },
    mounted(){
        this.$store.dispatch(types.UPDATE_FOLLOW)
        // axios({
        //     url:'/api/follow',
        //     params:{_page:1,_limit:3}
        // }).then(
        //     res => this.list=res.data.data
        // )
    },
    computed:mapGetters(['follow'])
}
</script>


