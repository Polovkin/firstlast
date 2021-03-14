<template>
  <div
    v-if="!!people"
    class="dropdown"
  >
    <p
      class="dropdown__title"
      @click="openDropdown"
    >
      {{ type === types.EYES ? 'eyes' : type }}
      <span />
    </p>
    <ul
      v-if="type===types.EYES"
      class="dropdown__list"
      :class="{'active':current===type}"
    >
      <li
        v-for="(eye,index) of eyesColors"
        :key="index"
        class="dropdown__item"
        @click="closeDropdown"
      >
        {{ eye }}
      </li>
    </ul>
    <div
      v-else-if="type===types.HEIGHT"
      class="dropdown__range"
      :class="{'active':current===type}"
    >
      <p>{{ sliderValue }}</p>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { TYPES } from '../types/index'

export default {
  name: 'Dropdown',
  components: {  },
  props: ['type'],
  data () {
    return {
      types: TYPES,
      isActive: false,
      sliderValue: ''
    }
  },
  computed: {
    ...mapState({
      people: s => s.people.data,
      current: s => s.filters.dropdownCurrentActive
    }),
    eyesColors () {
      return this.getFilteredValues(this.people.results, TYPES.EYES)
    },
    height () {
      return this.getFilteredValues(this.people.results, TYPES.HEIGHT)
    }
  },
  mounted () {

  },
  methods: {
    getFilteredValues (arr, type) {
      const array = arr.map((e) => {
        return e[type]
      })
      return [...new Set(array)]
    },
    getMinValue (arr) {
      return Math.min(...arr)
    },
    getMaxValue (arr) {
      return Math.max(...arr)
    },
    openDropdown () {
      this.$store.commit('filters/SET_DROPDOWN_CURRENT', this.type)
    },
    closeDropdown () {
      this.$store.commit('filters/SET_DROPDOWN_CURRENT', null)
    }
  }
}
</script>

<style scoped>

</style>
