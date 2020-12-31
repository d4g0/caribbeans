<template>
  <div class="">
    <nuxt-link
      id="skip-to-main-link"
      exact
      to="#main-content"
      @click.native="scrollFix('#main-content')"
      ref="skipLink"
      class="absolute p-2 left-2 z-70 text-center transform-gpu focus:-translate-y-14 -translate-y-64   border border-gray-400 bg-white rounded-kush shadow-2xl transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-amber-500"
      >Skip to main content</nuxt-link
    >
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  setup() {
    const skipLink = ref("");

    function scrollFix(hashbang) {
     const nextPoint = document.querySelector(hashbang);
     nextPoint.focus()
    }

    return {
      scrollFix,
    };
  },
};
</script>
