<template>
  <div class="relative w-full pb-12">
    <!-- Title    -->
    <div
      class="absolute w-full px-6 py-4 rounded-tr-xl"
      :style="{
        background: 'linear-gradient(to bottom, #1a1a1a 0%, #1a1a1a 70%, rgba(26, 26, 26, 0) 100%)',
        zIndex: 100,
        top: 0,
        left: 0,
      }"
    >
      <span class="text-white text-2xl">+ {{ subsectionText }}</span>
    </div>

    <div class="pt-11">
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
