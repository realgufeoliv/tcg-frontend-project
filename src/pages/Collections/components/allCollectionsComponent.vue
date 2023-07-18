<template>
  <div>
    <div class="">
      <q-card bordered style="cursor: pointer" class="cardStyle col-3">
        <q-card-section class="">
          <div class="row justify-center">
            <q-img
              :src="image"
              class="rounded-borders"
              style="max-height: 340px"
              fit="conatain"
              :ratio="8 / 5"
            ></q-img>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "allCollectionsComponent",
  components: {},
  props: {
    image: {
      type: String,
      required: false,
    },
  },
});
</script>
<style lang="scss" scoped>
$color: rgb(236, 236, 236);

.cardStyle {
  width: 400px;
  height: 340px;
  max-height: 340px;
}
.cardStyle:hover {
  background-color: $color !important;
}
</style>
