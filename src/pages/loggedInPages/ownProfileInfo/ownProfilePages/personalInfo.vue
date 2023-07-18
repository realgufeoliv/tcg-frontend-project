<template>
  <div class="bg-white q-mx-sm" style="height: 100%; min-height: 620px">
    <div class="text-h5 text-weight-bold text-grey-10 q-pa-xs">
      <pages-title-component :title="'Informações Pessoais'" :name="'badge'" />
    </div>
    <div class="q-ml-xl">
      <span class="text-h6 text-weight-bolder text-grey-9 q-pl-xl"
        ><span class="text-weight-bolder text-grey-8 text-h5"></span>
        Francisco</span
      >
    </div>
    <div
      class="row no-wrap q-my-md q-mb-xl justify-center"
      style="font-size: 15px"
    >
      <div
        class="text-weight-bold text-grey-8 q-ml-xl"
        style="white-space: nowrap"
        :class="
          $q.screen.gt.sm
            ? 'col-3 q-pl-xl'
            : $q.screen.gt.xs
            ? 'col-4'
            : 'col-6'
        "
      >
        Nome: <br />
        Data de registro: <br />
        Data de Nascimento: <br />
        E-mail:<br />
        CPF:<br />
        Fone:
      </div>
      <div
        class="text-weight-bolder text-grey-9 col-6"
        style="white-space: nowrap"
      >
        {{
          resizeShoppingCartCardName(
            "Francisco Cardoso da silva Prado Pereira de Assis"
          )
        }}
        <br />
        21/09/2025 <br />
        21/09/2003 <br />
        teste@teste.com<br />
        874.133.610-00<br />
        (11) 90909221
      </div>
    </div>
    <q-separator color="black" inset></q-separator>
    <router-link :to="{ name: 'own-profile-info.address-info' }">
      <div
        class="row no-wrap q-py-md q-pt-lg q-pb-xl justify-center addressStyle"
        style="font-size: 15px"
      >
        <div
          class="text-weight-bold text-grey-8 q-ml-xl"
          :class="
            $q.screen.gt.sm
              ? 'col-3 q-pl-xl'
              : $q.screen.gt.xs
              ? 'col-4'
              : 'col-6'
          "
        >
          Endereço:
        </div>
        <div class="text-weight-bolder text-grey-9 col-6">
          R. Das Maçãs, 1005 <br />
          Moema<br />
          São Paulo/SP <br />
          <span class="text-weight-bold text-grey-8">04789-000</span>
          <br />
          <span class="text-weight-bold text-grey-8">Sala 73</span>
        </div>
      </div></router-link
    >
    <q-separator color="black" inset></q-separator>
    <div
      class="row no-wrap q-my-md q-mt-lg q-mb-xl justify-center"
      style="font-size: 15px"
    >
      <div
        class="text-weight-bold text-grey-8 q-ml-xl"
        :class="
          $q.screen.gt.sm
            ? 'col-3 q-pl-xl'
            : $q.screen.gt.xs
            ? 'col-4'
            : 'col-6'
        "
      >
        Total Recebido:
      </div>
      <div class="text-weight-bolder text-green-9 col-6">R$ 300,00</div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import pagesTitleComponent from "../../../../components/pagesTitleComponent.vue";
import { resizeShoppingCartCardName } from "./../../../../shared/helpers/stringManipulationsHelpers.js";

export default defineComponent({
  components: { pagesTitleComponent },
  setup() {
    return {
      resizeShoppingCartCardName,
    };
  },
});
</script>

<style scoped lang="scss">
.addressStyle:hover {
  cursor: pointer;
  background-size: 40%;
  background-color: $grey-4;
}
a {
  text-decoration: none;
}
</style>
