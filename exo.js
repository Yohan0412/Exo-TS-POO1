var Personne = /** @class */ (function () {
    function Personne(name, age) {
        this.name = name;
        this.age = age;
    }
    Personne.prototype.tellMyName = function () {
        console.log("I am" + " " + this.name);
    };
    Personne.prototype.tellMyAge = function () {
        console.log("I am" + " " + this.age + " " + "Years old");
    };
    return Personne;
}());
var john = new Personne("John", 40);
var mary = new Personne("Mary", 35);
john.tellMyName();
john.tellMyAge();
mary.tellMyName();
mary.tellMyAge();
