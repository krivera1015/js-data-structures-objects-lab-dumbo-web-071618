// Write your solution in this file!
const driver = {
  name: 'Sam',
  address: '11 Broadway'
};

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key]
  return obj
}

function deleteFromDriverByKey(obj, key) {
  newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}
