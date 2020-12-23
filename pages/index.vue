<template>
  <div class="min-h-screen w-full font-sans">
    <!-- tabindex="-1" id="main" -->
    <main role="main">
      <HomeIntro />
      <HomeOffers />
      <HomeWorks />
    </main>
  </div>
</template>

<script>
import TheSkipToMainLink from "~/components/common/TheSkipToMainLink.vue";
import HomeIntro from "~/components/home/HomeIntro.vue";
import HomeOffers from "~/components/home/HomeOffers.vue";
import HomeWorks from "~/components/home/HomeWorks.vue";

export default {
  name: "App",
  components: {
    HomeIntro,
    HomeOffers,
    HomeWorks,
    TheSkipToMainLink,
  },
};
</script>

<style >
.font-pacifico {
  font-family: Pacifico;
}
.font-dm-mono {
  font-family: "DM Mono";
}
</style>