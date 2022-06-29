export default class BikeIndex {
  static getBike(location) {
    return fetch (`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=10&stolenness=stolen&access_token=${process.env.API_KEY}`)
  .then(function(response){
    if(!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .catch(function(error){
    return error;
    })
  }
}