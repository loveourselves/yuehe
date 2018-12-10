import vuex from "vuex"
import Vue from "vue"
// import { Store } from "vuex";
Vue.use(vuex)
export default new vuex.Store({
    state:{
        shopCarData:[]
    },
    getters:{
        getShopCarData(state){
            return state.shopCarData
        }
    },
    mutations:{
        add(state,playload){
            for(let i=0;i<state.shopCarData.length;i++){
                if (state.shopCarData[i].type==playload.type) {
                    state.shopCarData[i].count+=playload.count
                    return
                }
            }
            state.shopCarData.push(playload)
        }
    }
})