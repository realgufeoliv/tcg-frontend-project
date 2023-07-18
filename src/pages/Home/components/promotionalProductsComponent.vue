<template>
  <div class="divStyleMargin">
    <div class="row justify-between items-center no-wrap">
      <p
        class="text-h5 q-ml-xl q-mt-md text-weight-bold text-grey-10 text-no-wrap"
      >
        <q-img width="30px" height="30px" src="/descontoIcon.png"></q-img>
        Produtos em promoção
      </p>
      <q-btn
        v-if="$q.screen.gt.xs"
        class="q-mr-xl q-my-md bg-black text-white text-no-wrap"
        label="ver todos"
        :class="$q.screen.width < 540 ? 'btnMobileStyle' : ''"
        :to="{ name: 'home-pages.promotional-products' }"
      >
      </q-btn>
    </div>
    <div class="q-mb-md"><q-separator color="black" inset /></div>

    <cardContentComponent
      v-if="!$q.platform.is.mobile"
      :productsList="getPromotionalPricesList"
      class="q-mr-md"
    />
    <mobileCardContentComponent
      v-if="$q.platform.is.mobile"
      :productsList="getPromotionalPricesList"
      class="q-mr-md"
    />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import cardContentComponent from "./cardContentComponent.vue";
import { useGetters } from "vuex-composition-helpers";
import mobileCardContentComponent from "./mobileCardContentComponent.vue";
export default defineComponent({
  name: "promotionalProductsComponent",
  components: { cardContentComponent, mobileCardContentComponent },
  setup() {
    const { getPromotionalPricesList } = useGetters({
      getPromotionalPricesList: "Home/getPromotionalPricesList",
    });
    return {
      getPromotionalPricesList,
    };
  },
});
</script>
<style scoped>
.divStyleMargin {
  margin-left: 0.5px;
}
.pMobileStyle {
  margin-left: 0vw;
}
.btnMobileStyle {
  margin-left: 0vw;
}
</style>
