import { v4 as uuidv4 } from "uuid";

const fenceColors = [
  "7016",
  "7024",
  "8019",
  "8017",
  "6020",
  "6005",
  "9005",
  "3009",
  "Kita",
];

const fenceTypes = [
  "Daimond 60/90",
  "Daimond 40/105",
  "Alba",
  "Plank",
  "Žaliuzi",
  "Eglė",
  "Dija Vertikali",
  "Dija Horizontali",
  "Standard",
  "Sigma",
  "Astra",
  "Polo",
  "EVA",
  "EVA3",
  "Estetic",
  "Emka",
];

const fenceMaterials = ["Matinė", "Blizgi", "IceCrystal"];

const horizontals = [
  "Daimond 60/90",
  "Daimond 40/105",
  "Plank",
  "Žaliuzi",
  "Eglė",
  "Dija Horizontali",
];

const verticals = [
  "Alba",
  "Dija Vertikali",
  "Standard",
  "Sigma",
  "Astra",
  "Polo",
  "EVA",
  "EVA3",
  "Estetic",
  "Emka",
];

const clientInitialValue = {
  username: "",
  address: "",
  phone: "",
  email: "",
};

const initialMeasure = {
  length: null,
  height: null,
  MeasureSpace: null,
  gates: false,
  kampas: {
    exist: false,
    value: "",
  },
  laiptas: {
    exist: false,
    value: "",
  },
};

export const useProjectStore = defineStore("project", {
  state: () => ({
    client: clientInitialValue,
    fences: [],
    fenceTypes,
    fenceColors,
    fenceMaterials,
    verticals,
    horizontals,
  }),

  actions: {
    addFence() {
      this.fences.push({
        id: uuidv4(),
        side: "Priekis",
        type: "Daimond 60/90",
        color: "7016",
        material: "Matinė",
        montavimas: true,
        borteliai: true,
        stulpai: true,
        tikMontavimas: false,
        twoSided: false,
        space: 3,
        elements: 0,
        totalLength: 0,
        totalSQ: 0,
        measures: [{ ...initialMeasure }],
      });
    },

    addMeasure(index) {
      this.fences[index].measures.push({ ...initialMeasure });
    },

    addKampas(index) {
      const kampas = {
        ...initialMeasure,
        kampas: {
          exist: true,
          value: "",
        },
      };
      this.fences[index].measures.push(kampas);
    },
    addLaiptas(index) {
      const laiptas = {
        ...initialMeasure,
        laiptas: {
          exist: true,
          value: "",
        },
      };
      this.fences[index].measures.push(laiptas);
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
      state.fences[data.index].measures[data.measureIndex].length = data.value;
    },

    updateMeasureHeight: (state) => (data) => {
      state.fences[data.index].measures[data.measureIndex].height = data.value;
    },

    updateMeasureSpace: (state) => (data) => {
      state.fences[data.index].space = data.value;
    },

    updateMeasureGate: (state) => (data) => {
      state.fences[data.index].measures[data.measureIndex].gates = data.value;
    },

    updateMeasureTwoSided: (state) => (data) => {
      console.log(data);
      state.fences[data.index].twoSided = data.value;
    },
    updateMeasureKampas: (state) => (data) => {
      state.fences[data.index].measures[data.measureIndex].kampas.value =
        data.value;
    },
    updateMeasureLaiptas: (state) => (data) => {
      state.fences[data.index].measures[data.measureIndex].laiptas.value =
        data.value;
    },
    updateTotalLength: (state) => (data) => {
      state.fences[data.index].totalLength = data.value;
    },
    updateTotalSQ: (state) => (data) => {
      state.fences[data.index].totalSQ = data.value;
    },

    copyLast: (state) => (index) => {
      const elementIndex = state.fences[index].measures.length - 1;
      const element = state.fences[index].measures[elementIndex];
      state.fences[index].measures.push({ ...element });
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
      state.fences[index].measures = [{ ...initialMeasure }];
    },

    deleteFence: (state) => (data) => {
      state.fences = state.fences.filter((fence) => fence.id !== data);
    },
  },
});
