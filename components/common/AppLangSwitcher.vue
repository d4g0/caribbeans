<template>
  <div>
    <div class="relative">
      <button
        ref="controlBtn"
        :aria-label="$t('common.langSwitcher.label')"
        aria-haspopup="true"
        aria-controls="lang_menu"
        class="p-2  w-full h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-500"
        :class="clasess"
      >
        <svg
          
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current w-full h-full"
          :class="svgClasess"
        >
          <path
            d="M3 5H15M9 3V5M10.0482 14.5C8.52083 12.9178 7.28073 11.0565 6.41187 9M12.5 18H19.5M11 21L16 11L21 21M12.7511 5C11.7831 10.7702 8.06969 15.6095 3 18.129"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <!-- language options -->
      <transition name="fade-from-bottom">
        <div
          id="lang_menu"
          ref="controlMenu"
          v-show="switchIsOpen"
          class="absolute z-20 bottom-12 left-0 bg-white border rounded-md py-2 px-4 shadow-md"
          aria-label="Language Options"
        >
          <ul :aria-label="$t('common.langSwitcher.optionsLabel')">
            <li v-for="locale in availableLocales" :key="locale.code">
              <nuxt-link
                class="hover:bg-gray-100 block py-1 px-2 rounded-lg text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-500"
                :to="switchLocalePath(locale.code)"
                @click.native="toogleSwitch('close')"
                >{{ locale.name }}</nuxt-link
              >
            </li>
          </ul>
        </div>
      </transition>
    </div>

    <!-- overlay -->
    <transition name="fade">
      <div
        v-if="switchIsOpen"
        @click="toogleSwitch('close')"
        class="bg-teal-2000 fixed z-10 inset-0"
      ></div>
    </transition>

    <!-- TEST -->
    <!-- <button @click="test">focus</button> -->
    <!-- <a href="#" id="a2" class="focus:ring-4 focus:ring-amber-500">a2</a> -->
  </div>
</template>

<script>
import { useEventListener, useTimeoutFn } from "@vueuse/core";
import {
  computed,
  onMounted,
  reactive,
  ref,
  toRefs,
} from "@vue/composition-api";
export default {
  props: {
    clasess: {
      type: String,
      default:
        "rounded-og border dark:border-gray-500 hover:bg-gray-300  dark:hover:bg-dark-surfaceElevated",
    },
    svgClasess: {
      type: String,
      default: "opacity-75 hover:opacity-100",
    },
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },

  setup() {
    const controlBtn = ref(null);
    const controlMenu = ref(null);
    const state = reactive({
      switchIsOpen: false,
    });

    function toogleSwitch(switcState) {
      // switcState: 'open' || 'close' || null -> toggle
      if (!switcState) {
        state.switchIsOpen = !state.switchIsOpen;
        return;
      }
      switcState === "open"
        ? (state.switchIsOpen = true)
        : (state.switchIsOpen = false);
    }

    function handleKey(evt) {
      if (evt?.target == "Escape" || evt.code == 27) {
        toogleSwitch("close");
      }
    }

    function handleClick(evt) {
      if (process.client) {
        // console.log(evt.target);

        // if was in btn
        if (controlBtn.value.contains(evt?.target)) {
          toogleSwitch();

          if (state.switchIsOpen) {
            const { isActive, start, stop } = useTimeoutFn(() => {
              controlMenu.value.querySelector("a").focus();
            }, 1);
            start();
          }
        }
      }
    }

    // -------
    // EVENTS
    // -------
    useEventListener("keyup", handleKey);
    useEventListener("click", handleClick);

    // test

    function test(params) {
      if (process.client) {
        document.querySelector("#a2").focus();
      }
    }

    return {
      toogleSwitch,
      controlBtn,
      controlMenu,
      ...toRefs(state),
      test,
    };
  },
};
</script>

<style>
</style>