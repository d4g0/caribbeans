<template>
  <footer class="border-t pb-32 mt-32 bg-white">
    <div class="max-w-screen-lg mx-auto px-6 xl:px-0 pt-10">
      <AppLangSwitcher />
    </div>
  </footer>
</template>

<script>
import AppLangSwitcher from "~/components/common/AppLangSwitcher.vue";
export default {
  components: { AppLangSwitcher },
};
</script>

<style>
</style>