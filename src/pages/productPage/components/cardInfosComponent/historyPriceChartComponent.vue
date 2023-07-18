<template>
  <div>
    <div class="text-center">
      <span class="text-weight-bolder text-grey-9" style="font-size: 19px"
        >Histórico de Preços</span
      >
    </div>

    <div :class="!$q.screen.gt.xs ? 'row justify-center' : 'q-ml-sm'">
      <line-chart
        style="width: 300px; max-height: 270px"
        :data="chartData"
      ></line-chart>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "historyPriceChartComponent",
  setup() {
    return {
      chartData: [
        ["Jan-21", 40],
        ["Fev-22", 2],
        ["Mar-23", 10],
        ["Abr-29", 5],
        ["Abr-30", 5],
        ["Mai-01", 3],
      ],
    };
  },
});
</script>
