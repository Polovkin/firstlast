<template>
  <div class="results">
    <template v-if="people">
      <SearchItem
        v-for="(item,index) of filteredData"
        :key="index"
        :data="item"
      />
    </template>
    <p v-else>
      no data
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SearchResults',
  data () {
    return {
      arr: []
    }
  },
  computed: {
    ...mapState({
      people: s => s.people.data,
      eyeFilter: s => s.filters.eyeFilter,
      heightFilter: s => s.filters.heightFilter,
      ageFilter: s => s.filters.ageFilter
    }),
    filteredData () {
      return this.arr
    }
  },
  watch: {
    eyeFilter () {
      this.FilterAll()
    },
    heightFilter () {
      this.FilterAll()
    },
    ageFilter () {
      this.FilterAll()
    }
  },
  async mounted () {
    await this.$store.dispatch('people/GET_PEOPLE')
    this.arr = await this.people.results
  },
  methods: {
    FilterAll () {
      this.arr = this.people.results
      if (this.eyeFilter) {
        this.arr = this.filterEye(this.arr)
      }
      if (this.heightFilter) {
        this.arr = this.filterHeight(this.arr)
      }
      if (this.ageFilter) {
        this.arr = this.filterAge(this.arr)
      }
    },
    filterEye (arr) {
      return arr.filter(e => e.eye_color === this.eyeFilter)
    },
    filterHeight (arr) {
      const h = this.heightFilter
      return arr.filter((e) => {
        return e.height >= h[0] && e.height <= h[1]
      })
    },
    filterAge (arr) {
      const a = this.ageFilter

      return arr.filter((e) => {
        const num = Number(e.birth_year.split('BBY')[0])
        return (num >= a[0] && num <= a[1])
      })
    }
  }
}
</script>

<style scoped>

</style>
