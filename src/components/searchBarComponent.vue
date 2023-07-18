<template>
  <div class="row" :class="$q.screen.gt.sm ? 'q-mx-lg' : 'q-ml-xs'">
    <q-input
      color="white"
      bg-color="grey-10"
      input-style="color: white;"
      dark
      dense
      standout
      v-model="text"
      class="desktopStyle"
      :class="$q.screen.gt.xs ? 'desktopStyle' : 'mobileStyle'"
    >
      <template v-slot:append>
        <q-icon v-if="text == ''" name="search" />
        <q-icon
          v-else
          name="clear"
          class="fechar cursor-pointer"
          @click="text = ''"
        />
      </template>
    </q-input>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { ref, watch } from "vue";
import pokemon from "pokemontcgsdk";

export default defineComponent({
  name: "searchBarComponent",
  setup() {
    const text = ref("");
    const textLength = text.value.split("");
    const testFunc = () => console.log("isso é um teste");
    console.log(textLength);
    watch(text, async (currentValue) => {
      await pokemon.card.where({ q: "name:blastoise" }).then((result) => {
        console.log(result.data[0].name); // "Blastoise"
      });
    });

    return {
      text,
      textLength,
      testFunc,
    };
  },
});
</script>
<style scoped>
.mobileStyle {
  width: 5px;
  max-width: 60vw;
}

.desktopStyle {
  width: 65vw;
}
</style>
