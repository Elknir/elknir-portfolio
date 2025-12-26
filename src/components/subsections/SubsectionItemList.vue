<!-- SubsectionItemList.vue -->
<template>
  <div class="grid md:grid-cols-2 p-8 px-12 bg-[#151515]">
    <SubsectionBaseItem v-for="item in orderedItems" :key="item.id" :item="item" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { SubsectionItems } from '@/datas/interfaces.ts'
import SubsectionBaseItem from './SubsectionBaseItem.vue'

const props = withDefaults(
  defineProps<{
    items: SubsectionItems[]
    itemIds?: string[]
  }>(),
  {
    itemIds: undefined,
  },
)

const orderedItems = computed(() => {
  if (!props.itemIds) {
    return props.items
  }

  return props.itemIds
    .map((id) => props.items.find((item) => item.id === id))
    .filter((item) => item !== undefined)
})
</script>
