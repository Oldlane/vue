import * as types from './types'

export default {
    [types.VIEW_NAV]:(state,payload)=>{state.bNav=payload},
    [types.VIEW_FOOT]:(state,payload)=>{state.bFoot=payload},
    [types.VIEW_LOADING]:(state,payload)=>{state.bLoading=payload},

    [types.UPDATE_HOME]:(state,payload)=>{state.home=payload},
    [types.UPDATE_FOLLOW]:(state,payload)=>{state.follow=payload},
    [types.UPDATE_COLUMN]:(state,payload)=>{state.column=payload},
    [types.UPDATE_BANNER]:(state,payload)=>{state.banner=payload},
    [types.UPDATE_DETAIL]:(state,payload)=>{state.detail=payload},
    [types.UPDATE_USER]:(state,payload)=>{state.user=payload}
}