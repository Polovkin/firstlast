<template>
  <div class="results">
    <template v-if="people">
      <SearchItem v-for="(item,index) of people.results" :key="index" :data="item" />
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
  computed: {
    ...mapState({
      people: s => s.people.data
    })
  },
  mounted () {
    this.$store.dispatch('people/GET_PEOPLE')
  }
}
</script>

<style scoped>

</style>
