<template>
  <pages-title-component :title="'Coleções'" />

  <div class="row justify-center q-mb-lg">
    <template v-for="(item, i) in getAllSets" :key="i">
      <div class="q-my-sm" :class="$q.screen.gt.sm ? 'q-mx-sm' : 'q-ml-none '">
        <all-collections-component
          :title="item.name"
          :image="item.images.logo"
        />
      </div>
    </template>
  </div>
</template>
<script>
import pagesTitleComponent from "../../components/pagesTitleComponent.vue";

import { defineComponent, onBeforeMount, ref } from "vue";
import { useGetters, useActions } from "vuex-composition-helpers";
import AllCollectionsComponent from "./components/allCollectionsComponent.vue";
export default defineComponent({
  components: { AllCollectionsComponent, pagesTitleComponent },
  setup() {
    const { getAllSets } = useGetters({
      getAllSets: "Collections/getAllSets",
    });
    const { fetchAllSets } = useActions({
      fetchAllSets: "Collections/fetchAllSets",
    });

    onBeforeMount(async () => {
      await fetchAllSets();
      await getAllSets;
    });
    return {
      getAllSets,
    };
  },
});
</script>
