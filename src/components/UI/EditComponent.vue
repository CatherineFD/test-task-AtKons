<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent
({
  name: "EditComponent",
  setup() {
    return {}
  }
})

</script>

<template>
  <div @click="$emit('edit')">
    <i class="pi pi-pencil"></i>
  </div>
</template>

<style scoped>
.pi {
  transition: 0.1s all ease-in;
}

.pi:hover {
  transform: scale(1.1);
}
</style>