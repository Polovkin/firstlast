<template>
  <div
    class="search"
  >
    <div class="search__filters">
      <Dropdown v-for="(type,index) of types" :key="index" :type="type" />
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

  watch: {
    data (newValue, oldValue) {

    }
  }
}
</script>

<style scoped>

</style>
