<template>
  <div class="container">
    <InputText
        v-if="title == '' || isEditInput"
        type="text"
        v-model="url"
        @keydown.enter="fetchTitle"
        @blur="fetchTitle"
        placeholder="https://"
    ></InputText>
    <p v-else>{{title}}</p>
    <EditComponent v-if="!isEditInput" @edit="isEditInput = !isEditInput"></EditComponent>
  </div>
{{ isEditInput }}
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import InputText from 'primevue/inputtext';
import axios from 'axios';
import EditComponent from "./UI/EditComponent.vue";


export default  defineComponent({
  components: {
    InputText,
    EditComponent
  },
  setup() {
    const url = ref<string>('');
    const title = ref<string | null>(null);
    const isEditInput= ref<boolean>(false);

    const fetchTitle = async () => {
      if (url.value) {
        try {
          const proxyUrl = 'https://api.allorigins.win/get?url=';
          const response = await axios.get(proxyUrl + encodeURIComponent(url.value));
          if (!response.data) {
            throw new Error(`Network response: ${response.status}`);
          }

          const html = response.data.content();

          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          title.value = doc.querySelector('title')?.text || 'No Title Found';
        } catch (error) {
          title.value = 'Error fetching title';
        }
        isEditInput.value = false;
      }
    };
    return {
      url,
      title,
      fetchTitle,
      isEditInput
    }
  }
})

</script>

<style>
.container {
  display: flex;
  flex-direction: column;
}

</style>