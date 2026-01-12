<template>
  <form @submit.prevent="handleSubmit" class="bg-[#151515] p-8">
    <div class="space-y-12">
      <div class="border-b border-white/10 pb-12">
        <!--
                mt-10
        -->
        <div class="grid grid-cols-1 gap-x-6 gap-y-8">
          <div class="sm:col-span-4">
            <label for="email" class="block text-sm/6 font-medium text-white">Votre Email </label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
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
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-center gap-x-6">
      <button
        type="submit"
        class="rounded-md bg-indigo-500 px-10 py-3 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Envoyer Mail
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
const handleSubmit = () => {
  // Logic submit here
}
</script>
