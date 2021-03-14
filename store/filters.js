
export const state = () => ({
  dropdownCurrentActive: null,
  dropdownState: false,
})

export const mutations = {
  SET_DROPDOWN_STATE (s, payload) {
    s.dropdownState = payload
  },
  SET_DROPDOWN_CURRENT (s, payload) {
    s.dropdownCurrentActive = payload
  }
}

export const actions = {

}
