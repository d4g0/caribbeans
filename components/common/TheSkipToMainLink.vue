<template>
  <div class="">
    <nuxt-link
      @keydown="handleKey"
      :to="localePath('/#main')"
      class="absolute left-2 top-2 z-70 text-center block p-3 border border-gray-300 bg-white rounded-kush shadow-2xl transition-all duration-150 focus:outline-none focus:ring-2 -mt-32 focus:mt-0"
      >Skip to main content</nuxt-link
    >
  </div>
</template>

<script>
export default {
  setup() {
    function handleKey(evt) {
      console.log(evt.key);
    }
    return {
      handleKey,
    };
  },
};
</script>

<style scoped>
.up-8 {
  transform: translate3d(0, -8rem, 0);
}
.focus\:mt-0:focus {
  margin-top: 0;
}
</style>