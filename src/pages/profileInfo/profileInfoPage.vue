<template>
  <div class="q-mb-md">
    <div>
      <info-card-component />
    </div>
    <div>
      <saleProductsComponent />
    </div>
    <div>
      <profile-avaliations id="avaliations" />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import infoCardComponent from "./components/profileInfoComponent/infoCardComponent.vue";
import saleProductsComponent from "./components/saleProductsComponent.vue";
import profileAvaliations from "./components/profileAvaliations.vue";
export default defineComponent({
  components: { infoCardComponent, saleProductsComponent, profileAvaliations },
  setup() {},
});
</script>
