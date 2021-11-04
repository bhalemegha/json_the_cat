const request = require("request");
const fetchBreedDescription = function (breedName, callback) {
  let breedId = breedName.substring(0, 4).toLowerCase();
  request('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedId, (error, response, body) => {
    const data = (JSON.parse(body))[0];
    if (error) {
      callback(error,body);
      return;
    }
    if (body.length > 2) {
      for (let d in data) {
        if (data[d][0]['id'] === breedId) {
          callback(error,data[d][0]['description']);
          break;
        }
      }
    } else {
      callback(error,"Breed not found");
    }
  });
}

module.exports = { fetchBreedDescription };
