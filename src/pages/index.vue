<template>
  <!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"> -->
  <div class="grid grid-cols-1 items-center gap-4">
    <div class="nft-item-card" v-for="n in powRange" :key="n">
      <img :src="getImageUrl(n)" class="w-25 aspect-1 rounded-md flex-shrink-0" />
      <div class="flex-col items-end gap-1">
        <div class="flex-col items-end gap-1">
          <span>#POW {{ `${n}${currentCountOfPOW[n]}` }}</span>
          <span class="text-xs">
            Bitworkc:
            <span class="text-main">{{ bitworkc.slice(0, n) }}</span>
          </span>
        </div>

        <div class="flex gap-1">
          <div class="icon-btn" @click="refreshNumber(n)">
            <font-awesome-icon
              icon="fa-solid fa-refresh"
              class="active:animate-spin"
            ></font-awesome-icon>
          </div>

          <div class="icon-btn" @click="download(`${n}${currentCountOfPOW[n]}`)">
            <font-awesome-icon
              icon="fa-solid fa-download"
              class="group-active:scale-80 transition-all"
            ></font-awesome-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const powRange = new Array(16 - 7).fill(0).map((_, index: number) => index + 7);
  const bitworkc = '43721943aea61c6';
  const getImageUrl = (no: number) => {
    return new URL(`../assets/images/${no}.jpg`, import.meta.url).href;
  };

  // const getJSONUrl = (no: string) => {
  //   return new URL(`../json/${no}.json`, import.meta.url).href;
  // };

  const countOfPOW: any = {
    '7': 4096,
    '8': 2048,
    '9': 1024,
    '10': 512,
    '11': 256,
    '12': 128,
    '13': 64,
    '14': 32,
    '15': 16,
  };

  const currentCountOfPOW = ref<any>({
    '7': 0,
    '8': 0,
    '9': 0,
    '10': 0,
    '11': 0,
    '12': 0,
    '13': 0,
    '14': 0,
    '15': 0,
  });

  const refreshNumber = (no: number) => {
    const count = countOfPOW[no];
    const random = Math.floor(Math.random() * count);
    currentCountOfPOW.value[no] = random;
  };

  const download = (no: string) => {
    let a: any = document.createElement('a');
    a.setAttribute('id', 'd_' + Math.floor(Math.random() * 1000));
    a.setAttribute('href', `/json/${no}.json`);
    a.setAttribute('download', `${no}.json`);
    a.click();
    a = null;
  };

  onMounted(() => {
    refreshNumber(7);
    refreshNumber(8);
    refreshNumber(9);
    refreshNumber(10);
    refreshNumber(11);
    refreshNumber(12);
    refreshNumber(13);
    refreshNumber(14);
    refreshNumber(15);
  });
</script>

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

  .icon-btn {
    @apply border-1 border-solid border-white/10 w-8 aspect-1 flex-col-center rounded-md group cursor-pointer hover:text-main;
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

