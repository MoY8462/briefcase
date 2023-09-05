<template>
  <div class="flex flex-col gap-8">
    <section class="flex flex-col gap-3">
      <h1 class="text-green-dark text-2xl font-semibold">Portafolio</h1>
      <h3 class="text-gray text-base font-semibold">Proyectos recientes</h3>
    </section>
    <section
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      v-for="option in options"
    >
      <BaseCard
        :urlImage="option.urlImage"
        :title="option.title"
        :description="option.description"
        :urlHost="option.host"
      />
    </section>
  </div>
</template>
<script setup>
import { reactive } from "vue";

const options = reactive([
  {
    description: "Geoportal elaborado con SuperMap iClient para Vue.js",
    host: "https://main--glowing-klepon-6a3f24.netlify.app/view-2d/",
    title: "Nuxt 2 con SuperMap",
    urlImage: "/images/code.png",
  },
]);
</script>
