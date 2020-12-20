<template>
  <div class="antialiased text-light-onSurface pt-16 bg-gray-50">
    <TheSkipToMainLink />
    <AppNavigation />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppNavigation from "~/components/common/AppNavigation.vue";
import AppFooter from "~/components/common/AppFooter.vue";
import TheSkipToMainLink from "~/components/common/TheSkipToMainLink.vue";

export default {
  components: {
    AppNavigation,
    AppFooter,
    TheSkipToMainLink,
  },
};
</script>

    