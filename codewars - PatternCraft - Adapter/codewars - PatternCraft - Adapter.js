class Mario {
    jumpAttack() {
      console.log('Mamamia!');
      return 3;
    }
  }

class MarioAdapter {
    constructor(mario) {
        this.mario = mario;
    }
  
    attack(target) {
        target.health -= this.mario.jumpAttack();
    }
  }
  