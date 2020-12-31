<template>
  <div class="antialiased text-light-onSurface pt-16 bg-gray-50">
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

    