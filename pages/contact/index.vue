<template>
  <section class="text-center">
    <logo class="logo-small"/>
    <p>Email: <a href="mailto:daniel@danielparker.com.au">daniel@danielparker.com.au</a></p>
    <p>Twitter: <a
      href="https://twitter.com/CodyMcCodeFace"
      target="_blank">@CodyMcCodeFace</a></p>
    <p>Github: <a
      href="https://github.com/rlgod"
      target="_blank">Rlgod</a></p>
    <p>Gitlab: <a
      href="https://gitlab.com/CodyMcCodeFace"
      target="_blank">CodyMcCodeFace</a></p>
    <p>LinkedIn: <a
      href="https://www.linkedin.com/in/danielptech/"
      target="_blank">danielptech</a></p>
  </section>
</template>
<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
section {
  padding-bottom: 40px;
}

.logo-small {
  width: 10% !important;
  margin-bottom: 20px;
}
</style>
