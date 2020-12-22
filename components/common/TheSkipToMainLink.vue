<template>
  <div class="">
    <!--  :to="localePath('/#main')"  -->
    <!-- <nuxt-link
      @keydown="handleKey"
      to="#main"
      class="absolute left-2  z-70 text-center transform-gpu focus:-translate-y-14 -translate-y-40 p-3 border border-gray-300 bg-white rounded-kush shadow-2xl transition-all duration-150 focus:outline-none focus:ring-2  "
      >Skip to main content</nuxt-link
    > -->

    <nuxt-link
      to="#main"
      class="absolute left-2 z-70 text-center transform-gpu focus:-translate-y-14 -translate-y-48 p-3 border border-gray-300 bg-white rounded-kush shadow-2xl transition-all duration-150 focus:outline-none focus:ring-2"
      >Skip to main content</nuxt-link
    >

    <!-- <a
      href="#main"
      class="absolute left-2 z-70 text-center transform-gpu focus:-translate-y-14 -translate-y-40 p-3 border border-gray-300 bg-white rounded-kush shadow-2xl transition-all duration-150 focus:outline-none focus:ring-2"
      >Skip to main content</a
    > -->
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  setup() {
    const skipLink = ref("");

    
    return {
      skipLink,
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