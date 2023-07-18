<template>
  <pages-title-component
    :title="'Conta'"
    :name="'account_circle'"
    class="q-mt-md"
  />
  <profileInfo v-if="!$q.screen.gt.sm" class="q-mx-sm" />
  <div
    class="row justify-center q-my-lg"
    style="height: 100%"
    :class="$q.screen.gt.sm ? 'q-mx-lg q-px-xl ' : ''"
  >
    <profileInfo class="col-3" v-if="$q.screen.gt.sm" />

    <div class="col-9" :class="$q.screen.gt.sm ? 'col-9 q-pl-sm' : 'col-12'">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import pagesTitleComponent from "../../../components/pagesTitleComponent.vue";
import profileInfo from "./components/profile-info.vue";
export default defineComponent({
  components: { pagesTitleComponent, profileInfo },
  setup() {},
});
</script>
