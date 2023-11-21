import { useCookie } from "nuxt/app";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    users: [],
  }),

  actions: {
    async setUser(data) {
      this.user = data;
    },

    logout() {
      this.user = null;
      const cookie = useCookie("mtud");
      cookie.value = null;
      this.users = [];
    },
    async setAllUsers(data) {
      this.users = data;
    },
  },
  getters: {},
});
