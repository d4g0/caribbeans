<template>
  <div class="min-h-screen w-full font-sans">
    <main>
      <span class="sr-only absolute top-0 right-0" id="main">
        Main Content
      </span>
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