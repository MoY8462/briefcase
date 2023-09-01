<template>
  <div>
    <img :src="url" :alt="url" />
    <h2>{{ title }}</h2>
    <h3>{{ description }}</h3>
  </div>
</template>
<script setup>
defineProps({
  url: String,
  title: String,
  description: String,
});
</script>
