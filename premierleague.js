import axios from "axios";



const options = {
  method: 'GET',
  url: 'https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/table',
  headers: {
    'X-RapidAPI-Key': 'b1e9820f2bmsh661f0410d1af591p1b2f7ejsn42e5415e7386',
    'X-RapidAPI-Host': 'heisenbug-premier-league-live-scores-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});