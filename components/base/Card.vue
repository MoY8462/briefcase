<template>
  <div
    class="flex flex-col gap-2 px-2 pt-2 pb-4 border-2 border-green-lime rounded bg-green-lime/30"
  >
    <section
      class="group relative w-full h-56 rounded transition ease-in-out delay-150"
    >
      <img
        class="w-full h-full rounded blur-0 group-hover:blur-sm transition-all ease-out delay-150"
        src="~/public/code.png"
        :alt="urlImage"
      />
      <!-- <Transition> -->
      <div
        class="flex absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ease-out delay-300 flex-row justify-center items-center gap-12 p-4"
      >
        <BaseButton
          color="lime"
          class="!rounded-full w-min uppercase scale-150 shadow-xl shadow-green-lime/60 hover:bg-green-teal"
          icon="doc"
        ></BaseButton>
        <BaseButton
          color="lime"
          class="!rounded-full w-min uppercase scale-150 shadow-xl shadow-green-lime/60 hover:bg-green-teal"
          icon="code"
        ></BaseButton>
      </div>
      <!-- </Transition> -->
    </section>
    <h2 class="text-green-teal text-base font-semibold">{{ title }}</h2>
    <h3 class="text-gray text-sm font-semibold">{{ description }}</h3>
  </div>
</template>
<script setup>
defineProps({
  urlImage: String,
  title: String,
  description: String,
});
</script>
