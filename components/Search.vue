<template>
  <div
    class="search"
  >
    <div class="search__filters">
      <Dropdown v-for="(type,index) of types" :key="index" :type="type" />
      <button class="search__reset dropdown__range-search button" @click="reset">
        Reset
      </button>
    </div>
    <div class="search__sort" />
  </div>
</template>

<script>

import { mapState } from 'vuex'
import { TYPES } from '../types/index'

export default {
  name: 'Search',
  data () {
    return {
      types: TYPES
    }
  },

  methods: {
    reset () {
      this.$store.commit('filters/SET_EYE_FILTER', null)
      this.$store.commit('filters/SET_HEIGHT_FILTER', null)
      this.$store.commit('filters/SET_AGE_FILTER', null)
      this.$store.commit('filters/SET_DROPDOWN_CURRENT', null)
    }
  }
}
</script>

<style scoped>

</style>
