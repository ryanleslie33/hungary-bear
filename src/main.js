
import { HungryBear } from './hungry-bear.js';

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  // let timer = setInterval(timerFunction, 250)




  $('#testy').hide();
  $('#angry').hide();

  let bear = new HungryBear();

  bear.didYouGetEaten();
  // if (bear.angerLevel >= 10) {
  //   $('#angry').show();
  // } else {
  //   return "Game Over!";
  // }


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
                  $('#testy').show();
                  clearInterval(timerFunction);
                  bear.restart();
                } else {
                  return false;
                }
              }, 250)
      bear.restart();
      $('#testy').hide();

  });

  $('#bearForm').click(function(event){
    event.preventDefault();
    $("#feed").click(bear.feed());
    $("#sleep").click(bear.sleep());
    $("#poke").click(bear.poke());




  });

});
