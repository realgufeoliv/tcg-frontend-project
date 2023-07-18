<template>
  <pages-title-component :title="'Cards'" />
  {{ getAllCards }}
  <div></div>
  <div v-if="$q.screen.gt.sm">
    <products-search-component :rarity="true" />
  </div>
  <div class="q-ml-xl q-mt-md">
    <div class="q-ml-lg">{{ getAllCards.length }} resultados</div>
  </div>
  <cards-content-component2
    :image="'https://images.pokemontcg.io/base1/4.png'"
    :price="22"
    :name="getAllCards"
  />

  <div class="q-mx-xl">
    <div>
      <pagination-component></pagination-component>
    </div>
  </div>
</template>
<script>
import { defineComponent, onBeforeMount } from "vue";
import pagesTitleComponent from "../../components/pagesTitleComponent.vue";
import productsSearchComponent from "./components/productsSearchComponent.vue";
import { useGetters, useActions } from "vuex-composition-helpers";
import paginationComponent from "./components/paginationComponent.vue";
import cardsContentComponent2 from "./../Cards/components/cardsContentComponent2.vue";

export default defineComponent({
  components: {
    pagesTitleComponent,
    productsSearchComponent,
    paginationComponent,
    cardsContentComponent2,
  },
  setup() {
    const { getAllCards } = useGetters({
      getAllCards: "Cards/getAllCards",
    });
    const { fetchAllCards } = useActions({
      fetchAllCards: "Cards/fetchAllCards",
    });
    onBeforeMount(async () => {
      await fetchAllCards();
      getAllCards;
    });

    return {
      getAllCards,
    };
  },
});
</script>
