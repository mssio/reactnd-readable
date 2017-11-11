
export function isEmpty(input) {
  return typeof(input) === 'undefined'
    || input === ''
    || input === null
    || (Array.isArray(input) && input.length === 0)
    || (typeof(input) === 'object' && Object.keys(input).length === 0)
}
