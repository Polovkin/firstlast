const api = 'https://swapi.dev/api/people/'

export const state = () => ({
  data: null,
})

export const mutations = {
  SET_PEOPLE (s, people) {
    s.data = people
  }
}

export const actions = {
  async GET_PEOPLE ({ commit }) {
    try {
      const response = await this.$axios.$get(api)
      commit('SET_PEOPLE', response)
    } catch (e) {
      console.log(e.response)
      throw e
    }
  }
}
