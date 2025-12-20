<template>
  <div class="inline-block p-16">
    <div class="bg-white">
      <!-- Upper Content -->
      <div class="bg-black text-white px-3 py-1 text-xs font-mono">• now entering</div>

      <!-- Lower Content -->
      <div class="flex">
        <!-- Main Text -->
        <div class="px-8 pr-64 py-4 flex items-center">
          <h2 class="text-6xl">
            <slot></slot>
          </h2>
        </div>

        <!-- Color Cube -->
        <div class="w-32" :class="bgColor"></div>
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
) // cyan par défaut
</script>

<style scoped></style>
