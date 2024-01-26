function cached(fn: Function) {
  const cache = Object.create(null);
  return function cachedFn(str: string) {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
const reg = /-(\w)/g;
const camelize = cached((str: string) => {
  return str.replace(reg, (_, c) => c ? c.toUpperCase() : "");
});
export { camelize }