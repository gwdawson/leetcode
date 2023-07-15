function topKFrequent(nums: number[], k: number): number[] {
  const map: { [key: number]: number } = {};
  const largestK: number[] = [];

  nums.forEach((n) => {
    map[n] ? map[n]++ : (map[n] = 1);
  });

  for (let i = 0; i < k; i++) {
    let largest = { value: 0, count: 0 };

    for (const j in map) {
      if (map[j] > largest.count) {
        largest = { value: Number(j), count: map[j] };
      }
    }

    delete map[largest.value];
    largestK.push(largest.value);
  }

  return largestK;
}
