// Primitive types
let age: number = 22;
let stuName: string = "A8hok";
let isMarried: boolean = false;


// Non-primitive types
let friends: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];

type User = {
    name: string;
    age: number;
    isMarried: boolean;
}
    
const user : User = {
    name: "A8hok",
    age: 22,
    isMarried: false
}

// Any
// type any allows a variable to have any datatype.
let holdAnyValue:any = "Hello there!!!";

holdAnyValue = ['hello', 'there'];

holdAnyValue = {
    first: 'hello',
    second: 'there'
};
