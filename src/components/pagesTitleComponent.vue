<template>
  <div>
    <div>
      <p class="text-h5 q-ml-xl q-mb-xs q-mt-md text-weight-bold text-grey-10">
        <q-icon size="1.3em" :name="name"
          ><q-tooltip> {{ tooltipText }}</q-tooltip></q-icon
        >
        {{ title }}
      </p>
      <div class="q-mb-md" v-if="separator">
        <q-separator color="black" inset />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "pagesTitleComponent",
  props: {
    name: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    tooltipText: {
      type: String,
      required: true,
    },
    separator: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
