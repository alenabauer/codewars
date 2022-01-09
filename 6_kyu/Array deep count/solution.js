const deepCount = a => {
  return a.reduce((acc, val) => acc + (Array.isArray(val) ? deepCount(val) : 0), a.length);
}
