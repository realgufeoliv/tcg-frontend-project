<template>
  <div class="bg-white" style="height: 100%; min-height: 620px">
    <div class="text-h5 text-weight-bold text-grey-10 q-pa-xs">
      <pages-title-component :title="'Transações'" :name="'sync_alt'" />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import pagesTitleComponent from "../../../../components/pagesTitleComponent.vue";

export default defineComponent({
  components: { pagesTitleComponent },
  setup() {},
});
</script>
