<template>
  <div class="grid md:grid-cols-2 p-8 px-12 bg-[#151515]">
    <SoftwareComponent
      v-for="software in orderedSoftwares"
      :key="software.id"
      :software="software"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { softwares } from '@/datas/softwares.ts'
import SoftwareComponent from '@/components/subsections/SoftwareComponent.vue'

const props = withDefaults(
  defineProps<{
    softwareIds?: string[]
  }>(),
  {
    softwareIds: undefined,
  },
)

const orderedSoftwares = computed(() => {
  if (!props.softwareIds) {
    return softwares
  }

  // Map sur softwareIds pour garder l'ordre exact
  return props.softwareIds
    .map((id) => softwares.find((software) => software.id === id))
    .filter((software) => software !== undefined) // Retire les IDs invalides
})
</script>
