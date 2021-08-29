//reference type

const obj1 = { value: 10}

const obj2 = obj1

const obj3 = { value: 10}

obj1 === obj2 // true 

obj1 === obj3 // false 

obj1.value = 15 

obj2.value //15

obj3.value // 10

//context

const obj4 = {
    a: function(){
        console.log(this);
    }
}

obj4.a()

// instantiation

class Player {
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi i am ${this.name}, i am a ${this.type}`);
    }
}

class Wizard extends Player{
    constructor(name,type){
        super(name,type);
    }
    play(){
        console.log(`WEEEEEEEEEE I am  a ${this.type}`);
    }
}

const wizard1 = new Wizard("shelly", "healer")
const wizard2 = new Wizard("shshawn", "dark magic")


wizard1.play();
wizard1.introduce();