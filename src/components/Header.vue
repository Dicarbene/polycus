<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <RouterLink to="/" :title="t('button.home')">
    <div inline-block font-bold text-xl w-auto h-10 absolute lg:fixed m-6 md:ml-9 select-none outline-none>
      <span class="icon-home">Hi@Dicarbene></span><span class="blink ">_</span>
    </div>
  </RouterLink>
  <header class="min-w-max z-40">
    <div class="spacer" visible md:invisible />
    <nav p-2em w-full text-base flex md:display-none>
      <div font-200 flex class="tempright">
        <RouterLink class="icon-btn " to="/projects" :title="t('button.projects')">
          <div i-carbon:idea inline-block align-bottom style="font-size: 1.25rem; margin: 0px -0.125rem;" />
          {{ t('button.projects') }}
        </RouterLink>
        <button class="icon-btn  !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
          <div i="line-md-sunny-outline dark:line-md-moon" style="font-size: 1.25rem; margin: 0px -0.125rem;" />
        </button>
        <a class="icon-btn " :title="t('button.toggle_langs')" @click="toggleLocales()">
          <div i-carbon-language style="font-size: 1.25rem; margin: 0px -0.125rem;" />
        </a>
      </div>
    </nav>
    <nav p-2em w-full text-base display-none md:display-block>
      <div class="right" font-200>
        <RouterLink class="icon-btn " to="/blogs" :title="t('button.home')">
          <div i-carbon:blog inline-block align-bottom style="font-size: 1.25rem; margin: 0px -0.125rem;" /> {{
            t('button.blogs')
          }}
        </RouterLink>
        <RouterLink class="icon-btn " to="/projects" :title="t('button.projects')">
          <div i-carbon:idea inline-block align-bottom style="font-size: 1.25rem; margin: 0px -0.125rem;" />
          {{ t('button.projects') }}
        </RouterLink>
        <RouterLink class="icon-btn" to="/portfolio" :title="t('button.portfolio')">
          <div
            i-carbon:document-attachment inline-block align-bottom
            style="font-size: 1.25rem; margin: 0px -0.125rem;"
          /> {{ t('button.portfolio') }}
        </RouterLink>
        <button class="icon-btn  !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
          <div i="line-md-sunny-outline dark:line-md-moon" style="font-size: 1.25rem; margin: 0px -0.125rem;" />
        </button>
        <a class="icon-btn " :title="t('button.toggle_langs')" @click="toggleLocales()">
          <div i-carbon-language style="font-size: 1.25rem; margin: 0px -0.125rem;" />
        </a>
        <RouterLink class="icon-btn " to="/about" :title="t('button.about')">
          <div i-carbon-dicom-overlay style="font-size: 1.25rem; margin: 0px -0.125rem;" />
        </RouterLink>
        <a class="icon-btn " rel="noreferrer" href="https://github.com/dicarbene" target="_blank" title="GitHub">
          <div i-line-md-github-loop style="font-size: 1.25rem; margin: 0px -0.125rem;" />
        </a>
        <a class="icon-btn " rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" title="Discord">
          <div i-line-md-discord style="font-size: 1.25rem; margin: 0px -0.125rem;" />
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: grid;
  grid-template-columns: auto max-content;
  grid-template-rows: 1fr;
}

header nav .right {
  display: grid;
  grid-template-columns: repeat(8, max-content);
  grid-row-gap: 1.2rem;
  grid-column-gap: 1.2rem;
}

header nav .tempright {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-row-gap: 1.2rem;
  grid-column-gap: 1.2rem;
}

.blink {
  animation: blink 1.3s none infinite;
  animation-duration: 1.3s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: blink;
}

@keyframes blink {
  from {
    opacity: 0.8;
  }

  50% {
    opacity: 0;
  }

  to {
    opacity: 0.8;
  }
}
</style>
