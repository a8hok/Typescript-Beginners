// Interfaces are another way to define the type of an object.

// Difference between interface notation and type notation is,

// interfaces are extendable while types are not,

interface Student {
    name: string;
    age: number;
    isMarried: boolean;
}
    
const student : Student = {
    name: "abc",
    age: 22,
    isMarried: true
}
