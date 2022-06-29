// import bizFunc from './js/biz-func.js';
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
import BikeService from './bike-service.js'

function getBike(response) {
  if (response.main) {
    $('.showBikeLocation').text(`these are stolen bikes near ${response.bikes[0].location}`);
    $('.showBikeDescription').text(`They look like this : ${response.bikes[0].description}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function () {
  $('#bikebutton').clickt(function () {
    BikeService.getBike(location)
    .then(function(response) {
      getBike(response)
    })

    

  });
});
