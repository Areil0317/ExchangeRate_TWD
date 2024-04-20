<template>
  <div id="app">
    <title-bar></title-bar>
    <router-view/>
  </div>
</template>

<script>
import TitleBar from './components/TitleBar.vue';
export default {
  name: 'App',
  components: {
    'title-bar': TitleBar
  }
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
