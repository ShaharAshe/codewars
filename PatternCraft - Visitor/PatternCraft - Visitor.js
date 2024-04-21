/* v.1 */

const Enemy = {
    accept: function (Visitor) { },
}

class Marine{
    constructor(){
        this.health = 100;
    }

    accept(visitor){
        visitor.visitLight(this);
    }
}

class Marauder{
    constructor(){
        this.health = 125;
    }

    accept(visitor){
        visitor.visitArmored(this);
    }
}


const VisitorInterface = {
    visitLight: function (unit) { },
    visitArmored: function (unit) { },
};

class TankBullet{
    visitLight(unit){
        unit.health -= 21;
    }

    visitArmored(unit){
        unit.health -= 32;
    }
}


/* v.2 */

// class Marine {
//     constructor() {this.health = 100;}
//     accept(visitor) {visitor.visitLight(this);}
//   }
  
//   class Marauder {
//     constructor() {this.health = 125;}
//     accept(visitor) {visitor.visitArmored(this);}
//   }
  
//   class TankBullet {
//     visitLight(unit) {unit.health -= 21;}
//     visitArmored(unit) {unit.health -= 32;}
//   }
