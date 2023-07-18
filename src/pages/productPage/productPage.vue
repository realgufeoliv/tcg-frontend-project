<template>
  <pages-title-component :title="'Charizard'" />
  <div class="row justify-center">
    <cards-info-component />
  </div>
  <div>
    <all-offers-component />
  </div>
  <div class="q-mb-xl"></div>
  <div class="q-mb-xl"></div>
</template>
<script>
import { defineComponent } from "vue";
import pagesTitleComponent from "../../components/pagesTitleComponent.vue";
import allOffersComponent from "./components/allOffersComponent.vue";
import cardsInfoComponent from "./components/cardInfosComponent/cardInfosComponent.vue";
export default defineComponent({
  name: "productPageComponent",
  components: {
    pagesTitleComponent,
    cardsInfoComponent,
    allOffersComponent,
  },

  setup() {},
});
</script>
