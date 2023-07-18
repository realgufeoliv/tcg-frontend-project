<template>
  <q-item
    clickable
    :t="link"
    :to="route"
    exact
    class="text-uppercase text-weight-bold menuStyle"
    active-class="text-black"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    route: {
      type: String,
      default: "",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
<style scoped>
.menuStyle:hover {
  border-right: solid black 7px;
  color: grey;
}
</style>
