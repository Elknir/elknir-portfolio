<template>
  <main
    class="bg-cover bg-center bg-no-repeat bg-fixed overflow-clip"
    style="background-image: url('/bg-site.png')"
  >
    <SectionTitle bgColor="bg-cyan-300"> 01| Game Dev</SectionTitle>

    <div class="w-8/12 mx-auto">
      <SubsectionComponent subsectionText="Demo Reel">
        <iframe
          class="w-full aspect-video"
          src="https://www.youtube-nocookie.com/embed/s0RX6o-Gb9k?si=hQyX0f7HCMFz_3aG"
          title="YouTube video player"
          allow="accelerometer; encrypted-media; picture-in-picture;"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </SubsectionComponent>
    </div>

    <div class="w-8/12 mx-auto">
      <SubsectionComponent subsectionText="Softwares"> </SubsectionComponent>
    </div>

    <ScrollingText borderColor="border-y-cyan-300"></ScrollingText>

    <SectionTitle bgColor="bg-yellow-300"> 02| Web Dev</SectionTitle>

    <ScrollingText borderColor="border-y-yellow-300"></ScrollingText>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: { SubsectionComponent, ScrollingText, SectionTitle },
})

import SectionTitle from '@/components/SectionTitle.vue'
import ScrollingText from '@/components/ScrollingText.vue'
import SubsectionComponent from '@/components/SubsectionComponent.vue'
</script>
