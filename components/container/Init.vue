<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 pt-24 bg-[url('~/assets/images/bg.svg')] bg-no-repeat w-full h-96 md:h-[571px]"
  >
    <section class="flex flex-col justify-center gap-4 px-10">
      <label class="text-white text-xl font-semibold">Ingeniero</label>
      <label class="text-green-dark font-semibold text-4xl">
        <span class="text-white">Hola,</span>
        Soy Moisés Sánchez
      </label>
      <label class="text-green-dark font-medium"
        >Ingeniero Mecatrónico y Front-End Developer</label
      >
      <BaseButton color="dark" class="max-w-[150px] uppercase mt-6"
        >Descargar CV</BaseButton
      >
    </section>
    <section class="hidden md:flex">Img</section>
  </div>
</template>
