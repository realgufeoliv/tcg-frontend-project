<template>
  <div>
    <q-btn dense flat :ripple="false">
      <div class="row no-wrap">
        <q-img src="/profileIcon.png" height="25px" width="25px"> </q-img>
        <q-icon name="expand_more" v-if="!$q.screen.gt.xs"></q-icon>
      </div>
      <div
        style="cursor: pointer"
        class="row no-wrap text-weight-medium text-capitalize"
        v-if="$q.screen.gt.xs"
      >
        <span> Francisco </span>
        <q-icon name="expand_more"></q-icon>
      </div>

      <q-menu
        :auto-close="true"
        class="q-mt-lg full-width default-rounded"
        max-width="200px"
        :offset="[40, 8]"
      >
        <div class="">
          <q-list class="row">
            <q-item
              :to="{ name: 'own-profile-info' }"
              clickable
              class="text-no-wrap col-12"
              style="width: 100%"
              active-class="text-white bg-grey"
            >
              <q-item-section avatar>
                <q-icon size="1.5em" name="account_circle" />
              </q-item-section>
              <q-item-section> Minha Conta </q-item-section>
            </q-item>
            <q-item
              active-class="text-white bg-grey"
              class="text-no-wrap col-12"
              clickable
              :to="{ name: 'notifications' }"
            >
              <q-item-section avatar>
                <q-icon size="1.5em" name="notifications" />
              </q-item-section>
              <q-item-section>Notificações</q-item-section>
            </q-item>
            <div class="col-12">
              <q-separator color="grey" />
            </div>

            <q-item
              active-class="text-white bg-grey"
              class="text-no-wrap col-12"
              clickable
              :to="{ name: 'orders' }"
            >
              <q-item-section avatar>
                <q-icon size="1.5em" name="list_alt" />
              </q-item-section>
              <q-item-section>Meus pedidos</q-item-section>
            </q-item>
            <q-item
              active-class="text-white bg-grey"
              class="text-no-wrap col-12"
              clickable
              :to="{ name: 'desires' }"
            >
              <q-item-section avatar>
                <q-icon size="1.5em" name="favorite" />
              </q-item-section>
              <q-item-section>Desejados</q-item-section>
            </q-item>
            <div class="col-12">
              <q-separator color="grey" />
            </div>
            <q-item
              active-class="text-white bg-grey"
              class="text-no-wrap col-12"
              clickable
              :to="{ name: 'announcements' }"
            >
              <q-item-section avatar>
                <q-icon size="1.5em" name="sell" />
              </q-item-section>
              <q-item-section>Anuncie</q-item-section>
            </q-item>
            <q-item
              active-class="text-white bg-grey"
              class="text-no-wrap col-12"
              clickable
              :to="{ name: 'sales' }"
            >
              <q-item-section avatar>
                <q-icon size="1.5em" name=" storefront" />
              </q-item-section>
              <q-item-section>Vendas</q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-menu>
    </q-btn>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "loggedInMenuComponent",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.btnStyle {
  font-size: 12px;
}

.cardStyle {
  height: 300px;
  width: 300px;
}
</style>
