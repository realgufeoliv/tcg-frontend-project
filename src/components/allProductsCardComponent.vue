<template>
  <div class="">
    <q-card bordered style="cursor: pointer" class="cardStyle col-3">
      <router-link :to="route" style="text-decoration: none; color: inherit">
        <q-card-section class=""
          ><p
            class="text-uppercase text-center text-weight-bold bg-black"
            style="color: white"
          >
            {{ title }}
          </p>
          <div class="row justify-center">
            <q-img
              :src="image"
              height="220px"
              width="300px"
              class="rounded-borders"
            ></q-img>
          </div>
        </q-card-section>

        <q-card-section> </q-card-section>
      </router-link>
    </q-card>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "allProductsCardComponent",
  props: {
    title: { type: String, required: false, default: "teste" },

    route: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
      default: "teste",
    },
  },
  setup() {},
});
</script>
<style lang="scss" scoped>
$color: rgb(236, 236, 236);

.cardStyle {
  width: 380px;
  height: 300px;
}
.cardStyle:hover {
  background-color: $color !important;
}
</style>
