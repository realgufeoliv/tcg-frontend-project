<template>
  <div
    class="text-grey-9"
    style="font-size: 14pt"
    :class="!$q.screen.gt.xs ? 'mobileStyle bg-white q-pa-sm' : 'q-pa-md'"
  >
    <div class="text-center text-weight-bold">Avaliações</div>
    <div style="font-size: 12pt">
      <div class="row justify-center">
        <div>
          <q-icon name="sentiment_very_satisfied" color="green" size="35px" />
          <span class="text-weight-bolder q-mx-xs">50%</span>
        </div>
        <div>
          <q-icon name="sentiment_satisfied" color="green" size="35px" />
          <span class="text-weight-bolder q-mx-xs">30%</span>
        </div>
        <div>
          <q-icon name="sentiment_neutral" color="orange" size="35px" />
          <span class="text-weight-bolder q-mx-xs">10%</span>
        </div>
        <div>
          <q-icon name="sentiment_dissatisfied" color="red" size="35px" />
          <span class="text-weight-bolder q-mx-xs">10%</span>
        </div>
      </div>
    </div>
    <div class="row justify-center q-pt-xs">
      <q-btn outline @click="scrollToElement()">Ver Todas</q-btn>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { scroll } from "quasar";
const { getScrollTarget, setVerticalScrollPosition } = scroll;
export default defineComponent({
  name: "infoCardReputationComponent",
  setup() {
    const scrollToElement = () => {
      const target = getScrollTarget(document.getElementById("avaliations"));
      const offset = document.getElementById("avaliations").offsetTop;
      const duration = 500;
      setVerticalScrollPosition(target, offset, duration);
    };
    return {
      scrollToElement,
    };
  },
});
</script>
<style scoped>
.mobileStyle {
  width: 100%;
}
</style>
