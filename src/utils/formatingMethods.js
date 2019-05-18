export const normalizedData = array => {
  if(!array || array.length === 0) return {};
  return array.reduce((acumulador, item) => {
    return {
      ...acumulador,
      [item.id]: item
    }
  }, {})
}