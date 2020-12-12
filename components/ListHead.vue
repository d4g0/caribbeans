<template>
  <div class="flex justify-between items-baseline">
    <slot>Header Name</slot>
    <SortBtn @order:change="onOrderChange" />
  </div>
</template>

<script>
import SortBtn from "@/components/SortBtn.vue";

export default {
  components: {
    SortBtn,
  },
  methods: {
    onOrderChange(isAsc) {
      isAsc ? this.$emit("order:asc") : this.$emit("order:des");
    },
    
  },
};
</script>

<style>
</style>