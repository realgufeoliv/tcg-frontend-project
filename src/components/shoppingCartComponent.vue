<template>
  <div class="">
    <q-btn
      push
      flat
      dense
      round
      class="q-ml-xs"
      icon="shopping_cart"
      size="1em"
      @click="openDialogPopUp()"
    >
      <q-badge v-if="itensQuantity.count > 0" color="red" floating>{{
        itensQuantity.count
      }}</q-badge>
    </q-btn>
    <q-dialog
      v-model="dialogPopUp"
      position="right"
      :v-if="dialogPopUp"
      class=""
      :auto-close="false"
    >
      <q-card class="bg-white cardStyle q-mt-lg">
        <q-card-section class="bg-grey-5">
          <div
            class="no-wrap row justify-center self-center items-center"
            style="height: 18px"
          >
            <q-btn icon="close" flat round dense v-close-popup />
            <q-space />
            <span class="titleStyle">
              Seu Carrinho ({{ itensQuantity.count }} itens)</span
            >
            <q-space />
          </div>
        </q-card-section>
        <q-card-section>
          <div :v-model="itensQuantity.count" v-if="itensQuantity.count == 0">
            <div class="text-center emptyShippingCart q-ml-lg">
              SEU CARRINHO<q-space /> ESTÁ VAZIO
            </div>
            <div
              class="text-weight-regular q-mt-md text-center q-ml-lg text-grey-9"
            >
              Navegue pelas categorias da loja ou faça uma busca pelo seu
              produto.
            </div>
          </div>
          <div v-if="itensQuantity.count > 0" class="q-my-sm">
            <div class="row justify-center q-my-sm">
              <shopping-cart-card-component
                class="col-12 q-my-sm"
                v-for="(item, i) in numbers"
                :key="i"
                :index="i"
                @deleteElement="deleteElement"
              />
            </div>

            <div class="q-mt-md">
              <q-separator></q-separator>
              <div class="q-pa-sm">SUBTOTAL</div>
              <q-separator></q-separator>
            </div>
          </div>
          <div class="row justify-center q-mt-md q-ml-md">
            <q-btn
              rounded
              size="18px"
              outline
              label="Continuar Comprando"
              v-close-popup
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { itensQuantity } from "./../shared/helpers/itensQuantity.js";
import shoppingCartCardComponent from "./shoppingCartCardComponent.vue";
export default defineComponent({
  name: "shoppingCartComponent",
  components: { shoppingCartCardComponent },

  setup() {
    const numbers = ref([1, 2, 3, 4, 5]);
    const dialogPopUp = ref(false);
    const openDialogPopUp = () => (dialogPopUp.value = !dialogPopUp.value);
    const deleteElement = (item) => {
      numbers.value.splice(item, 1);
    };
    return {
      numbers,
      itensQuantity,
      dialogPopUp,
      openDialogPopUp,
      deleteElement,
    };
  },
});
</script>
<style scoped>
.cardStyle {
  height: 100%;
  width: 400px;
}
.titleStyle {
  font-size: 17px;
}
.emptyShippingCart {
  font-size: 25px;
}
</style>
