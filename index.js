var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  newObj = recipes[key] = value;
  return newObj;
}
