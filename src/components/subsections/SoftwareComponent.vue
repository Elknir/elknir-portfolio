<template>
  <BaseItemComponent :image="software.image" :name="software.name">
    <template #metadata>{{ experienceText }}</template>
  </BaseItemComponent>
</template>

<script setup lang="ts">
import type { SoftwareItem } from '@/datas/interfaces.ts'
import { computed } from 'vue'
import BaseItemComponent from './BaseItemComponent.vue'

const props = defineProps<{ software: SoftwareItem }>()

const experienceText = computed(() => {
  if (props.software.years < 1) {
    const months = props.software.years.toString().replace('0.', '')
    return `${months} Mois`
  }
  return `${props.software.years} Ans`
})
</script>
