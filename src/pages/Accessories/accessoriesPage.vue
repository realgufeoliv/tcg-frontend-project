<template>
  <titleComponent :title="'Acessórios'" />
  <div class="row justify-center q-mb-lg">
    <template v-for="(item, i) in getMenuList" :key="i">
      <div class="q-my-sm" :class="$q.screen.gt.sm ? 'q-mx-sm' : 'q-ml-none '">
        <allProductsCardComponent
          :route="item.route"
          :title="item.title"
          :image="item.img"
        />
      </div>
    </template>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useGetters } from "vuex-composition-helpers";
import allProductsCardComponent from "../../components/allProductsCardComponent.vue";

import titleComponent from "../../components/pagesTitleComponent.vue";
export default defineComponent({
  components: { titleComponent, allProductsCardComponent },
  setup() {
    const { getMenuList } = useGetters({
      getMenuList: "Accessories/getAccessoriesList",
    });
    return {
      getMenuList,
    };
  },
});
</script>
