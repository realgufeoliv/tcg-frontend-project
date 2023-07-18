<template>
  <div
    class="row justify-center"
    :class="$q.screen.gt.xs ? 'q-pa-md q-mt-xl' : ''"
  >
    <q-card
      class="q-pa-xl bg-white"
      :class="$q.screen.gt.sm ? 'cardStyle' : 'cardStyleMobile'"
    >
      <div align="center" class="q-pb-md">
        <q-img src="/JungleBlackLogo.svg" height="100px" width="120px"></q-img>
      </div>
      <q-form @submit="onSubmit" @reset="onReset">
        <sign-up-form-step-one-vue />

        <div v-if="step == 2">
          <div
            class="row justify-between"
            :class="$q.screen.gt.sm ? 'q-ma-md' : ''"
          >
            <q-input
              class="col-7"
              bg-color="grey-3"
              outlined
              v-model="name"
              label="CEP"
              lazy-rules="ondemand"
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'O campo nome é obrigatório',
              ]"
            />
            <q-input
              class="col-4"
              bg-color="grey-3"
              outlined
              v-model="name"
              label="Número"
              lazy-rules="ondemand"
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'O campo nome é obrigatório',
              ]"
            />
          </div>
          <div
            class="row justify-between"
            :class="$q.screen.gt.sm ? 'q-ma-md' : ''"
          >
            <q-input
              class="col-8"
              bg-color="grey-3"
              outlined
              v-model="name"
              label="Cidade"
              lazy-rules="ondemand"
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'O campo nome é obrigatório',
              ]"
            />
            <q-select
              class="col-3"
              bg-color="grey-3"
              outlined
              v-model="model"
              :options="options"
              label="Estado"
            />
          </div>
          <q-input
            :class="$q.screen.gt.sm ? 'q-ma-md' : ''"
            bg-color="grey-3"
            outlined
            v-model="name"
            label="Bairro"
            lazy-rules="ondemand"
            :rules="[
              (val) => (val && val.length > 0) || 'O campo nome é obrigatório',
            ]"
          />
          <q-input
            :class="$q.screen.gt.sm ? 'q-ma-md' : ''"
            bg-color="grey-3"
            outlined
            v-model="name"
            label="Rua/Avenida"
            lazy-rules="ondemand"
            :rules="[
              (val) => (val && val.length > 0) || 'O campo nome é obrigatório',
            ]"
          />
          <q-input
            :class="$q.screen.gt.sm ? 'q-ma-md' : ''"
            bg-color="grey-3"
            outlined
            v-model="name"
            label="Complemento"
            lazy-rules="ondemand"
            :rules="[
              (val) => (val && val.length > 0) || 'O campo nome é obrigatório',
            ]"
          />
        </div>
        <div v-if="step == 3">
          <q-input
            :class="$q.screen.gt.sm ? 'q-ma-md' : ''"
            bg-color="grey-3"
            outlined
            v-model="name"
            label="Nome do Usuário"
            lazy-rules="ondemand"
            :rules="[
              (val) => (val && val.length > 0) || 'O campo nome é obrigatório',
            ]"
          />
          <q-input
            :class="$q.screen.gt.sm ? 'q-ma-md' : ''"
            bg-color="grey-3"
            outlined
            v-model="name"
            label="Senha"
            lazy-rules="ondemand"
            :rules="[
              (val) => (val && val.length > 0) || 'O campo nome é obrigatório',
            ]"
          />
        </div>
        <div
          align="right"
          class="q-ma-md"
          :class="step > 1 ? 'row justify-between' : ''"
        >
          <q-btn
            icon="arrow_back"
            color="grey-10"
            @click="--step"
            v-if="step > 1 && step <= 3"
          />
          <q-btn
            label="Próximo"
            color="black"
            icon-right="arrow_forward"
            @click="++step"
            v-if="step < 3"
          />
          <q-btn label="Enviar" color="black" v-if="step == 3" />
        </div>
      </q-form>
    </q-card>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { ref } from "vue";
import signUpFormStepOneVue from "./components/signUpFormStepOne.vue";
//import { createNamespacedHelpers } from "vuex-composition-helpers";
//const { useActions, useGetters } = createNamespacedHelpers("Auth");

export default defineComponent({
  name: "signUpPage",
  components: {
    signUpFormStepOneVue,
  },
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);
    const lastName = ref(null);
    const email = ref(null);
    const cpf = ref(null);
    const step = ref(1);
    const progress = ref(0.5);
    //    { signupService } = useActions(["signupService"]);

    return {
      model: ref(null),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      name,
      age,
      accept,
      lastName,
      email,
      cpf,
      step,
      progress,

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
});
</script>
<style scoped lang="scss">
.cardStyle {
  min-width: 630px;
  width: 35%;
  height: 100%;
}
.cardStyleMobile {
  width: 100%;
  height: 100%;
}
</style>
