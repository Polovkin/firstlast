<template>
  <div @click="closeDropdowns">
    <Header />
    <div class="container">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>

export default {

  data () {
    return {}
  },
  methods: {
    closeDropdowns (e) {
      if (!e.target.classList.contains('dropdown__title') && !e.target.classList.contains('dropdown__item')) {
        this.$store.commit('filters/SET_DROPDOWN_CURRENT', null)
      }
    }
  }
}
</script>
<style lang="scss">
@import '~@/assets/scss/_app.scss';

</style>
