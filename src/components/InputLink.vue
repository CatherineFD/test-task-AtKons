<template>
  <div class="wrapper">
    <div>
      <InputEditLink :link="url" :title="title" @updateLink="updateLink"></InputEditLink>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import InputText from 'primevue/inputtext';
import axios from 'axios';
import EditComponent from "./UI/EditComponent.vue";
import InputEditLink from "../components/UI/InputEditLink.vue";

export default  defineComponent({
  components: {
    InputText,
    EditComponent,
    InputEditLink
  },
  methods: {
    updateLink(link: string) {
      this.url = link;
      this.fetchTitle();
    }
  },
  setup() {
    const url = ref<string>('');
    const title = ref<string | null>(null);

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
      }
    };
    return {
      url,
      title,
      fetchTitle
    }
  }
})

</script>

<style>
.wrapper {
  position: relative;
  width: 100%;
  margin: 20px auto 0;
  display: flex;
  justify-content: center;
}

</style>