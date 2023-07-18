<template>
  <div
    class="bg-white q-mx-sm"
    :class="$q.screen.gt.sm ? 'cardStyle' : 'cardStyleMobile'"
  >
    <div>
      <pages-title-component
        :title="'Preencha as informações'"
        :name="'edit'"
        :separator="true"
      />
      <div class="row justify-center q-py-md q-pr-lg">
        <div class="row justify-center" style="width: 100%">
          <div
            class="self-center text-weight-bolder q-pa-sm col-4"
            align="right"
          >
            LINGUAGEM :
          </div>
          <q-select
            class="q-pa-sm col-8"
            style=""
            bg-color="grey-3"
            outlined
            dense
            v-model="language"
            :options="languages"
            label="Selecionar"
          />
        </div>
        <div class="row justify-center" style="width: 100%">
          <div
            class="self-center text-weight-bolder q-pa-sm col-4"
            align="right"
          >
            CONDIÇÃO :
          </div>
          <q-select
            class="q-pa-sm col-8"
            style=""
            bg-color="grey-3"
            outlined
            dense
            v-model="condition"
            :options="conditions"
            label="Selecionar"
          />
        </div>
        <div class="row justify-center" style="width: 100%">
          <div
            class="self-center text-weight-bolder q-pa-sm col-4"
            align="right"
          >
            FOIL :
          </div>
          <div class="col-8">
            <q-checkbox v-model="foil" color="grey-9" />
          </div>
        </div>
        <div class="row justify-center" style="width: 100%">
          <div
            class="self-center text-weight-bolder q-pa-sm col-4"
            align="right"
          >
            REVERSE :
          </div>
          <div class="col-8">
            <q-checkbox v-model="reverse" color="grey-9" />
          </div>
        </div>
        <div class="row justify-center" style="width: 100%">
          <div
            class="self-center text-weight-bolder q-pa-sm col-4"
            align="right"
          >
            COMENTÁRIO :
          </div>
          <div class="col-8">
            <div class="q-pa-md" style="max-width: 360px">
              <q-input v-model="coment" outlined type="textarea" />
            </div>
          </div>
        </div>
        <div class="row justify-center" style="width: 100%">
          <div
            class="self-center text-weight-bolder q-pa-sm col-4"
            align="right"
          >
            QUANTIDADE:
          </div>
          <div class="col-8 q-pa-sm">
            <q-input
              dense
              outlined
              v-model="quantity"
              class="q-pa-sm"
              type="Number"
              style="max-width: 120px"
            />
          </div>
        </div>
        <div class="row justify-center" style="width: 100%">
          <div
            class="self-center text-weight-bolder q-pa-sm col-4"
            align="right"
          >
            PREÇO:
          </div>
          <div class="col-8 q-pa-sm">
            <q-input
              dense
              outlined
              v-model="price"
              class="q-pa-sm"
              style="max-width: 120px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import pagesTitleComponent from "../../../../components/pagesTitleComponent.vue";

export default defineComponent({
  name: "secondStepForm",
  components: { pagesTitleComponent },

  setup() {
    const name = ref(""),
      quantity = ref(0),
      language = ref(""),
      condition = ref(""),
      reverse = ref(false),
      foil = ref(false),
      text = ref(""),
      coment = ref(""),
      price = ref(0);

    return {
      name,
      quantity,
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
      conditions: [
        "Mint",
        "Near Mint",
        "Excellent",
        "Good",
        "Light Played",
        "Played",
        "Poor",
      ],
      condition,
      reverse,
      foil,
      text,
      coment,
      price,
    };
  },
});
</script>
