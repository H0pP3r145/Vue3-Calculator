import {createStore} from 'vuex'
import MainStore from "@/store/MainStore";

export default createStore({
    modules: {
        store: MainStore
    }
})