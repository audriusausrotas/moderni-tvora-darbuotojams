import { v4 as uuidv4 } from "uuid";

const clientInitialValue = {
  username: "",
  address: "",
  phone: "",
  email: "",
};

const fenceInitialValue = {
  id: uuidv4(),
  side: "priekis",
  type: "daimond",
  color: "7016",
};

export const useProjectStore = defineStore("project", {
  state: () => ({
    client: clientInitialValue,
    fences: [],
  }),

  actions: {
    addFence() {
      this.fences.push({ ...fenceInitialValue });
    },
  },

  getters: {
    updateClient: (state) => (data) => {
      if (data.type === "username") {
        state.client.username = data.value;
      } else if (data.type === "address") {
        state.client.address = data.value;
      } else if (data.type === "phone") {
        state.client.phone = data.value;
      } else if (data.type === "email") {
        state.client.email = data.value;
      }
    },
    clearFields: (state) => () => {
      state.client = clientInitialValue;
      state.fences = [];
    },
  },
});
