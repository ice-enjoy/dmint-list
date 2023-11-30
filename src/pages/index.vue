<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
    <div class="nft-item-card" v-for="n in 100" :key="n">
      <img src="https://picsum.photos/200" class="w-25 aspect-1 rounded-md flex-shrink-0" />
      <div class="flex-col items-end gap-1">
        <div class="flex-col items-end gap-1">
          <span>Name. # {{ n }}</span>
          <span class="text-xs">
            Bitworkc:
            <span class="text-main">Abds</span>
          </span>
        </div>
        <div
          class="border-1 border-solid border-white/10 w-8 aspect-1 flex-col-center rounded-md group cursor-pointer hover:text-main"
        >
          <font-awesome-icon
            icon="fa-solid fa-download"
            class="group-active:scale-80 transition-all"
          ></font-awesome-icon>
        </div>
      </div>
    </div>
  </div>
  <div class="flex-center gap-10 mt-5">
    <button>Prev</button>
    <button>Next</button>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
  .nft-item-card {
    @apply border-1 border-solid border-gray/20 rounded-md;
    @apply flex justify-between items-center;
    @apply p-4;
    @apply text-white/80;
    @apply shadow-md;
    @apply transition-all duration-200;
    @apply hover:shadow-lg hover:border-main/40;
    @apply hover:scale-105 hover:bg-main/20;
  }

  button {
    @apply border-1 border-solid border-main rounded-md;
    @apply p-2 w-30;
    @apply text-black;
    @apply shadow-md;
    @apply cursor-pointer;
    @apply transition-all duration-200;
    @apply hover:shadow-lg hover:border-main/40 hover:text-white;
    @apply hover:bg-main/20;
    @apply active:scale-80;
  }
</style>

