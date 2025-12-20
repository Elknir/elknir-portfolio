<template>
  <main
    class="bg-cover bg-center bg-no-repeat bg-fixed overflow-clip"
    style="background-image: url('/bg-site.png')"
  >
    <SectionTitle bgColor="bg-cyan-300"> 01| Game Dev</SectionTitle>

    <div class="w-40">
      <SubsectionTitle subsectionText="Demo Reel">
        <iframe
          src="https://www.youtube-nocookie.com/embed/s0RX6o-Gb9k?si=hQyX0f7HCMFz_3aG"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </SubsectionTitle>
    </div>

    <SrcollingText borderColor="border-y-cyan-300"></SrcollingText>

    <SectionTitle bgColor="bg-yellow-300"> 02| Web Dev</SectionTitle>

    <SrcollingText borderColor="border-y-yellow-300"></SrcollingText>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: { SubsectionTitle, SrcollingText, SectionTitle },
})

import SectionTitle from '@/components/SectionTitle.vue'
import SrcollingText from '@/components/SrcollingText.vue'
import SubsectionTitle from '@/components/SubsectionTitle.vue'
</script>

<style scoped></style>
