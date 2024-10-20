// declartions

const myName: string = "Scott";
const myNumber: number = 420;

function sum(a: number, b: number) {
  console.log(a + b);
}

sum(400, "20"); // causes error
sum(400, 20); // this line doesn't error

//array numbers

const myNumArray: number[] = [1, myName, 420]; // will cause an error

//custom types
type person = {
  name: string;
  age: number;
  handsome: boolean;
  beautiful?: boolean;
};

// declare variables of this type

const scott: person = {
  name: "Scott",
  age: 26,
  handsome: true,
};

const jeff: person = {
  name: "Jeff",
  age: 69,
  handsome: false,
  beautiful: true,
};

const steve = {
  name: "Steve",
  age: 42,
  handsome: true,
};

// only things that match person can be here
const people: person[] = [scott, jeff, steve];

// bad ideas
const thing: any = "l";
