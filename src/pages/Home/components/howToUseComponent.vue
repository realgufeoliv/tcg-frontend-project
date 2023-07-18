<template>
  <title-component
    :title="$t('homePage.howToUse.title')"
    :img="'/infoIcon.png'"
    :tooltipText="$t('homePage.howToUse.tooltip')"
  />
</template>
<script>
import { useI18n } from "vue-i18n";

import { defineComponent } from "vue";
import titleComponent from "../../../components/titleComponent.vue";
export default defineComponent({
  name: "howToUseComponent",
  components: { titleComponent },
  setup() {
    const { t } = useI18n();
  },
});
</script>
