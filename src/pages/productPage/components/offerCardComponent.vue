<template>
  <q-card
    class="bg-white"
    bordered
    :flat="$q.screen.gt.sm ? false : true"
    :square="$q.screen.gt.sm ? false : true"
    :class="$q.screen.gt.sm ? 'cardStyle' : 'mobileCardStyle'"
  >
    <div class="row" :class="$q.screen.gt.xs ? ' self-center no-wrap' : ''">
      <div
        class="q-pa-sm q-mt-sm"
        :class="
          $q.screen.gt.sm
            ? 'col-3 whiteSpace'
            : $q.screen.gt.xs
            ? 'col-3 '
            : 'col-10'
        "
      >
        <q-badge color="yellow" text-color="black" class="q-mr-xs" label="SP">
          <q-tooltip>São Paulo</q-tooltip>
        </q-badge>
        <q-badge class="" color="grey" text-color="black" label="200"
          ><q-tooltip
            >{{ 200 }} vendas | {{ 100 }} itens disponíveis</q-tooltip
          ></q-badge
        >
        <q-badge color="green" text-color="black" class="q-ml-xs" label="ótima">
          <q-tooltip>A reputação desse vendedor é ótima</q-tooltip>
        </q-badge>
        <router-link to="/profile-info" class="nameTextStyle">
          <span
            class="nameTextStyle q-ml-sm text-weight-bold text-indigo-10"
            :class="$q.screen.gt.sm ? 'q-mr-xl' : 'q-mr-sm'"
            >Francisco</span
          >
        </router-link>
        <div
          class="q-pa-sm q-mt-sm row"
          :class="$q.screen.gt.xs ? '' : 'col-10'"
          v-if="!$q.screen.gt.xs"
        >
          <div>
            <span class="text-weight-bold q-mr-sm" style="font-size: 16px"
              >R$ 5.000.000,00</span
            >
          </div>
          <div>
            <span class="text-caption" style="white-space: nowrap"
              >Quantidade: 30 unids</span
            >
          </div>
        </div>
      </div>

      <div class="q-pa-sm q-mt-sm col-4" v-if="$q.screen.gt.xs">
        <q-badge class="q-mr-sm" color="green-9" text-color="white" label="NM"
          ><q-tooltip>Near Mint</q-tooltip></q-badge
        >
        <span
          class="text-grey-7"
          :class="$q.screen.gt.sm ? 'q-mr-sm' : ''"
          style="font-size: 16px"
        >
          A carta está em perfeito estado
        </span>
      </div>

      <div
        class="q-pa-sm q-mt-sm row"
        :class="
          $q.screen.gt.sm
            ? 'col-2 no-wrap '
            : $q.screen.gt.xs
            ? 'col-2 '
            : 'col-10'
        "
        v-if="$q.screen.gt.xs"
      >
        <div class="col-12">
          <span
            class="text-weight-bold q-mr-sm"
            style="font-size: 16px; white-space: nowrap"
            >R$ 5.000.000,00</span
          >
        </div>
        <div class="col-1">
          <span class="text-caption" style="white-space: nowrap"
            >Quantidade: 30 unids</span
          >
        </div>
      </div>
      <q-space></q-space>
      <div
        :class="
          $q.screen.gt.xs ? 'row no-wrap self-center' : 'col-2 row self-center '
        "
        style="height: 100%"
      >
        <div class="q-pa-sm" v-if="$q.screen.gt.xs">
          <q-input
            :model-value="model"
            v-model.number="model"
            type="number"
            outlined
            dense
            style="max-width: 50px; min-width: 30px"
          />
        </div>
        <q-btn
          v-if="$q.screen.gt.xs"
          square
          class="q-ma-sm"
          size="0.8em"
          color="grey"
          icon="shopping_cart"
          @click="itensQuantity.increment(model)"
        >
        </q-btn>
        <mobileDialogPreCheckoutComponent v-if="!$q.screen.gt.xs" />
      </div>
    </div>
  </q-card>
</template>
<script>
import { defineComponent, ref } from "vue";
import { itensQuantity } from "../../../shared/helpers/itensQuantity.js";
import mobileDialogPreCheckoutComponent from "./mobileDialogPreCheckoutComponent.vue";
export default defineComponent({
  name: "offerCardComponent",
  components: { mobileDialogPreCheckoutComponent },
  setup() {
    const model = ref(1);

    return {
      model,
      itensQuantity,
    };
  },
});
</script>
<style scoped>
.cardStyle {
  width: 86%;
  max-height: 70px;
  border-radius: 3px;
  border: 1px solid black;
}

.nameTextStyle {
  cursor: pointer;
  font-size: 16px;
}
.nameTextStyle {
  text-decoration: none;
  color: white;
}
.nameTextStyle:hover {
  text-decoration: underline;
}
.mobileCardStyle {
  max-width: 100%;
  min-width: 100%;
}

.whiteSpace {
  white-space: nowrap;
}
</style>
