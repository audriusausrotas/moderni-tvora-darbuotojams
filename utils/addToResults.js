export default function addToResults(data) {
  const results = useResultsStore().results;

  results.push(data);
}
