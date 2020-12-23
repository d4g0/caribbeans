<template>
  <div class="">
    <div class="relative">
      <!-- @click="toogleOpen" -->
      <button
        
        @click="toogleSwitch()"
        class="relative z-20 p-2 rounded-lg border bg-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-amber-500"
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

      <!-- language options -->
      <transition name="fade-from-bottom">
        <div
          v-if="isSwitchOpen"
          class="absolute z-20 bottom-12 left-0 bg-white border rounded-md py-2 px-4 shadow-md"
        >
          <nuxt-link
            class="hover:bg-gray-100 block py-1 px-2 rounded-lg text-sm focus:outline-none focus:ring-4 focus:ring-amber-500"
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            >{{ locale.name }}</nuxt-link
          >
        </div>
      </transition>
    </div>

    <!-- overlay -->
    <transition name="fade">
      <div
        v-if="isSwitchOpen"
        @click.stop="toogleSwitch('close')"
        class="bg-teal-2000 fixed z-10 inset-0"
      ></div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { computed, ref } from "@vue/composition-api";
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
    ...mapGetters("lang/", ["isSwitchOpen"]),
  },
  methods: {
    ...mapMutations("lang/", ["toogleSwitch"]),
  },

  // setup() {

  // },
};
</script>

<style>
</style>