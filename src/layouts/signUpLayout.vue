<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-5">
    <q-header elevated class="bg-black z-top">
      <q-toolbar>
        <div class="q-ml-xl text-weight-bold text-body1">
          <router-link to="/" class="routerLinkStyle">
            <q-img
              src="/jungleLogoWhite.png"
              height="50px"
              width="60px"
            ></q-img>
          </router-link>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "signUpLayout",
  setup() {},
});
</script>
