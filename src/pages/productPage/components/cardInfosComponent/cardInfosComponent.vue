<template>
  <q-card
    class="bg-white q-mb-md"
    bordered
    :flat="$q.screen.gt.sm ? false : true"
    :square="$q.screen.gt.sm ? false : true"
    :class="
      $q.screen.gt.sm
        ? 'cardStyle q-pa-md'
        : $q.screen.gt.xs
        ? 'mobileCardStyle q-pa-md'
        : 'mobileCardStyle q-pt-md'
    "
  >
    <div class="row justify-center no-wrap">
      <div class="row no-wrap">
        <div>
          <q-img
            src="https://images.pokemontcg.io/base1/4.png"
            height="288.5px"
            width="212px"
            class="rounded-borders imageStyle q-mr-sm"
          >
          </q-img>
        </div>
        <pricesInfoDataComponent v-if="$q.screen.gt.sm" />
      </div>

      <historyPriceChartComponent
        v-if="$q.screen.gt.xs"
        class="q-mx-md"
        :class="$q.screen.gt.sm ? 'q-pl-md' : ''"
      />
    </div>
    <pricesInfoDataComponent v-if="!$q.screen.gt.sm" />
    <historyPriceChartComponent
      v-if="!$q.screen.gt.xs"
      class="q-mx-md q-mt-sm"
    />
  </q-card>
</template>
<script>
import { defineComponent } from "vue";
import pricesInfoDataComponent from "./pricesInfoDataComponent.vue";
import historyPriceChartComponent from "./historyPriceChartComponent.vue";
export default defineComponent({
  name: "cardsInfoComponent",
  components: { pricesInfoDataComponent, historyPriceChartComponent },
  setup() {},
});
</script>
<style scoped>
.cardStyle {
  height: 100%;
  width: 86%;
  border-color: black;
}
.imageStyle {
  transition: transform 0.2s;
}
.imageStyle:hover {
  transform: scale(1.05);
}

.mobileCardStyle {
  max-width: 100%;
  min-width: 100%;
}
</style>
