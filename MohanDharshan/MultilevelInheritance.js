class Animal{
    eat(){
        console.log("Animal is eating");
    }
}
class Dog extends Animal{
    bark(){
        console.log("Dog is barking");
    }
}
class Puppy extends Dog{
    play(){
        console.log("Puppy is playing");
    }
}
const puppy=new Puppy();
puppy.eat();
puppy.bark();
puppy.play();