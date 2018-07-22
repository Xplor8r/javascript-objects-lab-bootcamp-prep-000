var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  object = recipes[key] = value
  return object;
}
