<template>
  <div class="row no-wrap">
    <div class="row no-wrap">
      <div class="row q-ml-sm self-center">
        <q-btn
          icon="arrow_back_ios"
          size="20px"
          class="q-px-none"
          flat
          @click="cardDecrease()"
          :disable="stopDecrease"
        ></q-btn>
      </div>
      <transition-group
        name="list"
        tag="div"
        class="row no-wrap"
        appear
        enter-active-class="animate zoomInUp"
        leave-active-class="animated fadeOut"
      >
        <q-card
          v-for="(item, i) in productsList.slice(num1, num2)"
          :key="i"
          class="q-ml-xs"
        >
          <q-card-section>
            <q-img
              :src="item.img"
              height="230px"
              width="163px"
              class="rounded-borders"
            ></q-img>

            <div class="q-pt-md">
              <q-separator />
              <p class="text-blue text-center">{{ item.name }}</p>
            </div>
            <div>
              <p class="text-center">
                {{ item.price }}<q-icon name="currency_bitcoin" />
              </p>
            </div>
          </q-card-section>
        </q-card>
      </transition-group>
    </div>
    <div class="row self-center">
      <q-btn
        icon="arrow_forward_ios"
        size="20px"
        class="q-pa-none"
        flat
        @click.prevent="cardEncrease"
        :disable="stopEncrease"
      ></q-btn>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
import { stringifyQuery } from "vue-router";
import { useGetters } from "vuex-composition-helpers";
export default defineComponent({
  name: "cardContentPromotionalListComponent",
  setup() {
    const num1 = ref(0);
    const num2 = ref(6);

    const { productsList } = useGetters({
      productsList: "Home/getBestSellersList",
    });
    const cardDecrease = () => {
      if (num1.value > 0) {
        --num1.value;
        --num2.value;
      } else {
        stopDecrease = true;
      }
    };
    const cardEncrease = () => {
      if (num2.value < productsList.value.length) {
        ++num1.value;
        ++num2.value;
      } else {
        stopEncrease = true;
      }
    };

    return {
      productsList,
      cardEncrease,
      cardDecrease,
      num1,
      num2,
    };
  },
});
</script>
<style scoped></style>
