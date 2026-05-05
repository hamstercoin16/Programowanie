// CW 1
document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = Number(document.getElementById('age').value);

    const userObject = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    console.log("ćwiczenie 1");
    console.log("Cały obiekt:", userObject);

    console.log("Imię", userObject.firstName);
    console.log("Nazwisko:", userObject.lastName);
    console.log("Wiek:", userObject.age);

    const userJSON = JSON.stringify(userObject);
    console.log("Obj JSON:", userJSON);
});



export class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    wypisz() {
        if (this.imaginary >= 0) {
            return `${this.real} + ${this.imaginary}i`;
        } else {
            return `${this.real} - ${Math.abs(this.imaginary)}i`;
        }
    }

    module() {
        return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
    }
}


//CW2
const generateComplexArray = (size) => {
    const arr = [];
    for (let i = 0; i < size; i++) {
        const r = Math.floor(Math.random() * 21) - 10;
        const im = Math.floor(Math.random() * 21) - 10;
        arr.push(new ComplexNumber(r, im));
    }
    return arr;
};

const complexList = generateComplexArray(5);

//CW 3
console.log("\nĆwiczenie 3");
complexList.forEach(c => console.log(`${c.wypisz()} (Мodul: ${c.module().toFixed(2)})`));


//CW4

const positiveComplex = complexList.filter(c => c.real > 0 && c.imaginary > 0);

console.log("\nĆwiczenie 4");
positiveComplex.forEach(c => console.log(c.wypisz()));


//CW5
const swappedComplex = complexList.map(c => new ComplexNumber(c.imaginary, c.real));

console.log("\nĆwiczenie 5");
swappedComplex.forEach(c => console.log(c.wypisz()));


//CW6
const sumOfModules = complexList.reduce((acc, c) => acc + c.module(), 0);

console.log("\nĆwiczenie 6");
console.log(`Summa: ${sumOfModules.toFixed(2)}`);


//CW7
const minModuleValue = complexList.reduce((min, c) => Math.min(min, c.module()), complexList[0].module());

console.log("\n Ćwiczenie 7");
console.log(`wartość maksymalna: ${minModuleValue.toFixed(2)}`);


//CW 8
// ==========================================
const maxModuleObject = complexList.reduce((maxObj, c) => c.module() > maxObj.module() ? c : maxObj);

console.log("\nĆwiczenie 8");
console.log(maxModuleObject.wypisz());