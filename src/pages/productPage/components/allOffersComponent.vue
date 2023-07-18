<template>
  <div class="row justify-center">
    <q-card
      v-if="$q.screen.gt.xs"
      class="bg-grey-7"
      flat
      square
      :class="$q.screen.gt.sm ? 'cardStyle' : 'mobileCardStyle'"
    >
      <div
        class="row no-wrap q-ml-xl q-pa-sm text-white text-weight-bold justify-between"
        style="font-size: 15px"
      >
        <div>Vendedor</div>
        <q-separator color="white" vertical></q-separator>
        <div>Condição do Produto</div>
        <q-separator color="white" vertical></q-separator>

        <div class="text-center" style="width: 25%">
          Preço do Produto/Quantidade
        </div>
        <div></div>
      </div>
    </q-card>
    <offer-card-component />
    <offer-card-component />
    <offer-card-component />
    <offer-card-component />
    <offer-card-component />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import offerCardComponent from "./offerCardComponent.vue";
export default defineComponent({
  name: "allOffersComponent",
  components: { offerCardComponent },
  setup() {
    return {};
  },
});
</script>
<style scoped>
.mobileCardStyle {
  max-width: 100%;
  min-width: 100%;
}
.cardStyle {
  height: 100%;
  width: 86%;
}
</style>
