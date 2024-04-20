import Vue from 'vue';
import Router from 'vue-router';
import ExchangeRates from '../components/ExchangeRates.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/exchange-rate'
    },
    {
      path: '/exchange-rate',
      name: 'exchange-rate',
      component: ExchangeRates
    }
  ]
});
