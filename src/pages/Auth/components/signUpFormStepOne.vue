<template>
  <div v-if="step == 1">
    <q-input
      :class="$q.screen.gt.sm ? 'q-ma-md' : ''"
      bg-color="grey-3"
      outlined
      v-model="name"
      label="Nome"
      lazy-rules="ondemand"
      :rules="[
        (val) => (val && val.length > 0) || 'O campo nome é obrigatório',
      ]"
    />

    <q-input
      :class="$q.screen.gt.sm ? 'q-ma-md' : ''"
      bg-color="grey-3"
      outlined
      v-model="lastName"
      label="Sobrenome"
      lazy-rules="ondemand"
      :rules="[
        (val) => (val && val.length > 0) || 'O campo nome é obrigatório',
      ]"
    />
    <q-input
      :class="$q.screen.gt.sm ? 'q-ma-md' : ''"
      bg-color="grey-3"
      outlined
      v-model="email"
      label="E-mail"
      lazy-rules="ondemand"
      :rules="[
        (val) => (val && val.length > 0) || 'O campo nome é obrigatório',
      ]"
    />
    <q-input
      :class="$q.screen.gt.sm ? 'q-ma-md' : ''"
      bg-color="grey-3"
      outlined
      v-model="cpf"
      label="CPF"
      lazy-rules="ondemand"
      :rules="[(val) => (val && val.length > 0) || 'O campo CPF é obrigatório']"
    />

    <q-input
      :class="$q.screen.gt.sm ? 'q-ma-md' : ''"
      bg-color="grey-3"
      outlined
      type="Number"
      v-model="age"
      label="Idade"
      lazy-rules="ondemand"
      :rules="[
        (val) => (val !== null && val !== '') || 'O campo Idade é obrigatório',
        (val) => (val > 0 && val < 100) || 'Digite uma Idade válida',
      ]"
    />
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "signUpFormStepOne",
  setup() {},
});
</script>
