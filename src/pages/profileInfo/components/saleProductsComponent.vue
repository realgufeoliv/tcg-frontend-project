<template>
  <div class="row justify-center">
    <div :class="$q.screen.gt.sm ? 'cardStyle' : 'mobileCardStyle'">
      <div
        class="row self-center"
        :class="$q.screen.gt.xs ? 'justify-between' : 'justify-center '"
      >
        <pagesTitleComponent
          :separator="false"
          :title="'Produtos vendidos por Francisco'"
          class="q-mb-md"
        />
        <q-btn
          class="q-mr-xl q-my-md bg-black text-white text-no-wrap"
          label="ver todos"
          v-if="$q.screen.gt.xs"
          :class="$q.screen.width < 540 ? 'btnMobileStyle' : ''"
          :to="{ name: 'home-pages.most-selled' }"
        />
      </div>
      <cardContentComponent
        v-if="!$q.platform.is.mobile"
        :productsList="getBestSellersList"
        :ranking="false"
        :otherStyle="true"
        class="q-mr-md"
      />
      <mobileCardContentComponent
        v-if="$q.platform.is.mobile"
        :productsList="getBestSellersList"
        :ranking="false"
        class="q-mr-md"
      />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import pagesTitleComponent from "../../../components/pagesTitleComponent.vue";
import cardContentComponent from "../../Home/components/cardContentComponent.vue";
import { useGetters } from "vuex-composition-helpers";
import mobileCardContentComponent from "../../Home/components/mobileCardContentComponent.vue";
export default defineComponent({
  name: "saleProductsComponent",
  components: {
    pagesTitleComponent,
    cardContentComponent,
    mobileCardContentComponent,
  },
  setup() {
    const { getBestSellersList } = useGetters({
      getBestSellersList: "Home/getBestSellersList",
    });
    return {
      getBestSellersList,
    };
  },
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

.marginStyle {
  margin-right: 15px;
}
</style>
