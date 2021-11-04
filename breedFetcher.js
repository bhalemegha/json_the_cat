const request = require("request");
const breedFetcher = function (breedName, callback) {
  let breedId = breedName[0].substring(0, 4);
  request('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedId, (error, response, body) => {
    const data = (JSON.parse(body))[0];
    if (error) {
      callback(error);
      return;
    }
    if (body.length > 2) {
      for (let d in data) {
        if (data[d][0]['id'] === breedId) {
          callback(data[d][0]['description']);
          break;
        }
      }
    } else {
      callback("Breed not found");
    }
  });
}

breedFetcher(process.argv.splice(2), (data) => {console.log(data)});

