<template>
  <nav class="w-full h-20 px-11 flex justify-between bg-green-dark fixed z-10">
    <section class="flex items-center">
      <img
        class="w-16 h-16 rotate-0 transition-all hover:rotate-180"
        src="~/assets/icons/avatar.svg"
      />
    </section>
    <section class="flex gap-3 items-center">
      <a
        class="hidden md:block min-w-[100px] text-center font-bold text-base text-white transition-all hover:text-green-lime"
        >Inicio</a
      >
      <a
        class="hidden md:block min-w-[100px] text-center font-bold text-base text-white transition-all hover:text-green-lime"
        >Sobre mí</a
      >
      <BaseButton class="h-10 min-w-[100px]" color="lime">Contacto</BaseButton>
    </section>
  </nav>
</template>
