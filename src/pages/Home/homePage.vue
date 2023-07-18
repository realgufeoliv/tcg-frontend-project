<template>
  <carouselComponent class="q-pb-md" />
  <div>
    <bestSellersComponent class="q-mb-lg" />
  </div>

  <div>
    <promotionalProductsComponent class="q-my-lg" />
  </div>
  <div>
    <all-products-component class="q-my-lg" />
  </div>
  <div>
    <howToUseComponent />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import carouselComponent from "./components/carouselComponent.vue";
import bestSellersComponent from "./components/bestSellersComponent.vue";
import promotionalProductsComponent from "./components/promotionalProductsComponent.vue";
import allProductsComponent from "./components/allProductsComponent.vue";
import howToUseComponent from "./components/howToUseComponent.vue";
export default defineComponent({
  name: "IndexPage",
  components: {
    carouselComponent,
    bestSellersComponent,
    promotionalProductsComponent,
    allProductsComponent,
    howToUseComponent,
  },
  setup() {
    const { t } = useI18n();

    return {};
  },
});
</script>
