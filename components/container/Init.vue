<template>
  <div
    class="relative grid grid-cols-1 md:grid-cols-2 gap-6 px-5 pt-24 bg-[url('~/assets/images/bg.svg')] bg-no-repeat bg-cover w-full h-96 md:h-[571px]"
  >
    <section class="flex flex-col justify-center gap-1 md:gap-4 px-10">
      <label class="text-white text-base md:text-xl font-semibold"
        >Ingeniero</label
      >
      <label class="text-green-dark font-semibold text-2xl md:text-4xl">
        <span class="text-white">Hola,</span>
        Soy Moisés Sánchez
      </label>
      <label class="text-green-dark font-medium text-base md:text-xl"
        >Ingeniero Mecatrónico y Front-End Developer</label
      >
      <BaseButton color="dark" class="max-w-[150px] uppercase mt-6"
        >Descargar CV</BaseButton
      >
    </section>
    <section class="hidden md:flex">Img</section>
    <section
      class="absolute right-[12px] bottom-0 h-full flex flex-col justify-center items-center"
    >
      <label class="relative w-6 h-20">
        <span
          class="absolute rotate-90 top-0 right-[6px] bottom-0 text-base text-green-dark font-semibold"
          >Sigueme</span
        >
      </label>
      <img class="w-5 h-24 pb-[10px]" src="~/assets/icons/line.svg" alt="" />
      <div class="flex flex-col gap-2">
        <a href="#">
          <img
            class="w-5 h-5"
            src="~/assets/icons/linkedin.svg"
            alt="Icono de Linkedin"
          />
        </a>
        <a href="https://github.com/MoY8462">
          <img
            class="w-5 h-5"
            src="~/assets/icons/github.svg"
            alt="Icono de GitHub"
          />
        </a>
      </div>
    </section>
  </div>
</template>
