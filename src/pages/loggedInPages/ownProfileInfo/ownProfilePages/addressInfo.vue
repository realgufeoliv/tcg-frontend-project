<template>
  <div
    class="bg-white"
    style="height: 100%; min-height: 620px"
    :class="!$q.screen.gt.sm ? 'q-mx-sm' : ''"
  >
    <div class="text-h5 text-weight-bold text-grey-10 q-pa-xs">
      <pages-title-component :title="'Endereço'" :name="'location_on'" />
    </div>
    <div class="q-mx-xl q-mt-md row justify-center">
      <div
        class="addressCard q-mx-md q-my-md"
        square
        :class="address == 0 ? 'bg-grey-3' : ''"
      >
        <div
          class="text-weight-bold text-grey-9 q-pb-md q-px-lg q-pt-lg q-ml-sm"
          align="left"
          style="font-size: 16px"
        >
          R. Das Maçãs, 1005 <br />
          Moema<br />
          São Paulo/SP <br />
          <span class="text-weight-medium text-grey-8">04364-000</span>
          <br />
          <span class="text-weight-medium text-grey-8">Sala 73</span>
        </div>
        <div class="q-mx-md row justify-between">
          <div class="self-center">
            <q-radio
              class="q-ml-sm q-pb-xs"
              size="sm"
              v-model="address"
              val="0"
              color="green"
            />
          </div>
          <div class="self-center" style="cursor: pointer">Editar</div>
        </div>
      </div>
      <div class="addressCard row justify-center q-my-md" square>
        <q-btn color="white" class="bg-black self-center"
          >+ Adicionar Endereço</q-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import pagesTitleComponent from "../../../../components/pagesTitleComponent.vue";

export default defineComponent({
  components: { pagesTitleComponent },
  setup() {
    const address = ref("0");
    return { address };
  },
});
</script>

<style scoped lang="scss">
.addressCard {
  min-height: 200px;
  min-width: 320px;
  max-width: 320px;
  border: solid 1px $grey-8;
}
</style>
