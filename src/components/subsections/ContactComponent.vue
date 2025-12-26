<template>
  <BaseItemComponent :image="contact.image" :name="contact.name">
    <template #metadata>{{ contact.value }}</template>
  </BaseItemComponent>
</template>

<script setup lang="ts">
import type { ContactItem } from '@/datas/interfaces.ts'
import BaseItemComponent from './BaseItemComponent.vue'

defineProps<{ contact: ContactItem }>()
</script>
