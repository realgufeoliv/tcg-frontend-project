<template>
  <div>
    <q-list
      ><q-item align="center" class="bg-grey-2 q-pa-lg justify-center">
        <div>
          <q-img
            class="my-img"
            src="/fotodeperfil.jpg"
            height="100px"
            width="100px"
            style="border-radius: 3px; border: solid 1px black"
          >
            <div
              class="my-text text-weight-medium"
              style="cursor: pointer; height: 100%"
            >
              <div class="q-pt-md">Alterar Foto</div>
            </div>
          </q-img>
          <div class="q-mt-sm text-red" style="cursor: pointer">
            Excluir foto
          </div>
        </div>
      </q-item>
      <q-item
        :to="{ name: 'own-profile-info.personal-info' }"
        class="menuStyle bg-white text-weight-bold text-black q-pa-md"
        active-class="  bg-grey-3 "
        :active="link == 'personal-info'"
        @click="link = 'personal-info'"
        clickable
      >
        <q-item-section avatar>
          <q-icon size="1.5em" name="badge" />
        </q-item-section>
        <q-item-section> Informações Pessoais</q-item-section>
      </q-item>
      <q-item
        active-class="  bg-grey-3 "
        :to="{ name: 'own-profile-info.address-info' }"
        class="menuStyle bg-white text-weight-bold text-black"
        clickable
        :active="link === 'adress-info'"
        @click="link = 'adress-info'"
      >
        <q-item-section avatar>
          <q-icon size="1.5em" name="location_on" />
        </q-item-section>
        <q-item-section> Endereço </q-item-section>
      </q-item>
      <q-item
        active-class="  bg-grey-3 "
        :to="{ name: 'own-profile-info.transactions-info' }"
        class="menuStyle bg-white text-weight-bold text-black"
        clickable
        :active="link === 'transactions-info'"
        @click="link = 'transactions-info'"
      >
        <q-item-section avatar>
          <q-icon size="1.5em" name="sync_alt" />
        </q-item-section>
        <q-item-section> Transações </q-item-section>
      </q-item>
      <q-item
        active-class="bg-grey-3"
        :to="{ name: 'own-profile-info.bank-account-info' }"
        class="menuStyle bg-white text-weight-bold text-black"
        clickable
        :active="link === 'bank-account-info'"
        @click="link = 'bank-account-info'"
      >
        <q-item-section avatar>
          <q-icon size="1.5em" name="account_balance" />
        </q-item-section>
        <q-item-section> Dados Bancários </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  name: "profileInfo",

  setup() {
    const link = ref("personal-info");
    return {
      link,
    };
  },
});
</script>
<style scoped lang="scss">
.menuStyle {
  border: none !important;
  border-radius: none !important;
}

.menuStyle:hover {
  color: grey;
}

.sellerTextStyle {
  cursor: pointer;
}

.sellerTextStyle:hover {
  color: $indigo-7;
}

.my-img .my-text {
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
}

.my-img:hover .my-text {
  visibility: visible;
  opacity: 1;
  transition: 0.3s;
}
</style>
