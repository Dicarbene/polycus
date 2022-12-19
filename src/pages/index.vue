<script setup lang="ts">
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <div text-4xl>
      <div inline-block>
        <img v-if="!isDark" src="/favicon.svg">
        <img v-else src="/favicon-dark.svg">
      </div>
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/dicarbene/polycus" target="_blank">
        Polycus
      </a>
    </p>
    <article class=" prose mx-auto">
      <h2>Hi there 👋</h2>

      <p>I'm wxj || Dicarbene, a fullstack developer(should be).</p>

      <p>✍ Most of my works are made with Vue(it's just so good)</p>

      <p>🚀 I'm learning TypeScript, Next.js etc.</p>

      <p>🕹️ Here are my personal website: http://dicarbene-github-io.vercel.app/</p>

      <p>👾 I'm currently interested in in web3.0</p>

      <p>😻 My dream: having a succulent garden and 3 fat cats lol.</p>
    </article>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
