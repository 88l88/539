var myIdx = 115200;
var myIdxDate = '2026-08-18';
var myBaseIdx = ddd.findIndex(row => row[0] === myIdxDate);

var zzz = ddd.map((row, i) => [
  row[0],                               // [日期]
  row[1].slice().sort((a, b) => a - b), // [順球×5]
  row[1],                               // [落球×5]
  myIdx + (myBaseIdx - i)                   // [期次 index]
]);

var sss = ddd.map(row => [row[0], '日一二三四五六'[new Date(row[0]).getDay()], row[1].slice().sort()]);
