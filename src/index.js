/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  
  for (var i = 0; i < preferences.length; i++) {
    if (preferences[i] == null || preferences[i] == i + 1)
      continue;

    var j = preferences[i];
    var k = preferences[j-1];

    if (preferences[k-1] == i + 1) {
      count = count + 1;
      preferences[i] = null;
      preferences[j-1] = null;
      preferences[k-1] = null;
    }
  }

  return count;
};
