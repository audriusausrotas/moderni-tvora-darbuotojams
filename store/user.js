import { useCookie, useFetch } from "nuxt/app";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    users: [],
  }),

  actions: {
    async setUser(data) {
      this.user = data;
      if (data.admin && this.users.length === 0) {
        await this.getAllUsers();
      }
    },

    logout() {
      this.user = null;
      const cookie = useCookie("mtud");
      cookie.value = null;
    },
    async getAllUsers() {
      const data = await useFetch("/api/users");
      this.users = [...data.data.value.data];
    },
  },
  getters: {},
});
