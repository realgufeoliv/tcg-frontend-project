<template>
  <div class="bg-grey-5">
    <q-layout view="lHh Lpr lFf">
      <q-header elevated class="bg-black z-top">
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
          <div
            class="q-ml-lg text-weight-bold text-body1"
            v-if="$q.screen.gt.sm"
          >
            <router-link to="/" class="routerLinkStyle">
              <q-img
                src="/jungleLogoWhite.png"
                height="50px"
                width="60px"
              ></q-img>
            </router-link>
          </div>
          <searchBarComponent class="q-ml-xl-md q-mr-none" />

          <div class="q-mx-sm q-ml-md" v-if="!loggedIn">
            <span @click="showModal" style="cursor: pointer">Entrar</span>
          </div>

          <div class="text-no-wrap q-mx-sm" v-if="!loggedIn && $q.screen.gt.xs">
            <router-link to="/signUp" class="routerLinkStyle">
              <span style="cursor: pointer">Crie a sua conta</span>
            </router-link>
          </div>

          <loggedInMenuComponent
            v-if="loggedIn"
            class="q-ml-xs"
            :class="$q.screen.gt.sm ? 'q-mr-sm' : 'q-mr-none'"
          />

          <router-link to="/announcements" class="routerLinkStyle">
            <div class="q-mx-sm q-mr-md" v-if="loggedIn && $q.screen.gt.sm">
              <span style="cursor: pointer">Anuncie</span>
            </div>
          </router-link>

          <shopping-cart-component />
          <login-form v-model="modal" v-if="modal"></login-form>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        bordered
        overlay
        class="q-pt-xl q-mt-md"
      >
        <q-list>
          <EssentialLink
            v-for="item in menu_list"
            :key="item.name"
            v-bind="item"
            :route="item.route"
          />
        </q-list>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
    <div class="bg-black">
      teste
      <q-space />
      a
    </div>
  </div>
</template>

<script>
import { useGetters } from "vuex-composition-helpers";
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import searchBarComponent from "components/searchBarComponent.vue";
import loginForm from "components/loginForm.vue";
import shoppingCartComponent from "components/shoppingCartComponent.vue";
import loggedInMenuComponent from "components/loggedInMenuComponent.vue";
export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    searchBarComponent,
    loginForm,
    shoppingCartComponent,
    loggedInMenuComponent,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const modal = ref(false);
    const loggedIn = ref(true);
    const { menu_list } = useGetters({
      menu_list: "Home/getMenuList",
    });

    const showModal = () => (modal.value = !modal.value);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      menu_list,
      modal,
      showModal,
      loggedIn,
    };
  },
});
</script>
<style scoped>
.buttonStyle:hover {
  background-color: none !important;
  box-shadow: none !important;
}

.routerLinkStyle {
  text-decoration: none;
  color: white;
}
</style>
