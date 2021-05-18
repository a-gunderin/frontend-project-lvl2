export default (obj, key) => {
  const type = typeof obj[key];
  const isObj = obj[key] !== null && (type === 'object' || type === 'function');
  const isArr = Array.isArray(obj[key]);
  return isObj && !isArr;
};
