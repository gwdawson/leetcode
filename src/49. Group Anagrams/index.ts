function groupAnagrams(strs: string[]): string[][] {
  const map: { [key: string]: string[] } = {};
  const response: string[][] = [];

  strs.forEach((str) => {
    const sortedStr = str.split("").sort().join("");
    const arrayWithStr = map[sortedStr] ? [...map[sortedStr], str] : [str];
    map[sortedStr] = arrayWithStr;
  });

  for (const key in map) {
    response.push(map[key]);
  }

  return response;
}
