<template>
    <div>
        <img :src="url" :alt="url">
        <h2>{{ title }}</h2>
        <h3>{{ subtitle }}</h3>
    </div>
</template>
<script setup>
defineProps({
    url: String,
    title: String,
    subtitle: String
})
</script>