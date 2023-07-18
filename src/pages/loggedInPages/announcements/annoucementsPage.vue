<template>
  <pages-title-component :title="'Anuncie'" :name="'sell'" />

  <announcement-form />
</template>
<script>
import { defineComponent } from "vue";
import announcementForm from "./components/announcementForm.vue";
import pagesTitleComponent from "../../../components/pagesTitleComponent.vue";
export default defineComponent({
  components: { pagesTitleComponent, announcementForm },
  setup() {},
});
</script>
