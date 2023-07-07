function containsDuplicate(nums: number[]): boolean {
  const hashmap: { [key: string]: true } = {};

  for (const i of nums) {
    if (hashmap[i]) return true;
    hashmap[i] = true;
  }

  return false;
}
