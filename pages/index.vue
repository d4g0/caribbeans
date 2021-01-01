<template>
  <div class="min-h-screen w-full font-sans">
    <main role="main">
      <SkipToNavLink />
      <HomeIntro />
      <HomeOffers />
      <HomeWorks />
    </main>
  </div>
</template>

<script>
import SkipToNavLink from "~/components/common/SkipToNavLink.vue";
// import { onMounted } from '@vue/composition-api';
import HomeIntro from "~/components/home/HomeIntro.vue";
import HomeOffers from "~/components/home/HomeOffers.vue";
import HomeWorks from "~/components/home/HomeWorks.vue";
import { focusEl } from "~/composables/utils";
export default {
  name: "App",
  components: {
    HomeIntro,
    HomeOffers,
    HomeWorks,
    SkipToNavLink,
  },
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
  setup() {},
};
</script>

<style >
</style>