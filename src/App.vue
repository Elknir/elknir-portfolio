<template>
  <main class="bg-cover bg-center bg-no-repeat bg-fixed overflow-clip">
    <!-- bg-cyan-300 bg-yellow-300 bg-red-300 bg-green-300 bg-purple-300 bg-orange-300
        hover:text-cyan-300 hover:text-yellow-300 hover:text-red-300 hover:text-green-300 hover:text-purple-300 hover:text-orange-300
        border-y-cyan-300 border-y-yellow-300 border-y-red-300 border-y-green-300 border-y-purple-300 border-y-orange-300-->

    <!--    animate-slide-right-->

    <div class="fixed inset-0 z-[-1]">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style="background-image: url('/bg-site.png')"
      ></div>

      <div
        class="absolute inset-0 transition-colors duration-700 ease-in-out mix-blend-multiply opacity-30"
        :class="activeColorClass"
      ></div>
    </div>

    <NavbarItem />

    <!--  Hero  -->
    <section class="relative h-screen w-full overflow-hidden">
      <video
        autoplay
        loop
        muted
        playsinline
        class="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/heroBG.mp4" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-black/40"></div>

      <div
        class="absolute inset-0 flex flex-col md:flex-row items-center justify-start md:items-end md:justify-start z-10"
      >
        <div class="relative">
          <!-- Image -->
          <img src="/ELKNIR.png" alt="Avatar" class="h-[85vh] w-auto object-contain md:ml-12" />

          <div
            class="absolute bottom-[15%] left-[70%] text-white text-[30vh] leading-none whitespace-nowrap font-dfp z-20"
            style="mix-blend-mode: difference"
          >
            ELKNIR
          </div>

          <!-- Frame corners around head -->
          <div
            class="absolute top-[3%] left-[52%] -translate-x-1/2 w-[35vh] h-[35vh] pointer-events-none"
          >
            <!-- Top left corner -->
            <div
              class="absolute top-0 left-0 w-[20%] h-[20%] border-t-[0.6vh] border-l-[0.6vh] border-white"
            ></div>

            <!-- Top right corner -->
            <div
              class="absolute top-0 right-0 w-[20%] h-[20%] border-t-[0.6vh] border-r-[0.6vh] border-white"
            ></div>

            <!-- Bottom left corner -->
            <div
              class="absolute bottom-0 left-0 w-[20%] h-[20%] border-b-[0.6vh] border-l-[0.6vh] border-white"
            ></div>

            <!-- Bottom right corner -->
            <div
              class="absolute bottom-0 right-0 w-[20%] h-[20%] border-b-[0.6vh] border-r-[0.6vh] border-white"
            ></div>

            <!-- Text "user id:" -->
            <!-- "&gt;" for > -->
            <!-- -mb-[0.8vh] to align perfectly -->
            <div
              class="absolute bottom-0 left-full ml-[1vh] text-white text-[3vh] whitespace-nowrap leading-none -mb-[0.8vh]"
            >
              &gt; User id :
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--  Game Dev  -->
    <div :id="sectionsConfig.gameDev.id" class="section-observer">
      <SectionTitle :id="sectionsConfig.gameDev.id" :bgColor="'bg-' + sectionsConfig.gameDev.color">
        01| {{ sectionsConfig.gameDev.name }}
      </SectionTitle>
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
      <!--
            <ScrollingText :borderColor="'border-y-' + sectionsConfig.gameDev.color" />
      -->
    </div>

    <!--  Web Dev  -->
    <div :id="sectionsConfig.webDev.id" class="section-observer">
      <SectionTitle :id="sectionsConfig.webDev.id" :bgColor="'bg-' + sectionsConfig.webDev.color">
        02| {{ sectionsConfig.webDev.name }}
      </SectionTitle>
      <div class="w-8/12 mx-auto">
        <SubsectionComponent subsectionText="Softwares">
          <SubsectionItemList
            :items="softwares"
            :item-ids="['javascript', 'typescript', 'git', 'gitlab']"
          />
        </SubsectionComponent>
      </div>
      <!--
            <ScrollingText :borderColor="'border-y-' + sectionsConfig.webDev.color" />
      -->
    </div>

    <!--  UI UX  -->
    <div :id="sectionsConfig.uiUx.id" class="section-observer">
      <SectionTitle :id="sectionsConfig.uiUx.id" :bgColor="'bg-' + sectionsConfig.uiUx.color">
        03| {{ sectionsConfig.uiUx.name }}
      </SectionTitle>
      <div class="w-8/12 mx-auto">
        <SubsectionComponent subsectionText="Softwares">
          <SubsectionItemList :items="softwares" :item-ids="['figma', 'photoshop', 'affinity']" />
        </SubsectionComponent>
      </div>
      <!--
            <ScrollingText :borderColor="'border-y-' + sectionsConfig.uiUx.color" />
      -->
    </div>

    <!--  Video Editor  -->
    <div :id="sectionsConfig.video.id" class="section-observer">
      <SectionTitle :id="sectionsConfig.video.id" :bgColor="'bg-' + sectionsConfig.video.color">
        04| {{ sectionsConfig.video.name }}
      </SectionTitle>
      <div class="w-8/12 mx-auto">
        <SubsectionComponent subsectionText="Softwares">
          <SubsectionItemList :items="softwares" :item-ids="['davinci', 'after-effects']" />
        </SubsectionComponent>
      </div>
      <!--
            <ScrollingText :borderColor="'border-y-' + sectionsConfig.video.color" />
      -->
    </div>
    <!--  Mystery  -->
    <div :id="sectionsConfig.mystery.id" class="section-observer">
      <SectionTitle :id="sectionsConfig.mystery.id" :bgColor="'bg-' + sectionsConfig.mystery.color">
        05| {{ sectionsConfig.mystery.name }}
      </SectionTitle>
      <div class="w-8/12 mx-auto">
        <SubsectionComponent subsectionText="Softwares">
          <SubsectionItemList :items="softwares" :item-ids="['unreal', 'cpp', 'git', 'gitlab']" />
        </SubsectionComponent>
      </div>
      <!--      <ScrollingText :borderColor="'border-y-' + sectionsConfig.mystery.color" />-->
    </div>

    <!-- Contacts  -->
    <div :id="sectionsConfig.contacts.id" class="section-observer">
      <SectionTitle
        :id="sectionsConfig.contacts.id"
        :bgColor="'bg-' + sectionsConfig.contacts.color"
      >
        06| {{ sectionsConfig.contacts.name }}
      </SectionTitle>
      <div class="w-8/12 mx-auto">
        <SubsectionComponent subsectionText="Contacts">
          <SubsectionItemList :items="contacts" :item-ids="['mail']" />
        </SubsectionComponent>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { softwares, contacts } from '@/datas/subsectionDatas'
import SectionTitle from '@/components/SectionTitle.vue'
import SubsectionComponent from '@/components/subsections/SubsectionComponent.vue'
import SubsectionItemList from '@/components/subsections/SubsectionItemList.vue'
import NavbarItem from '@/components/NavbarComponent.vue'
import { sectionsConfig } from '@/datas/sectionsDatas.ts'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const currentSectionId = ref('hero')

// On calcule la classe CSS bg-XXX en fonction de l'ID actif
const activeColorClass = computed(() => {
  // Si on est sur le hero, on ne met pas de couleur (ou une couleur par défaut)
  if (currentSectionId.value === 'hero') return 'bg-transparent'

  // On cherche la config correspondante à l'ID actif
  const section = Object.values(sectionsConfig).find((s) => s.id === currentSectionId.value)

  // Si trouvé, on retourne la classe tailwind bg-[couleur]
  return section ? `bg-${section.color}` : 'bg-transparent'
})

let observer: IntersectionObserver | null = null

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '-45% 0px -45% 0px',

    threshold: 0,
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        currentSectionId.value = entry.target.id
      }
    })
  }, options)

  // On observe le Hero
  const heroEl = document.getElementById('hero')
  if (heroEl) observer.observe(heroEl)

  // On observe toutes les sections définies dans sectionsConfig
  // Note: J'ai ajouté la classe .section-observer aux divs enveloppantes dans le template pour cibler facilement
  const sections = document.querySelectorAll('.section-observer')
  sections.forEach((section) => {
    observer?.observe(section)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
