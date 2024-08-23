<script lang="ts">
import { defineComponent, ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default defineComponent({
  components: {
    DataTable,
    Column
  },
  props: {
    text: String
  },
  setup(props) {
    const text = `[13:36:53] Расчетное время: 9 мин[13:36:58] Открыть клапан откачки К1[13:36:58] Включить вакуумный насос[13:36:58] Закрыть клапан К5[13:36:58] Закрыть клапан дистилляции К2[13:36:58] Ожидание: 8 с[13:37:06] Заливка 2.2мл. в испаритель[13:37:06] Заданно 26.50602409638554 шагов[13:37:09] Заливка перекиси завершена[13:37:09] Открыть клапан дистилляции К2[13:42:09] Включить нагрев испарителя[13:42:09] Закрыть клапан дистилляции К2[13:42:09] конечное давление1.0960040758227925 торр[13:42:09] Выпаривание через К2[13:42:09] Выпаривание длилось5 мин[13:42:09] Откачка до 1 торр[13:42:15] Закрыть клапан откачки К1[13:43:09] Открыть клапан откачки К1[13:43:14] Аппаратное смещение 0 денсит. = -0.313683180809021[13:43:14] Закрыть клапан дистилляции К2`;
    const regex = /\[\d{2}:\d{2}:\d{2}\]/g;
    const dataArray = text.split(regex).filter(Boolean);
    const result = text.match(regex).map((time, index) => time + dataArray[index]).concat(text.match(regex).pop() + dataArray.pop());
    const tableData = result.map(item => ({ message: item.trim() }));
    return {
      tableData
    }
  }
})

</script>

<template>

  <DataTable :value="tableData">
    <Column field="message" header="Message" />
  </DataTable>

</template>

<style scoped>

</style>