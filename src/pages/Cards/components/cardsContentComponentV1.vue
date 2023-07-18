<template>
  <div class="row justify-center q-mx-xs">
    <q-card
      flat
      bordered
      class="cardContentStyle q-pt-xs"
      style="
        cursor: pointer;
        width: 100%;
        min-width: 280px;
        height: 520px;
        max-height: 520px;
        border-color: grey;
      "
      @click="openCard()"
    >
      <q-card-section class="">
        <div class="row justify-center q-mt-xs">
          <q-img
            :src="image"
            height="330px"
            width="240px"
            class="rounded-borders imageStyle"
          >
          </q-img>
        </div>

        <div class="q-pt-md">
          <div style="height: 55px">
            <p class="text-center nameTextStyle">
              {{ resizeName(name) }}
            </p>
          </div>

          <div class="text-center q-mt-lg">
            <q-separator color="black" inset class="" />
            <p
              class="priceTextStyle q-mt-sm text-no-wrap"
              style="font-size: 17px"
            >
              <span class="text-weight-bolder text-green-6 text-no-wrap"
                >R${{ price }}</span
              >
              <q-separator vertical></q-separator>
              <span class="text-weight-bolder text-orange-6 text-no-wrap"
                >R${{ price }}</span
              >
              <q-separator vertical></q-separator>

              <span class="text-weight-bolder text-red-6 text-no-wrap"
                >R${{ price }}</span
              >
            </p>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { resizeName } from "../../../shared/helpers/stringManipulationsHelpers.js";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "cardsContentComponentV1",
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
  font-size: 30px;
  color: rgb(82, 78, 78);
}

.nameTextStyle {
  font-size: 25px;
  color: rgb(66, 61, 61);
}

.imageStyle {
  transition: transform 0.2s;
}

.imageStyle:hover {
  transform: scale(1.1);
}

.routerLinkStyle {
  text-decoration: none;
  color: white;
}

.cardContentStyle:active {
  transform: scale(0.99);
}
</style>
