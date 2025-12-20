<template>
  <div
    class="flex min-w-[300px] px-6 py-4 rounded-tr-xl"
    :style="{
      background: 'linear-gradient(to bottom, #1a1a1a 0%, #1a1a1a 70%, rgba(26, 26, 26, 0) 100%)',
    }"
  >
    <div class="flex direction-vertical items-center">
      <span class="text-white text-2xl">+ {{ subsectionText }}</span>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    subsectionText?: string
  }>(),
  {
    subsectionText: 'Bande Demo',
  },
)
</script>
