<template>
  <div class="items-center flex p-2">
    <img :src="software.image" :alt="software.name" class="w-24 object-contain" />
    <div class="w-64">
      <div class="flex flex-col p-4 flex-1">
        <div class="relative">
          <div class="absolute bg-gray-500 inset-0 translate-x-1 translate-y-1 z-0"></div>

          <!-- Nom dans un rectangle blanc -->
          <div class="bg-white px-3 py-1 z-10 relative max-w-full">
            <h3 class="text-black text-sm whitespace-nowrap">{{ software.name }}</h3>
          </div>
        </div>

        <!-- Années d'expérience en blanc -->
        <p class="text-white text-sm whitespace-nowrap mt-2">{{ experienceText }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Software } from '@/datas/softwares'
import { computed } from 'vue'

const props = defineProps<{
  software: Software
}>()

const experienceText = computed(() => {
  if (props.software.years < 1) {
    const months = props.software.years.toString().replace('0.', '')
    return `${months} Mois`
  }
  return `${props.software.years} Ans`
})
</script>
