<template>
  <div class="row justify-center">
    <div :class="$q.screen.gt.sm ? 'cardStyle' : 'mobileCardStyle'">
      <pagesTitleComponent
        :separator="false"
        :title="'Avaliações de Francisco'"
        class="q-mb-md q-ml-md"
      />
      <div class="row justify-center">
        <avaliationCardComponent />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import pagesTitleComponent from "../../../components/pagesTitleComponent.vue";
import avaliationCardComponent from "./avaliationCardComponent.vue";
export default defineComponent({
  name: "profileAvaliations",
  components: { pagesTitleComponent, avaliationCardComponent },
  setup() {},
});
</script>
<style scoped>
.cardStyle {
  max-width: 90%;
  min-width: 90%;
}

.mobileCardStyle {
  max-width: 100%;
  min-width: 100%;
}
</style>
