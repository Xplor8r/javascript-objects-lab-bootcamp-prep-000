var recipes = {}
function updateObjectWithKeyAndValue(newObj, key, value) {
  newObj = recipes[key] = value
  return newObj;
}
