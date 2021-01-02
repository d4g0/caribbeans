<template>
  <div class="antialiased text-light-onSurface dark:text-dark-onSurface bg-light-surface dark:bg-dark-surface transition-all duration-200 ease-in-out">
    <SkipToMainLink />
    <AppNavigation />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppNavigation from "~/components/common/AppNavigation.vue";
import AppFooter from "~/components/common/AppFooter.vue";
import SkipToMainLink from "~/components/common/SkipToMainLink.vue";

export default {
  components: {
    AppNavigation,
    AppFooter,
    SkipToMainLink,
  },
  head() {
    return this.$nuxtI18nSeo();
  },
  
};
</script>

    