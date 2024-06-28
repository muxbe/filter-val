const numbers = [1, 3, 6, 4, 9, 14, 46, 68, 24, 13, 45];
const restNumbers = numbers.filter((my) => my < 35);
console.log(restNumbers);
const autos = [
  {
    marka: "mersedec",
    model: "c-klasse",
  },
  {
    marka: "bmw",
    model: "3-er",
  },
  {
    marka: "mersedec",
    model: "E-klasse",
  },
  {
    marka: "bmw",
    model: "5-er",
  },
];
const mersedes = autos.filter((auto) => auto.marka == "mersedec");
console.log(mersedes);
const bmw = autos.filter((auto) => auto.marka == "bmw");
console.log(bmw);
