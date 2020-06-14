import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './modules/stock';
import portafolio from './modules/portafolio';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stocks,
    portafolio
  }
});