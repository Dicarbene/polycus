<h1 text-center>
      <span align-bottom>WXJ｜{{ t("portfolio.about-self.name") }}</span>
      <div i-line-md-coffee-half-empty-twotone-loop inline-block align-bottom style="height: 47.2px" />
</h1>

## About

<p>{{t("portfolio.about-self.info")}}</p>

## Education

<div class="two-lines">
  <p class="text-sm m-none inline-block"><strong>{{t("portfolio.education.edu1.title")}} {{t("portfolio.education.edu1.major")}}</strong>, {{t("portfolio.education.edu1.school")}}</p>
  <p text-sm m-none>{{t("portfolio.education.edu1.time")}}</p>
</div>

## Experience

|   |   |
|---|---|
| **Machine Learning Engineer Intern**, *[Kuaishou](https://www.kuaishou.com/en)*, Beijing, China | 2021–2022 |
| **Research Intern**, *[Peking University](https://english.pku.edu.cn/)*, Beijing, China (with Prof. [Tong Lin](http://www.cis.pku.edu.cn/jzyg/szdw/lt.htm)) | 2020–2022 |
| **Software Engineer Intern**, *China Electronics Technology Group Corporation* | 2020–2021 |
| **Game Engineer Intern**, *[Banana Interactive](https://banana.games/)*, Shanghai, China | 2019–2020 |
| **Research Intern**, *[Peking University](https://english.pku.edu.cn/)*, Beijing, China (with Prof. [Tong Lin](http://www.cis.pku.edu.cn/jzyg/szdw/lt.htm)) | 2018 |
## Projects

## Articles

## Miscellaneous

### Hi there 👋

I'm wxj || Dicarbene, a fullstack developer(should be).

✍ Most of my works are made with Vue(it's just so good)

🚀 I'm learning TypeScript, Next.js etc.

🕹️ Here are my personal website: (http://dicarbene-github-io.vercel.app/)[]

👾 I'm currently interested in in web3.0

😻 My dream: having a succulent garden and 3 fat cats lol.
<script setup>
import { useI18n } from 'vue-i18n'
const {t} = useI18n()
</script>

<style scoped>
.two-lines{
  display: grid;
  grid-template-columns: 1fr 17rem;
  justify-content: space-between;
}
.period{
  align-self: flex-end;
}
</style>
