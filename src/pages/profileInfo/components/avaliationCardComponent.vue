<template>
  <q-card class="cardStyle bg-black text-white q-pa-xs" v-if="true">
    <div class="text-weight-bold row no-wrap self-center">
      <div
        class="col-3 text-center"
        :class="$q.screen.gt.sm ? 'col-3' : 'col-5'"
      >
        COMPRADOR
      </div>
      <div class="col-2 text-center" v-if="$q.screen.gt.sm">DATA</div>
      <div
        class="text-left q-pl-md"
        :class="$q.screen.gt.xs ? 'col-5 ' : 'col-4 q-mr-md'"
        v-if="!$q.screen.gt.sm"
      >
        OBSERVAÇÃO
      </div>
      <div class="col-2 q-pl-xs" v-if="$q.screen.gt.sm">ITENS | ENTREGA</div>
      <div class="col-4 text-center q-pr-xl" v-if="$q.screen.gt.sm">
        COMENTÁRIOS
      </div>
      <div class="" :class="$q.screen.gt.xs ? 'col-1 q-ml-sm' : 'col-3 '">
        AVALIAÇÃO
      </div>
    </div>
  </q-card>
  <q-card class="cardStyle bg-white q-pa-xs">
    <div class="text-weight-bold row q-px-sm">
      <div
        class="q-mt-xs col-3 text-no-wrap"
        :class="!$q.screen.gt.sm ? 'col-5' : 'col-3'"
      >
        <q-badge color="yellow" text-color="black" class="q-mr-sm" label="SP">
          <q-tooltip>São Paulo</q-tooltip>
        </q-badge>
        <span class="nameTextStyle text-weight-bold text-indigo-10">{{
          resizeShoppingCartCardName("Franciscoooooooooooo")
        }}</span>
      </div>

      <div class="q-mt-xs col-2 text-center" v-if="$q.screen.gt.sm">
        21/09/2003
      </div>
      <div
        class="col-1 text-center q-pl-xs avaliationPadding"
        v-if="$q.screen.gt.sm"
      >
        <q-icon
          name="sentiment_very_satisfied"
          color="green"
          size="30px"
        />|<q-icon name="sentiment_very_satisfied" color="green" size="30px" />
      </div>
      <div
        class="q-mt-xs col-5 q-pl-xl text-center text-indigo-8"
        v-if="$q.screen.gt.sm"
      >
        <q-icon style="cursor: pointer" name="chat" size="2em"></q-icon>
      </div>
      <div
        class="q-mt-xs col-5 q-pl-xl text-left text-indigo-8"
        v-if="!$q.screen.gt.sm"
      >
        <q-icon style="cursor: pointer" name="chat" size="2em"></q-icon>
      </div>
      <div
        class="col-1 text-center"
        :class="$q.screen.gt.xs ? 'q-pl-lg' : 'q-pl-md'"
      >
        <q-icon name="sentiment_very_satisfied" color="green" size="30px" />
      </div>
    </div>
  </q-card>
</template>
<script>
import { defineComponent, ref } from "vue";
import { resizeShoppingCartCardName } from "./../../../shared/helpers/stringManipulationsHelpers.js";
export default defineComponent({
  name: "avaliationCardComponent",
  setup() {
    const model = ref(1);
    return {
      model,
      resizeShoppingCartCardName,
    };
  },
});
</script>
<style scoped>
.cardStyle {
  width: 100%;
  max-width: 1100px;
  border-radius: 3px;
  border-color: black;
}
.nameTextStyle {
  cursor: pointer;
  font-size: 14px;
}

.nameTextStyle:hover {
  text-decoration: underline;
}
.avaliationPadding {
  padding-left: 6px;
}
</style>
