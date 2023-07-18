<template>
  <div class="row justify-center">
    <q-card class="cardStyle" bordered>
      <div class="q-mt-sm q-ml-md row">
        <div>
          <span class="text-subtitle2">Categoria</span>
          <q-select
            v-model="option"
            :options="options"
            outlined
            color="black"
            class="selectorStyle bg-grey-4 q-ml-xs q-mt-xs"
            dense
          />

          <div class="q-mt-sm">
            <span class="text-subtitle2">Mais filtros</span>
            <q-select
              v-model="option"
              :options="options"
              outlined
              color="black"
              class="selectorStyle bg-grey-4 q-ml-xs q-mt-xs"
              dense
            />
          </div>
        </div>
        <div class="q-mx-md">
          <span class="text-subtitle2">Coleções</span>
          <q-select
            v-model="option"
            :options="options"
            outlined
            color="black"
            class="selectorStyle bg-grey-4 q-ml-xs q-mt-xs"
            dense
          />
          <div class="q-mt-sm" v-if="rarity">
            <span class="text-subtitle2">Raridade</span>
            <q-select
              v-model="option"
              :options="options"
              outlined
              color="black"
              class="selectorStyle bg-grey-4 q-ml-xs q-mt-xs"
              dense
            />
          </div>
        </div>

        <div>
          <span class="text-subtitle2">Nome</span>
          <q-input
            outlined
            v-model="text"
            dense
            class="q-mt-xs q-ml-xs bg-grey-4"
          />
        </div>
        <div>
          <div class="q-my-md q-ml-md">
            <q-checkbox v-model="val" class="q-my-sm" color="grey-9" />
            <span class="text-subtitle2">Texto exato</span>
          </div>
        </div>
        <div>
          <div class="q-my-md q-ml-md">
            <q-checkbox v-model="val2" class="q-my-sm" color="grey-9" />
            <span class="text-subtitle2">Disponível</span>
          </div>
        </div>

        <div class="self-center q-mb-xl">
          <q-btn class="q-ml-lg q-mb-md bg-black text-white buttonStyle"
            >Pesquisar</q-btn
          >
        </div>
      </div>
    </q-card>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "productsSearchComponent",
  props: {
    rarity: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const option = ref("Todos");
    return {
      option,
      text: ref(""),
      val: ref(false),
      val2: ref(false),

      options: [
        "Todos",
        "Cards",
        "Booster Boxes",
        "Triplepacks",
        "Elite Trainer",
        "Lotes",
      ],
    };
  },
});
</script>
<style scoped>
.cardStyle {
  height: 160px;
  width: 1100px;
  border-color: grey;
}
.selectorStyle {
  width: 250px;
  width: 180px;
}
.buttonStyle {
  width: 180px;
}
</style>
