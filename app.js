// -------------------------------part 1-------------------------------------
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion:{
            name: "Frank",
            type: "Flea",
            belongings: ['small hat','sunglasses']
        }
        
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}
adventurer.inventory.forEach(element => {
    console.log(element)
});
// adventurer.roll() 
console.log("---------------------------------------------");
// ---------------------------------------part 2--------------------------------------
class Character {
    static MAX_HEALTH =100;
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
      
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
};
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll();
console.log("---------------------------------------------");

// ---------------------------------------part 3--------------------------------------
class Adventurer extends Character { 
    static ROLES = ["Fighter","Healer","Wizard"];
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      if (role === "Fighter"||role === "Healer"||role === "Wizard") {
        this.role = role;
      }else{
        throw new Error ('oh no');
        
      }
      

      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    // checkRole (){

    // }
}
class Companion extends Adventurer{
    constructor(name, role,){
        super(name,role);
        // this.role = role;
    }
    helo (){
        console.log(`${this.name} is a ${this.role}`);
        super.scout();
    }
}

const newRobin = new Companion("robin","Healer");
newRobin.helo()

