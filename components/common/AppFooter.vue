<template>
  <footer
    class="border-t pb-32 mt-32 dark:border-gray-50 bg-white 0 bg-light-surface dark:bg-dark-surface transition-all ease-in-out duration-200s"
  >
    <div class="max-w-screen-lg mx-auto px-6 xl:px-0 pt-10">
      <ul class="flex space-x-4">
        <li class="w-10 h-10">
          <AppLangSwitcher
            svgClasess=""
            clasess="rounded-og border bg-white dark:border-gray-500 hover:bg-gray-300  dark:bg-dark-surfaceElevated dark:hover:bg-gray-600"
          />
        </li>
        <li class="w-10 h-10">
          <ColorModeCtrl
            svgClasess=""
            clasess="rounded-og border bg-white dark:border-gray-500 hover:bg-gray-300  dark:bg-dark-surfaceElevated dark:hover:bg-gray-600"
          />
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import AppLangSwitcher from "~/components/common/AppLangSwitcher.vue";
import ColorModeCtrl from "./ColorModeCtrl.vue";
export default {
  components: { AppLangSwitcher, ColorModeCtrl },
};
</script>

<style>
</style>