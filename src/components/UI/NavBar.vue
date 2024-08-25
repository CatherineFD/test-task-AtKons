<script lang="ts">

import {defineComponent} from "vue";
import {useRouter} from 'vue-router';
export default defineComponent({
  setup() {
    const router = useRouter();

    const navigate = (path: string) => {
      router.push(path);
    };

    return {navigate}
  }
})
</script>

<template>
<header class="header">
  <div class="wrapper">
    <button @click="navigate('/input-link')">1. task Input Text</button>
    <button @click="navigate('/data-time-picker')">2. Data Time Picker</button>
    <button @click="navigate('/multi-select')">3. task Multi Select</button>
    <button @click="navigate('/text-in-cell')">4. task Text in cell</button>
    <button @click="navigate('/table-with-search')">5. task Table With Search</button>
  </div>
</header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #016285;
  padding: 0 20px;
  z-index: 100;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
}
</style>