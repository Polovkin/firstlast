<template>
  <div
    v-if="data"
    class="dropdown__range"
  >
    <div class="close" @click="closeDropdown" />
    <div class="dropdown__range-inputs">
      <label class="dropdown__range-label">
        <input v-model="slide[0]" class="dropdown__range-input">
      </label>
      <label class="dropdown__range-label">
        <input v-model="slide[1]" class="dropdown__range-input">
      </label>
    </div>
    <div class="dropdown__range-slider">
      <div class="dropdown__range-from">{{slide[0]}} BBY</div>
      <div class="dropdown__range-to">{{slide[1]}} BBY</div>
      <vue-slider
        ref="slider"
        v-model="slide"
        :min="getMinValue(data)"
        :max="getMaxValue(data)"
      />
    </div>

    <button class="dropdown__range-search button">search</button>
  </div>
</template>

<script>
import 'vue-slider-component/theme/default.css'

export default {
  name: 'DropdownSlide',
  props: ['data'],
  data () {
    return {
      slide: []
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
