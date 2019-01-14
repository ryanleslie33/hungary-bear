
export class HungryBear {

  constructor() {

    this.foodLevel = 15;
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
      console.log(" this function is working !!!!!!!!!!!")

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
    this.foodLevel +=2;
    this.angerLevel -= 2;
  }
  restart() {
    this.foodLevel = 15;
    this.sleepLevel = 15;
    this.angerLevel = 0
  }

  setSleepy() {
    setInterval(() => {
      this.sleepLevel--;
    }, 3000);
  }

  sleep() {
    this.sleepLevel = 15;
    this.foodLevel -= 1;
  }

  poke() {
    this.angerLevel += 2;
  }
  setPoke() {
    setInterval(() => {
      this.angerLevel += 1;
    }, 2000);
  }
}
