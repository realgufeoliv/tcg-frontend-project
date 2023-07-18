import { reactive } from "vue";
export const itensQuantity = reactive({
  count: 0,
  increment(n) {
    this.count += n;
  },
});
