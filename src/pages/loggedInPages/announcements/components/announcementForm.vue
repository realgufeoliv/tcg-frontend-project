<template>
  <div
    class="row justify-center"
    :class="$q.screen.gt.xs ? 'q-pa-sm q-mt-md' : ''"
  >
    <first-step-form />
    <second-step-form />
    <div
      class="q-mx-sm row"
      align="center"
      style="max-width: 260px; max-height: 600px; width: 100%"
    >
      <div class="col-12 bg-white q-pa-lg">
        <q-img
          src="https://images.pokemontcg.io/base1/4.png"
          height="288.5px"
          width="212px"
          class="rounded-borders imageStyle"
        >
        </q-img>
        <div class="q-mt-md text-weight-bold">Charizard</div>
      </div>

      <q-btn color="black" style="width: 100%" class="q-mt-xl self-end"
        >Anunciar</q-btn
      >
    </div>
  </div>
</template>

<script>
import { useGetters } from "vuex-composition-helpers";
import { defineComponent, ref } from "vue";
import firstStepForm from "./firstStepForm.vue";
import secondStepForm from "./secondStepForm.vue";
export default defineComponent({
  name: "announcementForm",
  components: {
    firstStepForm,
    secondStepForm,
  },
  setup() {
    const { getAnnuncimentsTypes } = useGetters({
      getAnnuncimentsTypes: "loggedInPages/getAnnuncimentsTypes",
    });

    return {
      getAnnuncimentsTypes,
    };
  },
});
</script>
<style scoped>
.cardStyle {
  width: 100%;
  max-width: 480px;
  min-height: 600px;
  max-height: 600px;
  /*width: 35%;
  height: 100%; */
}
.cardStyleMobile {
  width: 100%;
  height: 100%;
}
.imageStyle {
  transition: transform 0.2s;
}
.imageStyle:hover {
  transform: scale(1.05);
}
</style>
