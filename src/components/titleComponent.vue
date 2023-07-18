<template>
  <div>
    <div>
      <p
        class="text-h5 q-mt-md text-weight-bold text-grey-10"
        :class="$q.screen.gt.sm ? 'q-ml-xl' : ''"
      >
        <q-img width="30px" height="30px" :src="img"
          ><q-tooltip> {{ tooltipText }}</q-tooltip></q-img
        >
        {{ title }}
      </p>
    </div>
    <div class="q-mb-md"><q-separator color="black" inset /></div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "titleComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    tooltipText: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
