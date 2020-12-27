<template>
  <div class="min-h-screen w-full font-sans">
    <main role="main">
      <HomeIntro />
      <HomeOffers />
      <HomeWorks />
    </main>
  </div>
</template>

<script>
// import { onMounted } from '@vue/composition-api';
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
  setup(){
    
  }
};
</script>

<style >
</style>