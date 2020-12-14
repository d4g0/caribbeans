<template>
  <div class="">
    <article class="text-left flex">
      <div>
        <div class="w-12 h-12 rounded-kush bg-gray-200 p-1.5">
          <div v-html="item.icon"></div>
        </div>
      </div>
      <div class="ml-4">
        <h1 class="font-medium text-xl leading-tight">{{ item.title }}</h1>
        <p v-html="item.body" class="mt-2 text-sm">
        </p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {
          title: "Blazing fast speed",
          icon: `
          <svg
            
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current"
          >
            <path
              d="M13 10V3L4 14H11L11 21L20 10L13 10Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          `,
          body: `We don't like our costumers wait for us. 
          So we provide world class performance <strong>metrics</strong>.`,
        };
      },
    },
  },
};
</script>

<style>
</style>