<template>
  <div class="absolute z-70 top-0 w-full ">
    <div
      class="text-center px-6 md:px-0 max-w-screen-md mx-auto  h-0 flex justify-center items-center"
    >
      <nuxt-link
        id="skip-to-main-link"
        exact
        to="#main-content"
        @click.native="scrollFix('#main-content')"
        ref="skipLink"
        class=" p-2  transform-gpu -translate-y-64 focus:translate-y-8  border border-gray-400 bg-white rounded-kush shadow-2xl transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-amber-500"
        >Skip to main content</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import scrollFix from '~/composables/scrollFix'
export default {
  setup() {
    const skipLink = ref("");

    // function scrollFix(hashbang) {
    //   const nextPoint = document.querySelector(hashbang);
    //   nextPoint.focus();
    // }

    return {
      scrollFix,
    };
  },
};
</script>
