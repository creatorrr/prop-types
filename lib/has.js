const { hasOwnProperty } = Object.prototype;
module.exports = (obj, key) => hasOwnProperty.call(obj, key);
