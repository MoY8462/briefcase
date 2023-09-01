<template>
  <div>
    <h1 class="text-green-dark text-2xl font-semibold">Portafolio</h1>
    <h3 class="text-gray text-base font-semibold">Proyectos recientes</h3>
    <!-- <section v-for="option in options">
      <BaseCard 
        :url="option.url"
        :title="option.title"
        :description="option.description" />
    </section> -->
  </div>
</template>
<script setup>
import { ref } from "vue"

const options = ref([
  {
    url: "./public/code.png",
    title: "Nuxt 2 con SuperMap",
    description: "Geoportal elaborado con SuperMap iClient para Vue.js"
  }
])

</script>
