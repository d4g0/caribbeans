<template>
  <div class="">
    <div class="relative z-40">
      <button
        @click="toogleOpen"
        class="p-2 rounded-lg border hover:bg-gray-100 focus:outline-none focus-within:outline-white focus-within:ring-2"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current"
        >
          <path
            d="M3 5H15M9 3V5M10.0482 14.5C8.52083 12.9178 7.28073 11.0565 6.41187 9M12.5 18H19.5M11 21L16 11L21 21M12.7511 5C11.7831 10.7702 8.06969 15.6095 3 18.129"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <transition name="fade">
        <div
          v-if="isOpen"
          class="bg-white border rounded-md py-2 px-4 absolute bottom-12 left-0 shadow-md"
        >
          <nuxt-link
            
            class="hover:bg-gray-100 block py-1 px-2 rounded-lg text-sm"
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            >{{ locale.name }}</nuxt-link
          >
        </div>
      </transition>
    </div>

    <transition name="fade">
      <div
        v-if="isOpen"
        @click="toogleOpen('close')"
        class="fixed z-30 inset-0"
      ></div>
    </transition>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },

  setup() {
    const isOpen = ref(false);

    function toogleOpen(action = null) {
      // open || close
      if (action !== null) {
        if (action === "open") {
          isOpen.value = true;
          return;
        }
        if (action === "close") {
          isOpen.value = false;
          return;
        }
      }
      isOpen.value = !isOpen.value;
    }

    return {
      isOpen,
      toogleOpen,
    };
  },
};
</script>

<style>
</style>