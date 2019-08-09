import axios from '../plugins/axios'
import * as types from './types'

export default {
    [types.VIEW_NAV]:({commit,state},payload)=>commit(types.VIEW_NAV,payload),
    [types.VIEW_FOOT]:({commit,state},payload)=>commit(types.VIEW_FOOT,payload),
    [types.VIEW_LOADING]:({commit,state},payload)=>commit(types.VIEW_LOADING,payload),

    [types.UPDATE_HOME]:({commit,state},payload)=>{
        axios({
            url:'/api/home',
            params:{_page:1,_limit:10}
        }).then(
            res=>commit(types.UPDATE_HOME,res.data.data)
        )
    },
    [types.UPDATE_FOLLOW]:({commit,state},payload)=>{
        axios({
            url:'/api/follow',
            params:{_page:1,_limit:8}
        }).then(
            res=>commit(types.UPDATE_FOLLOW,res.data.data)
        )
    },
    [types.UPDATE_COLUMN]:({commit,state},payload)=>{
        axios({
            url:'/api/column',
            params:{_page:1,_limit:6}
        }).then(
            res=>commit(types.UPDATE_COLUMN,res.data.data)
        )
    },
    [types.UPDATE_BANNER]:({commit,state},payload)=>{
        axios({
            url:'/api/banner',
            params:{_page:1,_limit:3}
        }).then(
            res=>commit(types.UPDATE_BANNER,res.data.data)
        )
    },
    [types.UPDATE_DETAIL]:({commit,state},{type,payload})=>{
        // console.log('UPDATE_DETAIL',payload) 
        axios({
            url:`/api/${payload.dataname}/${payload.id}`,
            
        }).then(
            res=>commit(types.UPDATE_DETAIL,res.data.data)
        )
    },
    [types.UPDATE_USER]:async ({commit,state},payload)=>{
        let res = await axios({url:'/api/user'})
        commit('UPDATE_USER',res.data)
    }
}