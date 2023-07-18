<template>
  <div class="">
    <div class="row justify-center">
      <q-card
        flat
        bordered
        style="
          cursor: pointer;
          width: 270px;
          max-width: 270px;
          border-color: black;
          height: 400px;
          max-height: 400px;
        "
        v-for="(item, i) in productsList"
        :key="i"
        class="q-ma-md q-py-sm cardContentStyle"
      >
        <q-card-section class="">
          <div class="row justify-center">
            <q-img
              :src="item.img"
              height="230px"
              width="163px"
              class="rounded-borders"
            >
            </q-img>
          </div>

          <div class="q-pt-md">
            <p class="text-weight-medium text-center nameTextStyle">
              {{ item.name }}
            </p>

            <div class="">
              <p class="priceTextStyle text-center">
                <span class="text-weight-bold">R${{ item.price }}</span>
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "cardsContentComponent",
  props: {
    productsList: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const $q = useQuasar();
    console.log($q.screen.sizes);
  },
});
</script>
<style>
.priceTextStyle {
  font-size: 30px;
  color: rgb(70, 69, 69);
}

.nameTextStyle {
  font-size: 17.5px;
  color: grey;
}

.cardContentStyle:hover {
  border-bottom: 5px rgb(0, 162, 255) solid;
}
</style>
