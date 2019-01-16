
import { HungryBear } from './hungry-bear.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {

  $('#testy').hide();
  $(".attack").hide();
  let bear = new HungryBear();

  $("#startForm").click(function(event) {
    event.preventDefault();
    bear.setHunger();
    bear.setSleepy();
    bear.setPoke();
    console.log(bear)

  });

  $("#startGame").click(function(event) {
    event.preventDefault();
    let timerFunction = setInterval(() => {
      if (bear.didYouGetEaten() === true) {
        $(".bear").hide();
        $(".attack").show();
        $('#testy').show();
        clearInterval(timerFunction);
        console.log(bear);
        bear.restart();
      } else {
        $(".bear").show();
        $(".attack").hide();
        $('#food-level').text(bear.foodLevel);
        $('#sleep-level').text(bear.sleepLevel);
        $('#anger-level').text(bear.angerLevel);

        return false;

      }
    }, 250)
    $('#testy').hide();
  });
  $('#bearForm').click(function(event){
    event.preventDefault();
    $("#feed").click(bear.feed());
    $("#sleep").click(bear.sleep());
    $("#poke").click(bear.poke());
  });

    $('#weatherLocation').click(function() {
    const species = $('#input-species').val();
    $('#input-species').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.giphy.com/v1/gifs/search?q=${species}&api_key=${process.env.GIPHY_KEY}&limit=5`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
     // let body = JSON.parse(response);
      $('#showAnimal').html(`<img src="${response.data[2].images.fixed_height.url}">`);
      // $('.showTemp').text(`The temperature in Kelvins is ${response.img} degrees.`);
    }
  });
  // });

});
