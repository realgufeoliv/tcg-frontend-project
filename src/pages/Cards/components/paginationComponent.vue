<template>
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      size="20px"
      v-model="current"
      :max="5"
      input
      color="black"
      :boundary-links="false"
    />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "paginationComponent",
  setup() {
    const maxPages = 5;
    return {
      maxPages,
      current: ref(1),
    };
  },
});
</script>
