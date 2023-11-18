import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    setUser(data) {
      this.user = data.user;
      localStorage.setItem("mtud", data.token);
    },

    clearUser() {
      this.user = null;
    },
  },
});
