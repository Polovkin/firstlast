<template>
  <div
    v-if="data"
    class="dropdown__range"
  >
    <div
      class="close"
      @click="closeDropdown"
    />
    <div class="dropdown__range-inputs">
      <label class="dropdown__range-label">
        <input
          v-model="slide[0]"
          class="dropdown__range-input"
        >
      </label>
      <label class="dropdown__range-label">
        <input
          v-model="slide[1]"
          class="dropdown__range-input"
        >
      </label>
    </div>
    <div class="dropdown__range-slider">
      <div class="dropdown__range-from">
        {{ slide[0] }} {{ type===types.AGE ? 'BBY': "cm" }}
      </div>
      <div class="dropdown__range-to">
        {{ slide[1] }} {{ type===types.AGE ? 'BBY': "cm" }}
      </div>
      <vue-slider
        ref="slider"
        v-model="slide"
        :min="getMinValue(data)"
        :max="getMaxValue(data)"
      />
    </div>

    <button class="dropdown__range-search button" @click="search">
      search
    </button>
  </div>
</template>

<script>
import 'vue-slider-component/theme/default.css'
import { TYPES } from '@/types'

export default {
  name: 'DropdownSlide',
  props: ['data', 'type'],
  data () {
    return {
      slide: [],
      types: TYPES
    }
  },
  computed: {
    values () {
      return [this.getMinValue(this.data), this.getMaxValue(this.data)]
    }
  },
  mounted () {
    this.slide = this.values
  },
  methods: {
    search () {
      if (this.type === TYPES.HEIGHT) {
        this.$store.commit('filters/SET_HEIGHT_FILTER', this.slide)
      }
      if (this.type === TYPES.AGE) {
        this.$store.commit('filters/SET_AGE_FILTER', this.slide)
      }
      this.$store.commit('filters/SET_DROPDOWN_CURRENT', null)
    },
    getMinValue (arr) {
      return Math.min(...arr)
    },
    getMaxValue (arr) {
      return Math.max(...arr)
    },
    closeDropdown () {
      this.$store.commit('filters/SET_DROPDOWN_CURRENT', null)
    }
  }
}
</script>

<style scoped>

</style>
