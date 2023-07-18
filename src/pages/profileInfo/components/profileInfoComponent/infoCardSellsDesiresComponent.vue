<template>
  <div
    class="text-grey-9"
    style="font-size: 12pt"
    :class="!$q.screen.gt.xs ? 'mobileStyle bg-grey-3 q-pa-sm q-px-lg' : ''"
  >
    <div class="text-weight-bold text-grey-8 row justify-between">
      <div>
        Número de Anúncios:
        <span class="q-ml-sm text-weight-bolder text-grey-9">33 </span>
      </div>
      <span class="q-ml-lg text-caption text-indigo-7 linkStyle">
        Ver Todos</span
      >
    </div>
    <div class="text-weight-bold text-grey-8 row justify-between">
      <div>
        Produtos Desejados:

        <br />
        <span class="q-ml-lg text-weight-medium"
          >1°- <span class="linkStyle text-indigo-7">Greninja Break</span>
        </span>
        <br />
        <span class="q-ml-lg text-weight-medium"
          >2°- <span class="linkStyle text-indigo-7">Rayquaza Break</span>
        </span>
        <br />
        <span class="q-ml-lg text-weight-medium"
          >3°- <span class="linkStyle text-indigo-7">Shaymin Break</span>
        </span>
      </div>
      <span class="q-ml-xl text-caption text-indigo-7 linkStyle">
        Ver Todos</span
      >
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "infoCardSellsDesiresComponent",
  setup() {},
});
</script>
<style scoped>
.mobileStyle {
  width: 100%;
}
.linkStyle:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
