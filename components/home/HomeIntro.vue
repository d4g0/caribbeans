<template>
  <div class="">
    <!--  -->
    <section
      aria-labelledby="main-heading"
      class="px-6 md:px-0 max-w-screen-md mx-auto rounded-kush pt-20 md:pt-32 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-500"
      id="main-content"
      tabindex="0"
    >
      <!-- bullets -->
      <p class="text-center font-bold text:base md:text-lg opacity-50">
        <span> {{ $t("home.intro.bulleted.design") }} </span>
        <span>&bull;</span>
        <span> {{ $t("home.intro.bulleted.development") }} </span>
        <span>&bull;</span>
        <span> {{ $t("home.intro.bulleted.support") }}</span>
      </p>
      <!-- heading -->
      <h1
        id="main-heading"
        class="mt-4 font-bold text-3xl md:text-5xl lg:text-7xl  text-center focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-500 rounded-kush"
        tabindex="0"
      >
        {{ $t("home.intro.heading") }}
      </h1>

      <p class="mt-6 md:mt-10 text-sm text-center max-w-md mx-auto opacity-80">
        {{ $t("home.intro.description") }}
      </p>

      <div class="mt-16 text-center">
        <nuxt-link
          to="#home-offers-title"
          class="inline-block py-4 px-6 border rounded-kush bg-light-primary text-gray-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-500"
        >
          {{ $t("home.intro.cta_0") }}
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>