abstract class Animal {
    abstract sound(): void;
    eat(): void {
        console.log("Animal is eating");
    }
}
class Dog extends Animal {
    sound(): void {
        console.log("Dog is barking");
    }
}
const dog = new Dog();
dog.sound();
dog.eat();