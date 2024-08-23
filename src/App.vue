<script setup lang="ts">
import InputLink from "../src/components/InputLink.vue";
// import DataTimePicker from "./components/DataTimePicker.vue";
// import MultiSelect from "./components/MultiSelect.vue";
// import TextInCell from "./components/TextInCell.vue";

</script>

<template>
  <div class="container">
    <InputLink></InputLink>
  <!--<MultiSelect></MultiSelect>-->
  <!--  <TextInCell></TextInCell>-->
  <!--  <DataTimePicker></DataTimePicker>-->
  </div>
</template>

<style scoped>


.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-color: #01628524;
  margin: 0;
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
