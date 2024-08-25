<script setup lang="ts">
import NavBar from "./components/UI/NavBar.vue";
</script>

<template>
  <NavBar></NavBar>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #01628524;
  margin: 60px 0 0;
  padding: 0;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
