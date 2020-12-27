<template>
  <section :aria-labelledby="toId(item.title)" class="text-left flex">
    <div>
      <div class="w-12 h-12 rounded-kush bg-gray-200 p-1.5">
        <div v-html="item.icon" ref="svgContainer" ></div>
      </div>
    </div>
    <header class="ml-4">
      <h3 :id="toId(item.title)" class="font-medium text-xl leading-tight">
        {{ item.title }}
      </h3>
      <p v-html="item.body" class="mt-2 text-sm"></p>
    </header>
  </section>
</template>

<script>
import { onMounted, ref } from "@vue/composition-api";
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
          iconTitle: "",
        };
      },
    },
  },
  setup({ item }) {
    const svgContainer = ref(null)
    onMounted(() => {
      if (process.client) {
        svgContainer.value.querySelector('svg').setAttribute('title',item.iconTitle)
      }
    });
    return {
      toId: (str = "") => str.toLowerCase().split(" ").join("-"),
      svgContainer
    };
  },
};
</script>

<style>
</style>