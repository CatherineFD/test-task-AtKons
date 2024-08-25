<script lang="ts">
// import DatePicker from 'primevue/datepicker';
import {computed, defineComponent, ref} from "vue";
export default defineComponent
({
  components: {
    // DatePicker
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

    return {date, formattedTime, clear}
  }
})
</script>

<template>
  <div class="wrapper">
    <p>Время: {{formattedTime}}</p>
<!--    <DatePicker-->
<!--        class="date_picker"-->
<!--        v-model="date"-->
<!--        date-format="HH:mm"-->
<!--        show-icon-->
<!--        icon-display="input"-->
<!--        time-only-->
<!--    />-->

    <button @click="clear()">Очистить</button>
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
  min-height: 100px;
  margin-bottom: 200px;
  width: 100%;
}


</style>