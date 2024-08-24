<script lang="ts">

import {defineComponent, ref, watch} from "vue";
import EditComponent from "./EditComponent.vue";

export default defineComponent
({
  props: {
    linkProps: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
  },
  components: {
    EditComponent
  },
  name: "InputEditLink",
  setup(props, {emit}) {
    const isEditInput= ref<boolean>(false);
    const link = ref(props.linkProps);

    watch(() => props.linkProps, (newValue) => {
      link.value = newValue;
    });

    const fetchTitle = () => {
      isEditInput.value = true;
      emit('updateLink', link.value);
    }


    return {isEditInput, link, fetchTitle}
  }
})

</script>

<template>
  <div>

    <input
        v-if="!isEditInput"
        type="text"
        id="link"
        v-model="link"
        placeholder="https://"
        @keydown.enter="fetchTitle"
        @blur="fetchTitle"
    >
    <div v-else class="block__title">
      <p>{{title}}</p>

      <EditComponent v-if="isEditInput" @edit="isEditInput = !isEditInput"></EditComponent>
    </div>

  </div>

</template>

<style scoped>

input {
  background: #ffffff;
  border-radius: 6px;
  padding: 3px 10px;
  border:none;
  font-size: 20px;
  font-weight: 700;
  max-width: 200px;
  margin-right: 10px;
}

input:focus {
  border: 1px solid #016285e6;
  outline: none;
}

.block__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.block__title p {
  margin-right: 10px;
}

</style>