<script setup lang="ts"></script>

<template>
  <div class="max-w-300 min-h-screen mx-auto bg-black/10">
    <header class="min-h-12 p-4 px-8 border-b-1 border-b-solid border-main/80">
      <a href="/" class="text-7 text-main font-semibold">POW.json</a>
    </header>
    <div class="p-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>

