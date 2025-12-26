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

    <SectionTitle bgColor="bg-yellow-300"> 02| Web Dev</SectionTitle>

    <div class="w-8/12 mx-auto">
      <SubsectionComponent subsectionText="Softwares">
        <SubsectionItemList
          :items="softwares"
          :item-ids="['javascript', 'typescript', 'git', 'gitlab']"
        />
      </SubsectionComponent>
    </div>

    <ScrollingText borderColor="border-y-yellow-300"></ScrollingText>

    <SectionTitle bgColor="bg-red-300"> 03| UI/UX Designer</SectionTitle>

    <div class="w-8/12 mx-auto">
      <SubsectionComponent subsectionText="Softwares">
        <SubsectionItemList :items="softwares" :item-ids="['figma', 'photoshop', 'affinity']" />
      </SubsectionComponent>
    </div>

    <ScrollingText borderColor="border-y-red-300"></ScrollingText>

    <SectionTitle bgColor="bg-green-300"> 04| Video Editor</SectionTitle>

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

    <ScrollingText borderColor="border-y-purple-300"></ScrollingText>

    <SectionTitle bgColor="bg-gray-300"> 06| Contacts</SectionTitle>

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
</script>
