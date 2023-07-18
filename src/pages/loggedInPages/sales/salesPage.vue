<template>
  <pages-title-component :title="'Vendas'" :name="'storefront'" />
</template>
<script>
import { defineComponent } from "vue";
import pagesTitleComponent from "../../../components/pagesTitleComponent.vue";
export default defineComponent({
  components: { pagesTitleComponent },
  setup() {},
});
</script>
