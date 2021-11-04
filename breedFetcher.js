const request = require("request");
const breedFetcher = function (breedName) {
  let breedId = breedName[0].substring(0, 4);
  request('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedId, (error, response, body) => {
    const data = (JSON.parse(body))[0];
    if (error) {
      console.log(error);
      return;
    }
    if (body.length > 2) {
      for (let d in data) {
        if (data[d][0]['id'] === breedId) {
          console.log(data[d][0]['description']);
          break;
        }
      }
    } else {
      console.log("Breed not found");
    }
  });
}

breedFetcher(process.argv.splice(2));

