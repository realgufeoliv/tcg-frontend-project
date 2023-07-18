<template>
  <p
    class="text-h5 q-ml-xl q-mt-md text-weight-bold text-grey-10 text-no-wrap"
    :class="$q.screen.width < 540 ? 'pMobileStyle' : ''"
  >
    <q-img
      width="30px"
      height="30px"
      src="/bestsellerIconComponent.png"
    ></q-img>
    Produtos mais vendidos
  </p>
  <div class="q-mb-md"><q-separator color="black" inset /></div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
  setup() {},
});
</script>
