<script lang="ts" setup>
import type { Ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const mds = import.meta.glob('./Posts/*.md')
const mdList: Ref<string[]> = ref([])
// const reg =
for (const key in mds)
  mdList.value.push(key.substring(key.indexOf('/') + 1).slice(0, -3))
const goto = (link: string) => {
  router.push(link)
}
</script>

<template>
  <h1 class="mb-2 font-serif text-shadow-lg" style="font-size: 50px">
    ARCHIVE
  </h1>
  <h2 v-for="md in mdList" :key="mdList.indexOf(md)" icon-home block @click="goto(md)">
    {{ md.substring(md.indexOf('/') + 1) }}
  </h2>
</template>
