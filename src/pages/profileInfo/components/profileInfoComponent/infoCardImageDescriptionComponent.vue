<template>
  <div class="row no-wrap">
    <div class="q-px-md q-ml-lg" :class="$q.screen.gt.xs ? 'q-pb-md' : ''">
      <q-img
        src="/fotodeperfil.jpg"
        height="100px"
        width="100px"
        class="q-ml-sm"
        style="border-radius: 3px; border: solid 1px black"
      >
      </q-img>
    </div>
    <div class="q-ml-md text-grey-9" style="font-size: 12pt">
      <div>
        <span class="text-weight-bold text-grey-8"
          >Vendas:
          <q-badge
            class="q-ml-sm q-pa-xs"
            color="red-10"
            text-color="white"
            label="10K"
            ><q-tooltip>10130 vendas</q-tooltip></q-badge
          >
        </span>
      </div>
      <div class="" :class="$q.screen.gt.xs ? 'q-my-sm' : 'q-py-xs'">
        <span class="text-weight-bold text-grey-8"
          >Reputação:
          <q-badge
            class="q-ml-sm q-pa-xs"
            color="green"
            text-color="white"
            label="Ótima"
            ><q-tooltip>Segundo as Avaliações</q-tooltip></q-badge
          >
        </span>
      </div>
      <div
        class="text-weight-bold text-grey-8"
        :class="$q.screen.gt.xs ? 'q-my-sm' : 'q-py-xs'"
      >
        Localização:
        <span class="text-weight-bolder text-grey-9">São Paulo - SP</span>
      </div>

      <div class="text-weight-bold text-grey-8">
        Membro Desde
        <span class="text-weight-bolder text-grey-9"> 2012</span>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "infoCardImageDescriptionComponent",
  setup() {},
});
</script>
