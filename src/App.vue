<script setup lang="ts">
  import Logo from './assets/images/7.jpg';
</script>

<template>
  <div class="max-w-300 min-h-screen mx-auto bg-black/10">
    <header class="min-h-12 p-4 px-8 border-b-1 border-b-solid border-main/20 bg-main">
      <a href="/" class="text-7 text-black font-bold">
        <img :src="Logo" class="w-10 h-10 rounded-md" />
        POW
      </a>
    </header>
    <div class="p-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>

