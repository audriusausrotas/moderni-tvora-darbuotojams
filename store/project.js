import { v4 as uuidv4 } from "uuid";

const clientInitialValue = {
  username: "",
  address: "",
  phone: "",
  email: "",
};

const initialMeasure = {
  length: "",
  height: "",
  space: "",
  gates: false,
  twoSided: false,
};

export const useProjectStore = defineStore("project", {
  state: () => ({
    client: clientInitialValue,
    fences: [],
  }),

  actions: {
    addFence() {
      this.fences.push({
        id: uuidv4(),
        side: "priekis",
        type: "daimond",
        color: "7016",
        material: "Matinė",
        montavimas: true,
        borteliai: true,
        stulpai: true,
        tikMontavimas: false,
        measures: [initialMeasure],
      });
    },

    addMeasure(data) {
      this.fences[data].measures.push(initialMeasure);
    },
  },

  getters: {
    updateClientAddress: (state) => (data) => {
      state.client.address = data;
    },
    updateClientUsername: (state) => (data) => {
      state.client.username = data;
    },
    updateClientPhone: (state) => (data) => {
      state.client.phone = data;
    },
    updateClientEmail: (state) => (data) => {
      state.client.email = data;
    },
    updateSide: (state) => (data) => {
      state.fences[data.index].side = data.value;
    },
    updateType: (state) => (data) => {
      state.fences[data.index].type = data.value;
    },
    updateColor: (state) => (data) => {
      state.fences[data.index].color = data.value;
    },
    updateMaterial: (state) => (data) => {
      state.fences[data.index].material = data.value;
    },
    updateMontavimas: (state) => (data) => {
      state.fences[data.index].montavimas = data.value;
    },
    updateBorteliai: (state) => (data) => {
      state.fences[data.index].borteliai = data.value;
    },
    updateStulpai: (state) => (data) => {
      state.fences[data.index].stulpai = data.value;
    },
    updateTikMontavimas: (state) => (data) => {
      state.fences[data.index].tikMontavimas = data.value;
      if (data) {
        state.fences[data.index].stulpai = false;
        state.fences[data.index].borteliai = false;
        state.fences[data.index].montavimas = false;
      }
    },
    updateMeasureLength: (state) => (data) => {
      console.log(data.measureIndex);
      state.fences[data.index].measures[data.measureIndex].length = data.value;
    },
    updateMeasureHeight: (state) => (data) => {
      state.fences[data.index].measures[data.measureIndex].height = data.value;
    },
    updateMeasureSpace: (state) => (data) => {
      state.fences[data.index].measures[data.measureIndex].space = data.value;
    },
    updateMeasureGate: (state) => (data) => {
      state.fences[data.index].measures[data.measureIndex].gates = data.value;
    },
    updateMeasureTwoSided: (state) => (data) => {
      state.fences[data.index].measures[data.measureIndex].twoSided =
        data.value;
    },

    clearFields: (state) => () => {
      state.client = clientInitialValue;
      state.fences = [];
    },

    deleteMeasure: (state) => (data) => {
      state.fences[data.index].measures = state.fences[
        data.index
      ].measures.filter((measure, index) => index !== data.measureIndex);
    },

    deleteMeasures: (state) => (index) => {
      state.fences[index].measures = [initialMeasure];
    },

    deleteFence: (state) => (data) => {
      state.fences = state.fences.filter((fence) => fence.id !== data);
    },
  },
});
