<template>
  <div class="perspective-midrange [perspective-origin:right_center] py-12">
    <div
      class="whitespace-nowrap bg-black py-4 border-4 w-screen"
      :class="borderColor"
      :style="{
        transform: `rotateX(-4deg) rotateY(8deg) scale(1.2) `,
      }"
    >
      <div class="inline-block animate-scroll uppercase">
        <!-- Scrolling text -->
        <span
          v-for="i in repeatCount"
          :key="`group1-${i}`"
          class="text-4xl font-bold text-white mx-4"
        >
          {{ text }}
        </span>

        <!-- 2nd group for seamless loop-->
        <span
          v-for="i in repeatCount"
          :key="`group2-${i}`"
          class="text-4xl font-bold text-white mx-4"
        >
          {{ text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const speed: number = 30
const repeatCount: number = 7
const text: string = 'section end //'

withDefaults(
  defineProps<{
    borderColor?: string
  }>(),
  {
    borderColor: 'border-y-cyan-300',
  },
)
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-scroll {
  animation: scroll v-bind(speed + 's') linear infinite;
}
</style>
