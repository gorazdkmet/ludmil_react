export const pathFor = (...params) => {
  const len = params.length;
  return len === 1
    ? `/${params[0]}`
    : len === 2
    ? `/${params[0]}/${params[1]}`
    : len === 3
    ? `/${params[0]}/${params[1]}/${params[2]}`
    : `/`
}
