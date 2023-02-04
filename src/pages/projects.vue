<script setup lang="ts">
import woodenFish from '~/components/lil projects/wooden-fish.vue'
const { t } = useI18n()
</script>

<template>
  <article mb-24>
    <h1 text-8 font-sans font-bold>
      {{ t("button.projects") }}
    </h1>
    <div grid grid-cols-3 gap-24 mx-36>
      <woodenFish />
    </div>
  </article>
</template>

<style scoped>
</style>
