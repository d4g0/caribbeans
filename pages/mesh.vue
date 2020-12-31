<template>
  <div class="min-h-screen w-full font-sans">
    <main role="main">
      <SkipToMainLink />
      <SkipToNavLink />

      
    </main>
  </div>
</template>

<script>
import SkipToMainLink from "~/components/common/SkipToMainLink.vue";
import SkipToNavLink from "~/components/common/SkipToNavLink.vue";

export default {
  name: "App",
  layout: "mesh",
  components: {
    SkipToNavLink,
    SkipToMainLink,
  },

  // beforeRouteEnter(to, from, next) {
  //   console.log({
  //     to,
  //     from,
  //     next,
  //   });
  //   next()
  // },
  setup() {},
};
</script>

<style >
</style>