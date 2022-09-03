const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("270fb71bd0967c369f97209928a411ad51869901466d01a945c2dab7ad59a475");

const params = {
  q: "LaLiga",
  location: "austin, texas, united states"
};

const callback = function(data) {
  console.log(data["sports_results"]);
  const {teams}= data["sports_results"];
  console.log(teams);

};

// Show result as JSON
search.json(params, callback);
