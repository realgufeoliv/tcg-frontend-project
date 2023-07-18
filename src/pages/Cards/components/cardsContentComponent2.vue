<template>
  <div class="row justify-center q-mx-xs">
    <q-card
      square
      class="cardContentStyle q-pt-xs"
      style="
        cursor: pointer;
        min-width: 290px;
        width: 100%;
        height: 475px;
        max-height: 475px;
        border-color: grey;
      "
      @click="openCard()"
    >
      <q-card-section class="q-mt-sm">
        <div class="row justify-center">
          <q-img
            :src="image"
            height="288.75px"
            width="210px"
            class="rounded-borders imageStyle"
          >
          </q-img>
        </div>

        <div class="q-mt-lg">
          <div>
            <p class="text-center nameTextStyle" style="height: 50px">
              Ultra Mega V {{ resizeName(name) }}
            </p>
            <div
              class="priceTextStyle text-grey-2 text-weight-bold q-pt-lg"
              align="center"
            >
              <p
                class="priceTextStyle text-grey-8 text-weight-bold text-center text-no-wrap"
              >
                <span class="text-weight-medium text-green-6 text-no-wrap">
                  R$ {{ price }}</span
                >
                &#x2022;
                <span class="text-weight-medium text-orange-6 text-no-wrap">
                  R$ 249,20</span
                >
                &#x2022;
                <span class="text-weight-medium text-red-6 text-no-wrap">
                  R$ 1K</span
                >
              </p>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { resizeName } from "./../../../shared/helpers/stringManipulationsHelpers.js";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "cardsContentComponent",
  props: {
    image: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    id: {
      type: Number,
      required: false,
    },
  },
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const openCard = () => {
      router.push({
        name: "product-page",
      });
    };
    return {
      resizeName,
      openCard,
    };
  },
});
</script>
<style>
.priceTextStyle {
  font-size: 16px;
  color: rgb(82, 78, 78);
}

.nameTextStyle {
  font-size: 22px;
  color: rgb(66, 61, 61);
}

.imageStyle:hover {
  transform: scale(1.1);
}

.imageStyle {
  transition: transform 0.2s;
}

.routerLinkStyle {
  text-decoration: none;
  color: white;
}

.cardContentStyle:active {
  transform: scale(0.99);
}
</style>
