<template>
    <div>
      <h2>Currency Trend for {{ currency }}</h2>
      <line-chart :chart-data="chartData"></line-chart>
    </div>
  </template>
  
  <script>
  import { Line } from 'vue-chartjs';
  
  export default {
    components: {
      LineChart: Line.extend({ props: ['chartData'] })
    },
    props: ['currency'],
    data() {
      return {
        chartData: null
      };
    },
    watch: {
      currency(newVal) {
        this.fetchTrendData(newVal);
      }
    },
    methods: {
      fetchTrendData(currency) {
        // 模擬 API，實際上需要從某處獲取數據
        this.chartData = {
          labels: ['January', 'February', 'March', 'April'],
          datasets: [{
            label: 'TWD to ' + currency,
            backgroundColor: '#f87979',
            data: [40, 39, 35, 36]
          }]
        };
      }
    }
  };
  </script>
  