<template>
  <q-dialog persistent>
    <q-card class="cardStyle bg-grey-5"
      ><div class="row items-center text-grey-10 q-ma-sm justify-center">
        <q-space />
        <q-icon name="login" size="20px"></q-icon>
        <span class="titleStyle q-ml-lg"> Acesse sua conta</span>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </div>

      <div class="q-ma-xl self-center">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md text-white"
        >
          <q-input
            bg-color="white"
            outlined
            dense
            v-model="name"
            label="Endereço de e-mail"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Digite seu email']"
          />

          <q-input
            bg-color="white"
            dense
            class=""
            type="password"
            outlined
            v-model="age"
            label="Senha"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Digite sua senha',
            ]"
          />

          <div class="row justify-center">
            <q-btn
              style="width: 100%"
              label="ENTRAR"
              type="submit"
              color="black"
            />
          </div>
        </q-form>
        <div class="row justify-between text-grey-8 q-mt-md">
          <span> Esqueceu sua senha?</span>
          <div class="text-grey-8">
            Não tem conta?
            <router-link :to="{ name: 'signUp' }">
              <span>Cadastre-se</span>
            </router-link>
          </div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "loginForm",
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
});
</script>
<style scoped>
.cardStyle {
  width: 500px;
  height: 380px;
}

.titleStyle {
  font-size: 25px;
  font-weight: bold;
}
</style>
