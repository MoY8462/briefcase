<script setup>
defineProps({
  onClick: Function,
  color: String,
});
</script>
<template>
  <button
    class="w-full px-3 py-2 flex justify-center items-center text-white font-bold middle none center rounded-lg shadow-md transition-all hover:shadow-lg"
    :class="[
      color == 'lime'
        ? 'bg-green-lime shadow-green-lime/20 hover:shadow-green-lime/60'
        : 'bg-green-dark shadow-green-dark/20 hover:shadow-green-dark/60',
    ]"
    @click="onClick"
    data-ripple-light="true"
  >
    <slot>Clik Me</slot>
  </button>
</template>
