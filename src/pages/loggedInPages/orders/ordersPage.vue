<template>
  <pages-title-component :title="'Meus Pedidos'" :name="'list_alt'" />
</template>
<script>
import { defineComponent } from "vue";
import pagesTitleComponent from "../../../components/pagesTitleComponent.vue";
export default defineComponent({
  components: { pagesTitleComponent },
  setup() {},
});
</script>
