<template>
  <div
    class="bg-white q-mx-sm"
    :class="$q.screen.gt.sm ? 'cardStyle' : 'cardStyleMobile'"
  >
    <div>
      <pages-title-component
        :title="'Selecione um produto'"
        :name="'manage_search'"
        :separator="true"
      />
    </div>
    <div class="row justify-center q-py-md q-pr-lg">
      <div class="row justify-center" style="width: 100%">
        <div class="self-center text-weight-bolder q-pa-sm col-4" align="right">
          CATEGORIA:
        </div>
        <q-select
          dense
          class="q-pa-sm col-8"
          bg-color="grey-3"
          outlined
          v-model="category"
          :options="categories"
          label="Selecionar"
        />
      </div>
      <div class="row justify-center" style="width: 100%">
        <div class="self-center text-weight-bolder q-pa-sm col-4" align="right">
          LINGUAGEM DA BUSCA:
        </div>
        <q-select
          dense
          class="q-pa-sm col-8"
          bg-color="grey-3"
          outlined
          v-model="language"
          :options="languages"
          label="Selecionar"
        />
      </div>
      <div class="row justify-center" style="width: 100%">
        <div class="self-center text-weight-bolder q-pa-sm col-4" align="right">
          BUSCAR:
        </div>
        <q-input dense outlined v-model="text" class="q-pa-sm col-8">
          <template v-slot:append>
            <q-icon v-if="text == ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="fechar cursor-pointer"
              @click="text = ''"
            />
          </template>
        </q-input>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import pagesTitleComponent from "../../../../components/pagesTitleComponent.vue";

export default defineComponent({
  name: "firstStepForm",
  components: { pagesTitleComponent },
  setup() {
    const category = ref(""),
      language = ref("");
    return {
      category,
      categories: [
        "Cartas",
        "Booster Boxes",
        "Boosters",
        "Produtos Lacrados",
        "Sleeves",
        "Playmats",
        "Deck Boxes",
      ],
      language,
      languages: [
        "Inglês",
        "Português",
        "Espanhol",
        "Russo",
        "Alemão",
        "Italian",
        "Japonês",
        "Frances",
        "Coreano",
      ],
    };
  },
});
</script>
