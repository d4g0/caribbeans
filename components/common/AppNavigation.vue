<template>
  <div class="text-light-onSurface">
    <header
      class="bg-white border-b h-16 fixed z-30 top-0 right-0 w-full flex items-center"
    >
      <nav
        class="flex-1 flex items-baseline max-w-screen-lg mx-auto px-6 xl:px-0 justify-between"
      >
        <!-- logo -->
        <div class="">
          <nuxt-link :to="localePath('/')" class="flex items-baseline focus:outline-none focus:ring-2">
            <div class="relative border w-8">
              <span
              class="absolute -top-6 left-0 h-8 w-full rounded-lg transform  bg-gradient-to-tr from-amber-400 to-fuchsia-700"
            ></span>
            </div>
            <h1 class="ml-2 text-2xl text-light-onSurface font-bold">
              Caribbeans
            </h1>
          </nuxt-link>
        </div>

        <!-- links -->
        <ul class="text-sm font-medium hidden lg:flex space-x-4">
          <li>
            <nuxt-link
              :to="localePath('/')"
              class="py-1 px-2 rounded-md opacity-50 hover:opacity-100 hover:bg-gray-100 transition-all duration-100"
              >Home</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="localePath('works')"
              href=""
              class="py-1 px-2 rounded-md opacity-50 hover:opacity-100 hover:bg-gray-100 transition-all duration-100"
              >{{ $t("common.navigation.works") }}</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="localePath('contact')"
              class="py-1 px-2 rounded-md opacity-50 hover:opacity-100 hover:bg-gray-100 transition-all duration-100"
              >{{$t('common.navigation.contact_us')}}</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    logs() {
      return {
        localePath : this.localePath('/works')
      } 
    }
  },
};
</script>

<style>
</style>