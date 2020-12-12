<template>
  <div class="antialiased text-light-onSurface pt-16 pb-64 bg-gray-50">
    <AppNavigation />

    <Nuxt />
  </div>
</template>

<script>
import AppNavigation from "~/components/common/AppNavigation.vue";

export default{

  components: {
    AppNavigation,
  }
}
<script/>

