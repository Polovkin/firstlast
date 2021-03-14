<template>
<!--  <div class="search-item" :style="`background-image:url('~assets/img/${data.name}.jpg') `">-->
  <div class="search-item" :style="`background-image:url('/img/${data.name}.jpg') `">
    <div class="search-item__bg"/>
    <div class="search-item__info">
      <h5 class="search-item__year">
        {{ data.birth_year }}
      </h5>
      <h4 class="search-item__name">
        {{ data.name }}
      </h4>
      <p class="search-item__stats">
        <span class="search-item__stat">Eye color: {{ data.eye_color }}</span>
        <span class="search-item__stat">Height: {{ data.height }}</span>
        <span class="search-item__stat">Mass: {{ data.mass }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchItem',
  props: ['data']
}
</script>

<style scoped>

</style>
