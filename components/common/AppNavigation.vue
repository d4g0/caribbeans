<template>
  <div class="text-light-onSurface dark:text-dark-onSurface">
    <header
      class="border-b dark:border-gray-500 bg-light-surface dark:bg-dark-surface transition-all ease-in-out duration-200 h-16 fixed z-30 top-0 right-0 w-full flex items-center"
    >
      <!-- border border-gray-300 -->
      <nav
        id="navigation"
        class="flex-1 flex items-baseline max-w-screen-lg mx-auto px-6 xl:px-0 justify-between"
      >
        <!-- logo -->
        <div class="">
          <nuxt-link
            :to="localePath('/')"
            class="flex items-baseline text-sm focus:outline-none focus:ring-4 focus:ring-amber-500 rounded-kush"
          >
            <div class="relative  w-8">
              <span
                class="absolute -top-6 left-0 h-8 w-full rounded-lg transform bg-gradient-to-tr from-amber-400 to-fuchsia-700"
              ></span>
            </div>
            <h1 class="ml-2 text-2xl font-bold">Caribbeans</h1>
          </nuxt-link>
        </div>

        <!-- links -->
        <ul class="text-sm font-medium hidden lg:flex space-x-4 items-center">
          <!-- home -->
          <li>
            <nuxt-link
              :to="localePath('/')"
              exact=""
              :class="{ 'nuxt-link-exact-active': isOnPath('index') }"
              class="py-1 px-2 rounded-md opacity-50 hover:opacity-100 hover:bg-gray-200 dark:hover:bg-dark-surfaceElevated transition-all duration-100 text-sm focus:outline-none focus:ring-4 focus:ring-amber-500"
              @click.native="focusElAsync('skip-to-nav-link')"
              >Home</nuxt-link
            >
          </li>
          <!-- works -->
          <li>
            <nuxt-link
              :to="localePath('works')"
              exact=""
              :class="{ 'nuxt-link-exact-active': isOnPath('works') }"
              class="py-1 px-2 rounded-md opacity-50 hover:opacity-100 hover:bg-gray-200 dark:hover:bg-dark-surfaceElevated transition-all duration-100 text-sm focus:outline-none focus:ring-4 focus:ring-amber-500"
              >{{ $t("common.navigation.works") }}</nuxt-link
            >
          </li>
          <!-- contact -->
          <li>
            <nuxt-link
              :to="localePath('contact')"
              exact=""
              :class="{ 'nuxt-link-exact-active': isOnPath('contact') }"
              class="py-1 px-2 rounded-md opacity-50 hover:opacity-100 hover:bg-gray-200 dark:hover:bg-dark-surfaceElevated transition-all duration-100 text-sm focus:outline-none focus:ring-4 focus:ring-amber-500"
              >{{ $t("common.navigation.contact_us") }}</nuxt-link
            >
          </li>

          <!--  -->
          <li class="">
            <div class="w-8 h-8 ">
              <ColorModeCtrl  />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import { focusElAsync } from "~/composables/utils";

export default {
  // focusElAsync("skip-to-nav-link");
  methods: {
    isOnPath(path /* string */) {
      return this.$route.name.startsWith(path);
    },
  },

  setup() {
    return {
      focusElAsync,
    };
  },
};
</script>

<style>
</style>