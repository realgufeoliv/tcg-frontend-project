<template>
  <pages-title-component :title="'Booster Boxes'" />
  <div v-if="$q.screen.gt.sm">
    <products-search-component :rarity="false" />
  </div>
  <div class="q-ml-xl q-mt-md">
    <div class="q-ml-lg">{{ getAllCards.length }} resultados</div>
  </div>
  <div
    v-if="getAllCards.length"
    :class="$q.screen.width < 750 ? '' : 'q-mx-xl'"
  >
    <div class="row q-mb-md">
      <template v-for="(productsList, i) in getAllCards" :key="i">
        <div
          class="q-mt-sm"
          :class="
            $q.screen.width < 1200
              ? $q.screen.width < 960
                ? $q.screen.width < 750
                  ? 'col-12 '
                  : 'col-6 '
                : 'col-4 '
              : 'col-3'
          "
        >
          <cardsContentComponent
            :image="productsList.img"
            :price="productsList.price"
            :name="productsList.name"
          />
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import pagesTitleComponent from "../../components/pagesTitleComponent.vue";
import cardsContentComponent from "./../Cards/components/cardsContentComponent2.vue";
import { useGetters } from "vuex-composition-helpers";
import { defineComponent } from "vue";
import productsSearchComponent from "./../Cards/components/productsSearchComponent.vue";
export default defineComponent({
  components: {
    productsSearchComponent,
    pagesTitleComponent,
    cardsContentComponent,
  },
  setup() {
    const { getAllCards } = useGetters({
      getAllCards: "Home/getBestSellersList",
    });
    return {
      getAllCards,
    };
  },
});
</script>
