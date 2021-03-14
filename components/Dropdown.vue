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
        @click="searchSelect(eye)"
      >
        {{ eye }}
      </li>
    </ul>

    <DropdownSlide
      v-else-if="type === types.HEIGHT"
      :class="{'active':current===type}"
      :type="type"
      :data="height"
    />
    <DropdownSlide
      v-else-if="type === types.AGE"
      :class="{'active':current===type}"
      :type="type"
      :data="age"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { TYPES } from '../types/index'

export default {
  name: 'Dropdown',

  props: ['type'],
  data () {
    return {
      types: TYPES,
      isActive: false
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
    },
    age () {
      const arr = this.people.results.map((e) => {
        return Number(e.birth_year.split('BBY')[0])
      })
      return arr.filter(e => !!e)
    }
  },

  methods: {

    getFilteredValues (arr, type) {
      const array = arr.map((e) => {
        return e[type]
      })
      return [...new Set(array)]
    },

    openDropdown () {
      this.$store.commit('filters/SET_DROPDOWN_CURRENT', this.type)
    },
    searchSelect (e) {
      this.$store.commit('filters/SET_EYE_FILTER', e)
      this.$store.commit('filters/SET_DROPDOWN_CURRENT', null)
    }
  }
}
</script>

<style scoped>

</style>
