<template>
  <div class="">
    <div class="px-6 md:px-0 max-w-screen-md mx-auto mt-20 md:mt-40">
      <!-- bullets -->
      <p class="text-center font-bold text:base md:text-lg opacity-50">
        <span> {{ $t("home.intro.bulleted.design") }} </span>
        <span>&bull;</span>
        <span> {{ $t("home.intro.bulleted.development") }} </span>
        <span>&bull;</span>
        <span> {{ $t("home.intro.bulleted.support") }}</span>
      </p>
      <!-- heading -->
      <h1 class="mt-4 font-bold text-3xl lg:text-7xl text-center">
        {{ $t("home.intro.heading") }}
      </h1>

      <p class="mt-6 md:mt-20 text-sm text-center max-w-md mx-auto opacity-80">
        {{ $t("home.intro.description") }}
      </p>

      <div class="mt-16 text-center ">
        <nuxt-link
          :to="localePath('/#')"
          class="inline-block py-4 px-6 border rounded-kush bg-light-primary text-gray-50 focus-within:ring-2 focus:outline-none focus:ring-2 "
        >
          {{ $t("home.intro.cta_0") }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>