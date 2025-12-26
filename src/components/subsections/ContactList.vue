<template>
  <div class="grid md:grid-cols-2 p-8 px-12 bg-[#151515]">
    <ContactComponent v-for="contact in orderedContacts" :key="contact.id" :contact="contact" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { contacts } from '@/datas/contacts.ts'
import ContactComponent from '@/components/subsections/ContactComponent.vue'

const props = withDefaults(
  defineProps<{
    contactIds?: string[]
  }>(),
  {
    contactIds: undefined,
  },
)

const orderedContacts = computed(() => {
  if (!props.contactIds) {
    return contacts
  }

  return props.contactIds
    .map((id) => contacts.find((contact) => contact.id === id))
    .filter((contact) => contact !== undefined)
})
</script>
