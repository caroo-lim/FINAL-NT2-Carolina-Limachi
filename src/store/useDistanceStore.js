import { defineStore } from 'pinia'

export const useDistanceStore = defineStore('distance', {
  state: () => ({
    km: ""  
  }),

  getters: {
    meters: (state) => {
      if (state.km === "" || state.km === "-") return null
      return (Number(state.km) * 1000).toFixed(2)
    },

    miles: (state) => {
      if (state.km === "" || state.km === "-") return null
      return (Number(state.km) * 0.621371).toFixed(4)
    },

    color: (state) => {
      if (state.km === "-" || state.km === "") return "black"

      const km = Number(state.km)

      if (km <= 0) return "blue"
      if (km < 5) return "magenta"
      return "red"
    }
  },

  actions: {
    setKm(value) {
      this.km = value
    }
  }
})
