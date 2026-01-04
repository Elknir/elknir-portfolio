<template>
  <main
    class="bg-cover bg-center bg-no-repeat bg-fixed overflow-clip"
    style="background-image: url('/bg-site.png')"
  >
    <Navbar />

    <!--  Hero Section  -->
    <section class="relative h-screen w-full overflow-hidden">
      <!-- Video BG -->
      <video
        autoplay
        loop
        muted
        playsinline
        class="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/heroBG.mp4" type="video/mp4" />
      </video>

      <!-- Dark Tint -->
      <div class="absolute inset-0 bg-black/30"></div>

      <!-- Contenu par-dessus la vidéo -->
      <div class="relative z-10 flex items-center justify-center h-full w-full"></div>
    </section>

    <SectionTitle bgColor="bg-cyan-300" id="game-dev"> 01| Game Dev</SectionTitle>

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
      <SubsectionComponent subsectionText="Softwares">
        <SubsectionItemList
          :items="softwares"
          :item-ids="[
            'unreal',
            'cpp',
            'unity',
            'csharp',
            'git',
            'gitlab',
            'steam',
            'fmod',
            'javascript',
            'typescript',
            'oculus',
          ]"
        />
      </SubsectionComponent>
    </div>

    <ScrollingText borderColor="border-y-cyan-300"></ScrollingText>

    <SectionTitle bgColor="bg-yellow-300" id="web-dev"> 02| Web Dev</SectionTitle>

    <div class="w-8/12 mx-auto">
      <SubsectionComponent subsectionText="Softwares">
        <SubsectionItemList
          :items="softwares"
          :item-ids="['javascript', 'typescript', 'git', 'gitlab']"
        />
      </SubsectionComponent>
    </div>

    <ScrollingText borderColor="border-y-yellow-300"></ScrollingText>

    <SectionTitle bgColor="bg-red-300" id="ui-ux"> 03| UI/UX Designer</SectionTitle>

    <div class="w-8/12 mx-auto">
      <SubsectionComponent subsectionText="Softwares">
        <SubsectionItemList :items="softwares" :item-ids="['figma', 'photoshop', 'affinity']" />
      </SubsectionComponent>
    </div>

    <ScrollingText borderColor="border-y-red-300"></ScrollingText>

    <SectionTitle bgColor="bg-green-300" id="video-editor"> 04| Video Editor</SectionTitle>

    <div class="w-8/12 mx-auto">
      <SubsectionComponent subsectionText="Softwares">
        <SubsectionItemList :items="softwares" :item-ids="['davinci', 'after-effects']" />
      </SubsectionComponent>
    </div>

    <ScrollingText borderColor="border-y-green-300"></ScrollingText>

    <SectionTitle bgColor="bg-purple-300"> 05| ???</SectionTitle>

    <div class="w-8/12 mx-auto">
      <SubsectionComponent subsectionText="Softwares">
        <SubsectionItemList :items="softwares" :item-ids="['unreal', 'cpp', 'git', 'gitlab']" />
      </SubsectionComponent>
    </div>

    <ScrollingText borderColor="border-y-purple-300" id="???"></ScrollingText>

    <SectionTitle bgColor="bg-gray-300" id="contacts"> 06| Contacts</SectionTitle>

    <div class="w-8/12 mx-auto">
      <SubsectionComponent subsectionText="Contacts">
        <SubsectionItemList :items="contacts" :item-ids="['mail']" />
      </SubsectionComponent>
    </div>
  </main>
</template>

<script setup lang="ts">
import { softwares, contacts } from '@/datas/subsectionDatas'
import SectionTitle from '@/components/SectionTitle.vue'
import ScrollingText from '@/components/ScrollingText.vue'
import SubsectionComponent from '@/components/subsections/SubsectionComponent.vue'
import SubsectionItemList from '@/components/subsections/SubsectionItemList.vue'
import Bubble from '@/components/Bubble.vue'
import Navbar from '@/components/Navbar.vue'
</script>
