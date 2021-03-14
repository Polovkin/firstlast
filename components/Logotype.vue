<template>
  <nuxt-link to="/" class="logotype">
    <img
      src="~/assets/img/icons/logo.svg"
      alt=""
    >
  </nuxt-link>
</template>

<script>
export default {
  name: 'Logotype'
}
</script>

<style scoped lang="scss">
.logotype {
  width: 100px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @include breakpoint ($phone__all) {
    width: 84px;
    height: 24px;
  }
}
</style>
