<template>
  <div>
    <button @click="handleClick" class="focus:outline-none focus-within:bg-gray-400 px-3 py-2 rounded-full">
      {{ isAsc  ? "▲" : "▼" }}
    </button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isAsc: false
        }
    },
    methods: {
        handleClick() {
            this.isAsc = !this.isAsc
            this.$emit('order:change',this.isAsc)
        }
    },
};
</script>

<style>
</style>