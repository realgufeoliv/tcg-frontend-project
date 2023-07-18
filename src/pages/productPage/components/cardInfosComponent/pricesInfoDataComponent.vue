<template>
  <div
    :class="!$q.screen.gt.sm ? 'justify-center q-mt-lg q-pt-sm bg-grey-3 ' : ''"
  >
    <div class="text-center">
      <span class="text-weight-bolder text-grey-9" style="font-size: 19px"
        >Informações Gerais</span
      >
    </div>

    <div
      style="font-size: 15px"
      class="row no-wrap"
      :class="!$q.screen.gt.sm ? 'justify-center ' : ''"
    >
      <div class="q-pa-lg">
        <span class="text-weight-bold text-grey-8"
          >Raridade:<span class="text-weight-bolder text-grey-9 whiteSpaceText">
            Ultra raro</span
          ></span
        >
        <br />
        <br />

        <span class="text-weight-bold text-grey-8"
          >Coleção:
          <span class="text-weight-bolder text-grey-9 whiteSpaceText">
            Black white dragons exalted</span
          >
        </span>
        <br />
        <br />

        <span class="text-weight-bold text-grey-8"
          >Número:
          <span class="text-weight-bolder text-grey-9"> 4</span>
        </span>
        <br />
        <br />
        <span class="text-weight-bold text-grey-8"
          >Quantidade disponível:
          <span class="text-weight-bolder text-grey-9 whiteSpaceText">300</span>
        </span>
      </div>
      <div class="q-py-sm q-pt-lg" :class="!$q.screen.gt.xs ? 'q-ml-sm' : ''">
        <span class="text-weight-bold text-grey-8"
          >Maior Preço:
          <span class="text-weight-bolder text-red-9 whiteSpaceText">
            R$ 1.000,05</span
          >
        </span>
        <br />
        <br />
        <span class="text-weight-bold text-grey-8"
          >Preço Médio:
          <span class="text-weight-bolder text-orange-9 whiteSpaceText">
            R$ 1.000,05</span
          >
        </span>
        <br />
        <br />
        <span class="text-weight-bold text-grey-8">Menor Preço:</span>
        <br v-if="!$q.screen.gt.xs" />
        <span class="text-weight-bolder text-green-9 whiteSpaceText">
          R$ 1000,00</span
        >
        <br />
        <br />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "pricesInfoDataComponent.vue",
  setup() {},
});
</script>
<style scoped>
.whiteSpaceText {
  white-space: nowrap;
}
</style>
