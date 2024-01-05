export default function getFenceTypes() {
  const useProject = useProjectStore();
  const fenceTypes = [];

  useProject.fences.forEach((item) => {
    let exist = false;
    const initialData = {
      name: item.type,
      color: item.color,
      length: item.totalLength,
      sq: item.totalSQ,
      material: item.material,
      space: item.space,
    };

    fenceTypes.forEach((fenceItem) => {
      if (
        fenceItem.name === item.type &&
        fenceItem.color === item.color &&
        fenceItem.material === item.material &&
        fenceItem.space === item.space
      ) {
        fenceItem.length += item.totalLength || 0;
        fenceItem.sq += item.totalSQ || 0;
        exist = true;
      }
    });
    if (!exist) {
      fenceTypes.push(initialData);
    }
  });
  return fenceTypes;
}
