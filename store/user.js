import { useCookie } from "nuxt/app";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    setUser(data) {
      this.user = data;
    },

    logout() {
      this.user = null;
      const cookie = useCookie("mtud");
      cookie.value = null;
    },
  },
  getters: {},
});
