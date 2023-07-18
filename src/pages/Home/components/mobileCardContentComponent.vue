<template>
  <q-virtual-scroll
    :items="productsList"
    virtual-scroll-horizontal
    v-slot="{ item, index }"
  >
    <q-card
      @click="openCard()"
      flat
      bordered
      style="border-color: black; cursor: pointer"
      :key="index"
      class="q-mr-xs cardStyle"
    >
      {{ (item, i) }}
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

        <div class="q-pt-md" style="height: 80px">
          <q-separator />
          <p class="text-weight-bold text-center">
            {{ item.name }}
          </p>
        </div>
        <div>
          <p class="text-center">
            A partir de:<br />
            <span class="text-weight-bold text-grey-9" style="font-size: 20px"
              >R${{ item.price }}</span
            >
          </p>
        </div>
      </q-card-section>
    </q-card>
  </q-virtual-scroll>
</template>
<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "mobileCardContentComponent",
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
  },
  setup() {
    const router = useRouter();

    const openCard = () => {
      router.push({
        name: "product-page",
      });
    };
    return {
      openCard,
    };
  },
});
</script>
