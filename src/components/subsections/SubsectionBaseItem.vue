<template>
  <div class="items-center flex p-2 transition-transform duration-300 hover:scale-110">
    <img :src="item.image" :alt="item.name" class="w-16 md:w-28 object-contain" />
    <div class="w-54">
      <div class="flex flex-col p-2 md:p-4 flex-1">
        <div class="relative">
          <div class="absolute bg-gray-500 inset-0 translate-x-1 translate-y-1 z-0"></div>
          <div class="bg-white px-3 py-1 z-10 relative max-w-full">
            <h3 class="text-black text-sm md:text-lg whitespace-nowrap">{{ item.name }}</h3>
          </div>
        </div>

        <!-- Slot pour la partie variable -->
        <p class="text-white text-xs md:text-base whitespace-nowrap mt-2">
          {{ item.subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SubsectionItems } from '@/datas/interfaces.ts'

defineProps<{ item: SubsectionItems }>()
</script>
