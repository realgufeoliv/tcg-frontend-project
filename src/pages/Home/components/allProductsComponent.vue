<template>
  <div class="q-ma-md">
    <div>
      <p class="text-h5 q-ml-xl q-mt-md text-weight-bold text-grey-10">
        <q-img width="30px" height="30px" src="/dropboxicon.png"></q-img>

        Todos os produtos
      </p>
    </div>
    <div class="q-mb-md"><q-separator color="black" inset /></div>
    <div>
      <div class="row justify-center">
        <template v-for="(item, i) in getMenuList" :key="i">
          <div
            class="q-my-sm"
            :class="
              $q.screen.gt.sm
                ? $q.screen.gt.md
                  ? 'col-3 q-mx-sm'
                  : 'q-mx-sm'
                : $q.screen.gt.xs
                ? 'q-mx-sm'
                : 'q-ml-none'
            "
          >
            <allProductsCardComponent
              :route="item.route"
              :image="item.img"
              :title="item.title"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import allProductsCardComponent from "../../../components/allProductsCardComponent.vue";
import { useGetters } from "vuex-composition-helpers";

export default defineComponent({
  name: "allProductsComponent",
  components: { allProductsCardComponent },
  setup() {
    const { getMenuList } = useGetters({
      getMenuList: "Home/getMenuList",
    });
    return {
      getMenuList,
    };
  },
});
</script>
