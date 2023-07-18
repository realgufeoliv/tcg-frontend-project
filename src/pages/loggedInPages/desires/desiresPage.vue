<template>
  <pages-title-component :title="'Desejados'" :name="'favorite'" />
</template>
<script>
import { defineComponent } from "vue";
import pagesTitleComponent from "../../../components/pagesTitleComponent.vue";
export default defineComponent({
  components: { pagesTitleComponent },
  setup() {},
});
</script>
