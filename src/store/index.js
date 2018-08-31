import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters.js'
import * as actions from './actions.js'
import * as mutations from './mutations.js'
import cars from '../source/data.js'
import {getLocalStorage} from "../utils/utils";

Vue.use(Vuex);

const state = {
    cars: getLocalStorage('cars'),
    filters: getLocalStorage('filters'),
    path: getLocalStorage('path')
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});