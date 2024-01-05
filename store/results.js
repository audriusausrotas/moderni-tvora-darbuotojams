import getFenceTypes from "~/utils/getFenceTypes";
import AddFenceItem from "~/utils/addFenceItem";
import calculateParts from "~/utils/calculateParts";

export const useResultsStore = defineStore("results", {
  state: () => ({
    results: [],
    poles: 0,
    gatePoles: 0,
    borders: 0,
    borderHolders: 0,
    rivets: 0,
    crossbars: 0,
    crossbarHolders: 0,
    totalElements: 0,
    bindingsLength: 0,
    segments: 0,
    segmentHolders: 0,
    gates: [],
  }),

  actions: {
    calculateResults() {
      this.results = [];
      const fenceTypes = getFenceTypes();
      AddFenceItem(fenceTypes);
      calculateParts();
    },

    addPoles(data) {
      this.poles += data;
    },
    addGatePoles(data) {
      this.gatePoles += data;
    },
    addBorders(data) {
      this.borders += data;
    },
    addBorderHolders(data) {
      this.borderHolders += data;
    },
    addRivets(data) {
      this.rivets += data;
    },
    addCrossbars(data) {
      this.crossbars += data;
    },
    addCrossbarHolders(data) {
      this.crossbarsHolders += data;
    },
    addtotalElements(data) {
      this.totalElements += data;
    },
    addBindingsLength(data) {
      this.bindingsLength += data;
    },
    addSegments(data) {
      this.segments += data;
    },
    addSegmentHolders(data) {
      this.segmentHolders += data;
    },
    addGates(data) {
      this.gates.push(data);
    },

    deleteResult(id) {
      this.results = this.results.filter((item) => item.id !== id);
    },

    clearResults() {
      this.results = [];
    },

    clearParts() {
      this.poles = 0;
      this.gatePoles = 0;
      this.borders = 0;
      this.borderHolders = 0;
      this.rivets = 0;
      this.crossbars = 0;
      this.crossbarsHolders = 0;
      this.totalElements = 0;
      this.bindingsLength = 0;
      this.segments = 0;
      this.segmentHolders = 0;
    },
  },

  getters: {},
});
