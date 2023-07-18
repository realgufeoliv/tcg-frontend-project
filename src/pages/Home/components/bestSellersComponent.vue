<template>
  <div>
    <div class="row justify-between items-center no-wrap">
      <p
        class="text-h5 q-ml-xl q-mt-md text-weight-bold text-grey-10 text-no-wrap"
      >
        <q-img
          width="30px"
          height="30px"
          src="/bestsellerIconComponent.png"
        ></q-img>
        Produtos mais vendidos
      </p>

      <q-btn
        class="q-mr-xl q-my-md bg-black text-white text-no-wrap"
        label="ver todos"
        v-if="$q.screen.gt.xs"
        :class="$q.screen.width < 540 ? 'btnMobileStyle' : ''"
        :to="{ name: 'home-pages.most-selled' }"
      >
      </q-btn>
    </div>
    <div class="q-mb-md"><q-separator color="black" inset /></div>

    <cardContentComponent
      :productsList="getBestSellersList"
      class="q-mr-md"
      v-if="!$q.platform.is.mobile"
    />

    <mobileCardContentComponent
      v-if="$q.platform.is.mobile"
      :productsList="getBestSellersList"
      class="q-mr-md"
    />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import cardContentComponent from "./cardContentComponent.vue";
import { useGetters } from "vuex-composition-helpers";
import { useQuasar } from "quasar";
import mobileCardContentComponent from "./mobileCardContentComponent.vue";

export default defineComponent({
  name: "bestSellersComponent",
  components: { cardContentComponent, mobileCardContentComponent },
  setup() {
    const $q = useQuasar();

    console.log($q.screen.sizes);
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
.pMobileStyle {
  margin-left: 0vw;
}
.btnMobileStyle {
  margin-left: 0vw;
}
</style>
