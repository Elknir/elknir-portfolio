<template>
  <form ref="formRef" @submit.prevent="sendEmail" class="bg-[#151515] p-8">
    <div class="space-y-12">
      <div class="border-b border-white/10 pb-12">
        <div class="grid grid-cols-1 gap-x-6 gap-y-8">
          <div class="sm:col-span-4">
            <label for="email" class="block text-sm/6 font-medium text-white">Votre Email</label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="subject" class="block text-sm/6 font-medium text-white">Objet</label>
            <div class="mt-2">
              <input
                id="subject"
                name="subject"
                type="text"
                required
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="message" class="block text-sm/6 font-medium text-white">Message</label>
            <div class="mt-2">
              <textarea
                id="message"
                name="message"
                rows="8"
                required
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="feedbackMessage"
      :class="[
        'mt-4 text-center text-sm font-semibold',
        isError ? 'text-red-500' : 'text-green-500',
      ]"
    >
      {{ feedbackMessage }}
    </div>

    <div class="mt-6 flex items-center justify-center gap-x-6">
      <button
        type="submit"
        :disabled="isLoading"
        class="rounded-md bg-indigo-500 px-10 py-3 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ isLoading ? 'Envoi en cours...' : 'Envoyer Mail' }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const formRef = ref<HTMLFormElement | null>(null)
const isLoading = ref(false)
const feedbackMessage = ref('')
const isError = ref(false)

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const sendEmail = () => {
  // Reset des messages
  feedbackMessage.value = ''
  isError.value = false

  // Vérification de sécurité basique
  if (!formRef.value) return

  isLoading.value = true

  // Envoi via EmailJS
  emailjs
    .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.value, {
      publicKey: PUBLIC_KEY,
    })
    .then(
      () => {
        // SUCCÈS
        feedbackMessage.value = 'Message envoyé avec succès !'
        isError.value = false
        formRef.value?.reset() // On vide les champs
      },
      (error) => {
        // ERREUR
        console.error('FAILED...', error.text)
        feedbackMessage.value = 'Une erreur est survenue, veuillez réessayer.'
        isError.value = true
      },
    )
    .finally(() => {
      // Dans tous les cas, on arrête le chargement
      isLoading.value = false
    })
}
</script>
