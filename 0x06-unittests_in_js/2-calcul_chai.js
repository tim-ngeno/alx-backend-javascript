function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  let res = 0;

  if(type === 'SUM') {
   res =  roundedA + roundedB;
  } else if (type === 'SUBTRACT') {
    res =  roundedA - roundedB;
  } else if (type === 'DIVIDE') {
    if (roundedB === 0) return 'Error';
    res = roundedA / roundedB;
  }

  return res;
}

export default calculateNumber;
