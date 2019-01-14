
export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 15;
    this.angerLevel = 0
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel <= 0) {
      return true;
    } else if (this.sleepLevel <= 0) {
      return true;
    } else if (this.angerLevel >= 8) {
      return true;
    } else {
        return false;
      }
    }


  

  feed() {
    this.foodLevel = 10;
  }

  setSleepy() {
    setInterval(() => {
      this.sleepLevel--;
    }, 1000);
  }

  sleep() {
    this.sleepLevel = 15;
  }

  poke() {
    this.angerLevel = 0;
  }
  setPoke() {
    setInterval(() => {
      this.angerLevel += 2;
    }, 2000);
  }
}
