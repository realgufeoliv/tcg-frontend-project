<template>
  <div class="row no-wrap justify-center">
    <div class="row no-wrap">
      <div class="row q-ml-md self-center q-mr-none">
        <q-btn
          icon="arrow_back_ios"
          size="20px"
          class="q-pa-none q-ml-xs q-mr-none left"
          flat
          @click.prevent="cardDecrease()"
          :disable="stopDecrease"
        ></q-btn>
      </div>

      <q-card
        @click="openCard()"
        :flat="!otherStyle"
        bordered
        style="cursor: pointer; height: 100%"
        :style="otherStyle ? '' : 'border-color: black;'"
        v-for="(item, i) in productsList.slice(num1, num2)"
        :key="i"
        class="q-mr-xs cardStyle"
      >
        <q-card-section>
          <q-img
            :src="item.img"
            height="230px"
            width="163px"
            class="rounded-borders row justify-center"
          >
            <div
              bordered
              v-if="item.id == 1 && ranking"
              class="absolute-top-left bg-yellow"
            >
              1° lugar
            </div>
            <div
              bordered
              v-if="item.id == 2 && ranking"
              class="absolute-top-left blue-grey-10"
            >
              2° lugar
            </div>
            <div
              bordered
              v-if="item.id == 3 && ranking"
              class="absolute-top-left bg-deep-orange-10"
            >
              3° lugar
            </div>
          </q-img>

          <div class="q-pt-md" style="height: 70px">
            <q-separator />
            <p class="text-weight-bold text-grey-10 text-center">
              {{ item.name }}
            </p>
          </div>

          <div>
            <div>
              <div
                class="priceTextStyle text-grey-2 text-weight-bolder q-pt-lg"
                align="center"
              >
                <div
                  class="priceTextStyle text-grey-8 text-center text-no-wrap"
                >
                  <div class="text-green-6 text-no-wrap">
                    R$ {{ item.price }}
                  </div>

                  <div class="text-orange-6 text-no-wrap">R$ 249,20</div>

                  <div class="text-red-6 text-no-wrap">R$ 1K</div>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
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
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "cardContentComponent",
  props: {
    productsList: {
      type: Array,
      required: true,
    },
    ranking: {
      type: Boolean,
      required: false,
      default: true,
    },
    otherStyle: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const $q = useQuasar();
    const router = useRouter();

    const num1 = ref(0);
    const num2 = ref($q.screen.gt.sm ? ($q.screen.gt.md ? 8 : 6) : 4);

    const cardDecrease = () => {
      if (num1.value > 0) {
        --num1.value;
        --num2.value;
      } else {
        stopDecrease = true;
      }
    };
    const cardEncrease = () => {
      if (num2.value < props.productsList.length) {
        ++num1.value;
        ++num2.value;
      } else {
        stopEncrease = true;
      }
    };

    const openCard = () => {
      router.push({
        name: "product-page",
      });
    };

    return {
      openCard,
      cardEncrease,
      cardDecrease,
      num1,
      num2,
    };
  },
});
</script>
<style lang="scss" scoped>
$color: rgb(236, 236, 236);

.cardStyle {
  transition: transform 0.2s;
  font-size: 20px;
  max-width: 200px;
}
.cardStyle:hover {
  transform: scale(1.05);
}

.priceTextStyle {
  font-size: 16px;
}
</style>
