import { HungryBear } from '/Users/Guest/desktop/hungry-bear/src/hungry-bear.js';

describe('HungryBear', function() {
  let fuzzy = new HungryBear("Fuzzy");

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.setHunger();
    fuzzy.setSleepy();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });


  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
  fuzzy.foodLevel = 0;
  expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it('should have a sleep level of 15 if it is not sleepy', function() {
    fuzzy.sleep();
    jasmine.clock().tick(3001);
    expect(fuzzy.sleepLevel).toEqual(12);
  });

  it('should have a sleep level 0, and got eaten', function() {
    fuzzy.sleep();
    jasmine.clock().tick(16001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should have a sleep level of 15', function() {
    fuzzy.sleep();
    expect(fuzzy.sleepLevel).toEqual(15);
  });

    it('should have a anger level of 2', function() {
    fuzzy.poke();
    fuzzy.setPoke();
    jasmine.clock().tick(2001);
    expect(fuzzy.angerLevel).toEqual(2);
    });

    it('should eat you if sleepLevel is below 0 or angerLevel is above 8', function() {
      fuzzy.poke();
      jasmine.clock().tick(8001)
      expect(fuzzy.didYouGetEaten()).toEqual(true);
    })

});
