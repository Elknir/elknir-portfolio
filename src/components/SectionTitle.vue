<template>
  <div class="inline-block p-4 md:p-8 lg:p-16">
    <div class="bg-white">
      <!-- Upper Content -->
      <div class="bg-black text-white px-3 md:py-1 font-mono text-[11px] md:text-sm">
        • now entering
      </div>

      <!-- Lower Content -->
      <div class="flex">
        <!-- Main Text -->
        <div
          class="px-4 md:px-6 lg:px-8 md:py-2 lg:py-4 sm:w-32 md:w-64 lg:w-140 flex items-center"
        >
          <h2 class="text-2xl md:text-4xl lg:text-5xl flex-1 whitespace-nowrap">
            <slot></slot>
          </h2>
        </div>

        <!-- Color Cube -->
        <div class="w-12 md:w-24 lg:w-32" :class="bgColor"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    bgColor?: string
  }>(),
  {
    bgColor: 'bg-cyan-400',
  },
)
</script>
