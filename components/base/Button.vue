<script setup>
defineProps({
  color: String,
  icon: String,
});
</script>
<template>
  <button
    class="w-full px-2 py-2 flex justify-center gap-4 items-center text-white font-bold middle none center rounded-lg shadow-md transition-all hover:shadow-lg"
    :class="[
      color == 'lime'
        ? 'bg-green-lime shadow-green-lime/20 hover:shadow-green-lime/60'
        : 'bg-green-dark shadow-green-dark/20 hover:shadow-green-dark/60',
    ]"
    @click="$emit('onClick')"
    data-ripple-light="true"
  >
    <slot></slot>
    <svg v-if="icon" class="icon w-5 h-5" :class="icon"></svg>
  </button>
</template>
