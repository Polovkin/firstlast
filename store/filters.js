
export const state = () => ({
  dropdownCurrentActive: null,
  dropdownState: false,
  eyeFilter: null,
  heightFilter: null,
  ageFilter: null,
  sortMethod: null
})

export const mutations = {
  SET_EYE_FILTER (s, payload) {
    s.eyeFilter = payload
  },
  SET_HEIGHT_FILTER (s, payload) {
    s.heightFilter = payload
  },
  SET_AGE_FILTER (s, payload) {
    s.ageFilter = payload
  },
  SET_DROPDOWN_CURRENT (s, payload) {
    s.dropdownCurrentActive = payload
  },
  SET_SORT_METHOD (s, payload) {
    s.sortMethod = payload
  },
}

export const actions = {

}
