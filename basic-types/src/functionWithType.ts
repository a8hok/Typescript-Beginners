// Basic function with arguments and return type.
const addTwoNumbers = (x: number, y: number): number => {
    return x + y;
};

addTwoNumbers(2, 5); // 7




// Function with optional arguments.
type Name = {
    firstName: string;
    lastName?: string;
};

const getFullName = (name: Name): string => {
    const lastName = name.lastName ? name.lastName : ""; 
    return name.firstName + lastName;
};

getFullName({ firstName: "a8hok" });  //a8hok
getFullName({ firstName: "a8hok", lastName: "kumar" }); //a8hokkumar




// Union types
const getRollNumber = (rollNumber: number | string) => {
return rollNumber;
}

getRollNumber(352); //352
getRollNumber("352"); //352