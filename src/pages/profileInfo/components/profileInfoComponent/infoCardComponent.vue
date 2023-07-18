<template>
  <div class="row justify-center q-mt-md">
    <q-card
      class=""
      :flat="$q.screen.gt.sm ? false : true"
      :square="$q.screen.gt.sm ? false : true"
      :class="$q.screen.gt.sm ? 'cardStyle' : 'mobileCardStyle'"
    >
      <pages-title-component :title="'Francisco'" />
      <div class="row justify-center q-pb-sm">
        <infoCardImageDescriptionComponent />
        <q-separator
          vertical
          inset
          class="q-mx-md"
          v-if="$q.screen.gt.xs"
        ></q-separator>

        <infoCardSellsDesiresComponent v-if="$q.screen.gt.xs" />
        <q-separator
          inset
          vertical
          class="q-mx-md"
          v-if="$q.screen.gt.xs"
        ></q-separator>

        <infoCardReputationComponent v-if="$q.screen.gt.xs" />
      </div>
    </q-card>
    <infoCardSellsDesiresComponent v-if="!$q.screen.gt.xs" />
    <infoCardReputationComponent v-if="!$q.screen.gt.xs" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import pagesTitleComponent from "../../../../components/pagesTitleComponent.vue";
import infoCardReputationComponent from "./infoCardReputationComponent.vue";
import infoCardSellsDesiresComponent from "./infoCardSellsDesiresComponent.vue";
import infoCardImageDescriptionComponent from "./infoCardImageDescriptionComponent.vue";
export default defineComponent({
  name: "infoCardComponent",
  components: {
    pagesTitleComponent,
    infoCardReputationComponent,
    infoCardSellsDesiresComponent,
    infoCardImageDescriptionComponent,
  },
  setup() {},
});
</script>
<style scoped>
.cardStyle {
  max-width: 90%;
  min-width: 90%;
}

.mobileCardStyle {
  max-width: 100%;
  min-width: 100%;
}
</style>
