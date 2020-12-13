<template>
  <div class="antialiased text-light-onSurface pt-16 bg-gray-50">
    <AppNavigation />
    <Nuxt />
    <AppFooter/>
  </div>
</template>

<script>
import AppNavigation from "~/components/common/AppNavigation.vue";
import AppFooter from "~/components/common/AppFooter.vue";

export default {

  components: {
    AppNavigation,
    AppFooter,
  }
}
</script>

