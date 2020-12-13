<template>
  <div class="min-h-screen w-full  font-sans">
    <HomeIntro/>
    <HomeOffers/>
  </div>
</template>

<script>
import HomeIntro from '~/components/home/HomeIntro.vue';
import HomeOffers from '~/components/home/HomeOffers.vue';

export default {
  name: "App",
  components: {
    HomeIntro,
    HomeOffers,
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