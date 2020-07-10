const firstCircle = {
  x: 7,
  y: 6,
  r: 5,
};
const secondCircle = {
  x: 7,
  y: 10,
  r: 1,
};

function isCirclesCrosses (c1, c2) {
  let g = Math.sqrt(Math.abs(c1.x - c2.x)**2 + Math.abs(c1.y - c2.y)**2);
  if (c1.r + c2.r < g) {
    return false;
  }

  if (Math.abs(c1.r - c2.r) - g > 0) {
    return false;
  }

  return true;
}

console.log(isCirclesCrosses(firstCircle, secondCircle));
