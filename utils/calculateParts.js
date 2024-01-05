import { useResultsStore } from "~/store/results";
import calculatePoles from "./calculatePoles";

export default function calculateParts() {
  const results = useResultsStore();
  const fences = useProjectStore().fences;

  fences.forEach((item) => {
    if (item.stulpai) {
      const poles = calculatePoles(item.measures);
      results.addPoles(poles.poles);
      results.addGatePoles(poles.gatePoles);
    }
  });
}
