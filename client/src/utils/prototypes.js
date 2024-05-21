FormData.prototype.toObject = function(){
  const object = {}
  for (let [key, value] of this.entries()) {
    object[key] = value
  }
  return object
}

String.prototype.truncate = function(str, maxLength) {
  if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
  }
  return str;
}