<template>
  <q-card class="bg-grey-7 q-pa-sm"
    ><div class="row no-wrap">
      <div>
        <q-img
          src="https://images.pokemontcg.io/base1/4.png"
          height="150px"
          width="110px"
        >
        </q-img>
      </div>
      <div class="q-ml-md text-white q-mt-xs col-6" style="max-width: 180px">
        <span style="font-size: 15pt" class="">{{
          resizeShoppingCartCardName("Charizard")
        }}</span>
        <div class="q-mt-md">
          <q-space />Quantidade: <span class="text-weight-bold"> 1</span>
          <q-space />Vendedor:
          <span class="sellerTextStyle text-weight-bold text-indigo-7"
            >Francisco</span
          ><q-space />
          Condição da carta:
          <q-badge color="green-9" text-color="white" label="NM"></q-badge>
          <q-space />Preço: <span class="text-weight-bold">R$100</span>
        </div>
      </div>
      <div class="col-1 closeButtonStyle">
        <q-space></q-space>
        <q-btn
          icon="delete"
          color="red"
          flat
          round
          dense
          @click.prevent="$emit('deleteElement', index)"
        />
      </div></div
  ></q-card>
</template>
<script>
import { defineComponent } from "vue";
import { resizeShoppingCartCardName } from "./../shared/helpers/stringManipulationsHelpers.js";
export default defineComponent({
  name: "shoppingCartCardComponent",
  props: {
    index: {
      type: Number,
    },
  },
  emits: ["deleteElement"],

  setup() {
    return { resizeShoppingCartCardName };
  },
});
</script>
<style scoped>
.sellerTextStyle {
  cursor: pointer;
}
.sellerTextStyle:hover {
  text-decoration: underline;
}
.closeButtonStyle {
  margin-left: 12px;
}
</style>
