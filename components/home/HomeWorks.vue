<template>
  <section class="mt-32 max-w-screen-lg mx-auto px-6 xl:px-0">
    <div class="text-center">
      <h1 class="font-bold text-3xl">Our Projects</h1>
      <ul
        class="mt-10 md:mt-16 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-9 lg:grid-cols-3"
      >
        <!-- v-for="item in state.offers"
          :key="item.title" -->
        <li class="bg-white rounded-kush shadow-sm">
          <HomeWorkItem />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import HomeWorkItem from "~/components/home/HomeWorkItem.vue";
export default {
  components: { HomeWorkItem },
};
</script>

<style>
</style>