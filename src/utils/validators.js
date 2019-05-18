export const isRequired = value => value ? undefined : "Este campo es requerido";

export const minLng = value => value.length < 4 ? "El mínimo de caracteres son 4": undefined;

export const maxLng = value => value.length > 15 ? "El máximo de caracteres son 15": undefined;

export const minPrice = value => value < 30 ? "Aquí puro artículo prestige, arriba de mil pesos." : undefined

export const maxPrice = value => value > 100000 ? "Tampoco, por debajo de los 100mil" : undefined;

export const maxImages = value =>  value && value.split(',').length > 2 ? "Sólo dos imágenes permitidas" : undefined

export const passwordMatch = (value, allValues) => value === allValues.password ? undefined : "Las constraseñas no coinciden";

//Normalized
export const maxCharacters = value => value.substr(0,16)