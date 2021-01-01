<template>
  <div class="w-full text-center">
    <SkipToNavLink />

    <h1 class="mt-4">contact</h1>
  </div>
</template>

<script>
import SkipToMainLink from '~/components/common/SkipToMainLink.vue';
import { focusEl } from "~/composables/utils";

export default {
  components: { SkipToMainLink },
  // beforeRouteEnter(to, from, next) {
  //   console.log({
  //     to,
  //     from,
  //     next,
  //   });
  //   if (from.name) {
  //     focusEl("skip-to-nav-link");
  //   }
  //   next();
  // },
};
</script>

<style>
</style>