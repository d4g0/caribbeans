<template>
  <div class="min-h-screen w-full font-sans">
    <!-- tabindex="-1" id="main" -->
    <main>
        <!-- <p
          
          aria-label="Main Content Area"
          tabindex="-1"
          class="inline-block ring-2 ring-amber-500 p-4 rounded-kush"
        >
          Main content Area
        </p> -->
          <!-- <a
            href="#nav"
            
            aria-labelledby="main-content-widget"
            class="pt-20 md:pt-44 text-amber-800 underline"
          >
            Go back to navigation
          </a> -->
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