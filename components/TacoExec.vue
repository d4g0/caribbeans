<template>
  <div class=" ">
    <div
      class="bg-gray-400 max-w-screen-md mx-auto px-12 md:px-6 py-8 rounded-xl"
    >
      <h1 class="font-bold text-6xl">Tacos Time</h1>
      <div class="text-center mt-10">
          <input type="number" name="" v-model="count" class="text-3xl p-5" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: "",
        count: 0,
    };
  },
  methods: {
      increment(){
          this.count++;
      },
      decrement(){
          this.count--;
      },
    getTaco() {
      this.order = "🌮️";
    },
  },

  watch: {
    order(newValue, oldValue) {
      setTimeout(() => {
        this.order = "your order was gone";
      }, "300");
    },
    count(newCount,oldCount){
        console.log(
            `
            from ${oldCount} to ${newCount}
            `
        )
    }
  },
};
</script>

<style>
</style>