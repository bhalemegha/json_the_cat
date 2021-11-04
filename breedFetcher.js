const request = require("request");
const breedFetcher = function (breedName, callback) {
  let breedId = breedName.substring(0, 4).toLowerCase();
  request('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedId, (error, response, body) => {
    const data = (JSON.parse(body))[0];
    if (error) {
      callback(error);
      return;
    }console.log(body)
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

breedFetcher('Siberian', (data) => {
                                    console.log(data)
                                  });

