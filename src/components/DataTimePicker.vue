<script lang="ts">
import Calendar from 'primevue/calendar';
import {computed, defineComponent, ref} from "vue";
export default defineComponent
({
  components: {
    Calendar
  },
  setup() {
    const date = ref<Date | null>(null);

    const formattedTime = computed(() => {
      if (!date.value) return '';
      const hours = date.value.getHours().toString().padStart(2, '0');
      const minutes = date.value.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    });

    const clear = () => {
      date.value = null;
    };

    const setCurrentDateTime = () => {
      date.value = new Date();
    }

    return {date, formattedTime, clear, setCurrentDateTime}
  }
})
</script>

<template>
  <div class="wrapper">
    <p>Время: {{formattedTime}}</p>
    <Calendar
        class="date_picker"
        v-model="date"
        date-format="HH:mm"
        show-icon
        icon-display="input"
        time-only
    />


    <div class="block__button">
      <button @click="setCurrentDateTime">Сегодня</button>

      <button @click="clear()">Очистить</button>
    </div>

  </div>

</template>

<style scoped>
@import 'primeicons/primeicons.css';

.wrapper {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  }

.date_picker {
  min-width: 100px;
  margin-bottom: 200px;
  width: 100%;
}

.block__button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


</style>