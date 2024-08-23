<template>
  <div class="multi-select-wrapper">
    <MultiSelect
        v-model="selectedCities"
        :options="options"
        optionLabel="name"
        placeholder="Выбирете город"
        class="w-full md:w-20rem"
    />
      <button
          v-if="selectedCities.length > 0"
          @click="clearSelection"
          class="clear-button"
      >
        &times;
      </button>

  </div>



</template>

<script lang="ts">
import MultiSelect from 'primevue/multiselect';
import {defineComponent, ref} from "vue";
export default defineComponent
({
  components: {
    MultiSelect
  },

  setup() {
    const selectedCities = ref<object[]>([]);
    const options: object[] = [
      {name: 'Australia', code: 'AU'},
      {name: 'Brazil', code: 'BR'},
      {name: 'China', code: 'CN'},
      {name: 'Egypt', code: 'EG'},
      {name: 'France', code: 'FR'},
      {name: 'Germany', code: 'DE'},
      {name: 'India', code: 'IN'},
      {name: 'Japan', code: 'JP'},
      {name: 'Spain', code: 'ES'},
      {name: 'United States', code: 'US'}
    ];

    const clearSelection = () => {
      selectedCities.value = [];
    };

    return {
      selectedCities,
      options,
      clearSelection
    }
  }
})
</script>

<style scoped>
.multi-select-wrapper {
  position: relative;
  width: 100%;
}

.clear-button {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  top: 40%;
  right: -25px;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #ff4d4f;
  padding: 0;
  margin: 0;
  transition: transform 0.3s ease;
}

.clear-button:hover {
  transform: translateY(-50%) rotate(180deg);
}
</style>