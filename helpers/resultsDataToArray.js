/* this function converts an array of objects with a single key:value to a flat array */
const resultsDataToArray = (result) => {
  if (result.data?.length > 0) {
    let key = Object.keys(result.data[0])[0];
    let flat = result.data.map((e) => e[key]);
    return { data: flat };
  }
  return result;
}

module.exports = resultsDataToArray;
