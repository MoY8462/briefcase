<template>
  <footer
    class="absolute bottom-0 left-0 right-0 w-full h-10 bg-green-dark"
    
  >
    <section class="w-full h-full px-5 flex flex-row justify-end">
      <BaseButton class="w-min" color="dark" icon="arrow_up" v-on:onClick="scrollToTop"></BaseButton>
    </section>
  </footer>
</template>

<script setup>

const scrollToTop = () => {
  console.log("top")
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>