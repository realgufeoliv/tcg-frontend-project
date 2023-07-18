<template>
  <q-btn
    square
    padding="24px 16px"
    class="q-ma-sm"
    size="0.8em"
    color="grey"
    icon="shopping_cart"
    @click="openModal()"
  >
  </q-btn>
  <q-dialog v-model="modal"
    ><q-card class="bg-white cardStyle">
      <q-bar class="bg-black text-white">
        <q-space />
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip>Fechar</q-tooltip>
        </q-btn></q-bar
      >
      <pages-title-component :title="'Charizard'" />

      <q-expansion-item
        header-class="fontSizeExpansionItem text-weight-bolder text-grey-9 q-mx-md"
        v-model="expanded"
        icon="perm_identity"
        label="Informações do vendedor"
        caption=""
      >
        <q-card>
          <q-card-section>
            <div align="center">
              <span class="text-weight-bold text-grey-8"
                >Nome:
                <span class="text-weight-bolder text-grey-9"
                  >Francisco
                </span></span
              ><br />
              <span class="text-weight-bold text-grey-8"
                >Vendas:
                <span class="text-weight-bolder text-grey-9">200 </span></span
              ><br />
              <span class="text-weight-bold text-grey-8"
                >Estado:
                <span class="text-weight-bolder text-grey-9">
                  <q-badge
                    class="q-mr-sm"
                    color="yellow-9"
                    text-color="white"
                    label="SP"
                    ><q-tooltip>São Paulo</q-tooltip></q-badge
                  >
                </span></span
              ><br />
              <span class="text-weight-bold text-grey-8"
                >Reputação:
                <span class="text-weight-bolder text-grey-9">
                  <q-badge
                    class="q-mr-sm"
                    color="green-9"
                    text-color="white"
                    label="Ótima"
                  ></q-badge> </span></span
              ><br />
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        header-class="fontSizeExpansionItem text-weight-bolder text-grey-9 q-mx-md"
        v-model="expanded2"
        icon="inventory"
        label="Informações do Produto"
        caption=""
      >
        <q-card>
          <q-card-section>
            <div align="center">
              <span class="text-weight-bold text-grey-8"
                >Linguagem:
                <span class="text-weight-bolder text-grey-9"
                  >Português
                </span></span
              ><br />
              <span class="text-weight-bold text-grey-8"
                >Foil?
                <span class="text-weight-bolder text-grey-9">Não </span></span
              ><br />
              <span class="text-weight-bold text-grey-8"
                >Reverse?
                <span class="text-weight-bolder text-grey-9">Sim </span></span
              ><br />
              <span class="text-weight-bold text-grey-8"
                >Condição:
                <span class="text-weight-bolder text-grey-9">
                  <q-badge
                    class="q-mr-sm"
                    color="green-9"
                    text-color="white"
                    label="NM"
                    ><q-tooltip>Near Mint</q-tooltip></q-badge
                  >
                </span></span
              ><br />
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-card-section class="q-mr-sm q-mt-md" align="right">
        <span class="text-weight-bolder grey-9 q-mr-md">R$ 5.000.000,00</span
        ><br />
        <span class="text-cation q-mr-md">Quantidade: 30 unids</span>

        <q-input
          class="q-ma-md"
          :model-value="model"
          v-model.number="model"
          type="number"
          outlined
          dense
          style="max-width: 50px; min-width: 30px" />

        <q-btn
          padding="14px 13px"
          square
          class="q-mx-md"
          size="1em"
          color="grey"
          icon="shopping_cart"
          @click="itensQuantity.increment(model)"
        >
        </q-btn
      ></q-card-section> </q-card
  ></q-dialog>
</template>
<script>
import { defineComponent, ref } from "vue";
import pagesTitleComponent from "../../../components/pagesTitleComponent.vue";
import { itensQuantity } from "../../../shared/helpers/itensQuantity.js";

export default defineComponent({
  name: "mobileDialogPreCheckoutComponent",
  components: { pagesTitleComponent },
  setup() {
    const modal = ref(false),
      model = ref(1),
      expanded = ref(false),
      expanded2 = ref(false),
      openModal = () => (modal.value = !modal.value);
    return {
      itensQuantity,
      model,
      modal,
      openModal,
    };
  },
});
</script>
<style>
.cardStyle {
  width: 100%;
  height: 65%;
}
.fontSizeExpansionItem {
  font-size: 16px;
}
</style>
