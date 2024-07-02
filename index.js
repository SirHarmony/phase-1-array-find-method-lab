// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

function superbowlWin(arrayOfObjects) {
  const arr = arrayOfObjects.find((array, i) => {
    return array.result === "W";
  });

  if (arr) {
    return arr.year;
  } else {
    return arr;
  }
}

superbowlWin(record);
