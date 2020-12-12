<template>
  <Tile>
    <h1 class="font-bold text-6xl opacity-70">v-foring about it</h1>
    <div class="mt-12 bg-gray-300 rounded-lg pb-6">
      <table class="text-left text-xl mx-auto">
        <thead>
          <tr>
            <th class="pt-4 w-20">
              <ListHead
                @order:asc="orderAsc('id')"
                @order:des="orderDesc('id')"
              >
                id
              </ListHead>
            </th>
            <th class="pl-16 pt-4 w-20">
              <ListHead
                @order:asc="orderAsc('name')"
                @order:des="orderDesc('name')"
              >
                item
              </ListHead>
            </th>
            <th class="pl-16 pt-4 w-20">
              <ListHead
                @order:asc="orderAsc('count')"
                @order:des="orderDesc('count')"
              >
                amount
              </ListHead>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td class="pt-4">{{ item.id }}</td>
            <td class="pl-16 pt-4">{{ item.name }}</td>
            <td class="pl-16 pt-4">{{ item.count }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Tile>
</template>

<script>
import Tile from "~/components/common/Tile.vue";
import ListHead from "~/components/ListHead.vue";
export default {
  components: {
    Tile,
    ListHead,
  },
  data() {
    return {
      items: [
        {
          name: "iPhone",
          id: 1,
          count: 2,
        },
        {
          name: "HP",
          id: 2,
          count: 29,
        },
        {
          name: "Folder",
          id: 3,
          count: 212,
        },
        {
          name: "Flower",
          id: 4,
          count: 20,
        },
      ],
    };
  },
  methods: {
    orderAsc(key) {
      console.log("sorting by " + key);
      // (a, b) => (a[key] > b[key] ? -1 : 1)
      this.items.sort((a, b) => {
        if (a[key] < b[key]) {
          return -1;
        }
        if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      });
    },
    orderDesc(key) {
      console.log("sorting by " + key);
      this.items.sort((a, b) => {
        if (a[key] < b[key]) {
          return 1;
        }
        if (a[key] > b[key]) {
          return -1;
        }
        return 0;
      });
    },
  },
};
</script>

<style>
</style>