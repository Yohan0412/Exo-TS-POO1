class Personne {
    private  name: string;
    private  age: number;

  constructor(name: string , age : number) {
    this.name = name;
    this.age = age;
  }

  tellMyName(): void {
     console.log("I am" + " " + this.name);
  }

  tellMyAge(): void {
    console.log("I am" + " " + this.age + " " + "Years old");
  }
}

const john = new Personne("John" , 40);
const mary = new Personne("Mary" , 35);



john.tellMyName();
john.tellMyAge();


mary.tellMyName();
mary.tellMyAge();