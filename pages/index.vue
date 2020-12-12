<template>
  <div class="min-h-screen bg-gray-50 w-full pt-16 pb-64 text-light-onSurface font-sans">
    <AppNavigation />
    <AppLandingIntro/>
    <AppOffers/>
  </div>
</template>

<script>
import AppNavigation from "~/components/common/AppNavigation.vue";
import AppLandingIntro from '~/components/home/AppLandingIntro.vue';
import AppOffers from '~/components/home/AppOffers.vue';

export default {
  name: "App",
  components: {
    AppNavigation,
    AppLandingIntro,
    AppOffers,
  },
};
</script>

<style >
.font-pacifico {
  font-family: Pacifico;
}
.font-dm-mono{
  font-family: 'DM Mono';
}
</style>