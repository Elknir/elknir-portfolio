<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 bg-black/85 backdrop-blur-md border-b border-white text-white"
  >
    <div class="max-w-[1920px] mx-auto px-4 md:px-16">
      <div class="flex items-center justify-between h-16 md:h-32">
        <div class="shrink-0 font-black tracking-tighter text-xl md:text-4xl uppercase">
          PORTFOLIO
        </div>

        <div class="hidden md:block">
          <div class="flex items-baseline space-x-12">
            <a
              v-for="link in navLinks"
              :key="link.id"
              :href="'#' + link.id"
              class="group transition-colors duration-300 text-xl font-bold uppercase tracking-widest"
              :class="'hover:text-' + link.color"
            >
              {{ link.name }}
              <span
                class="inline-block transition-transform duration-300 group-hover:translate-x-2"
              >
                [→]
              </span>
            </a>
          </div>
        </div>

        <div class="md:hidden flex items-center">
          <button
            @click="isOpen = !isOpen"
            class="p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            <svg
              v-if="!isOpen"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-show="isOpen" class="md:hidden bg-black/95 border-t border-white/20">
        <div class="px-4 pt-2 pb-6 space-y-1">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="'#' + link.id"
            @click="isOpen = false"
            class="block py-4 text-base font-medium border-b border-white/10 last:border-none uppercase tracking-wider"
          >
            {{ link.name }} [→]
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { navLinks } from '@/datas/sectionsDatas.ts'

const isOpen = ref(false)
</script>
