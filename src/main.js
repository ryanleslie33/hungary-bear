
import { HungryBear } from './hungry-bear.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
