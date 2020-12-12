<template>
  <div class="text-light-onSurface">
    <header
      class="bg-white border-b h-16 fixed z-30 top-0 right-0 w-full flex items-center"
    >
      <nav
        class="flex-1 flex items-baseline max-w-screen-lg mx-auto px-6  xl:px-0 justify-between"
      >
        <!-- logo -->
        <div class="">
          <a href="/" class="flex items-baseline">
            <p class="h-8 w-8 rounded-lg transform translate-y-2 bg-gradient-to-tr from-amber-400 to-fuchsia-700"></p>
            <h1 class="ml-2 text-2xl text-light-onSurface font-bold">Caribbeans</h1>
          </a>
        </div>

        <!-- links -->
          <ul class="text-sm font-medium hidden lg:flex space-x-4">
            <li>
              <a
                href="/"
                class="p-1 rounded-md opacity-70 hover:opacity-100 hover:bg-gray-100 transition-all duration-100"
                >Home</a
              >
            </li>
            <li>
              <a
                href="/experiments"
                class="p-1 rounded-md opacity-70 hover:opacity-100 hover:bg-gray-100 transition-all duration-100"
                >Works</a
              >
            </li>
            <li>
              <a
                href="/contact"
                class="p-1 rounded-md opacity-70 hover:opacity-100 hover:bg-gray-100 transition-all duration-100"
                >Contact Us</a
              >
            </li>
          </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>