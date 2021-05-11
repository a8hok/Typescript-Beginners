// Basic function with arguments and return type.
var addTwoNumbers = function (x, y) {
    return x + y;
};
addTwoNumbers(2, 5); // 7
var getFullName = function (name) {
    var lastName = name.lastName ? name.lastName : "";
    return name.firstName + lastName;
};
getFullName({ firstName: "a8hok" }); //a8hok
getFullName({ firstName: "a8hok", lastName: "kumar" }); //a8hokkumar
// Union types
var getRollNumber = function (rollNumber) {
    return rollNumber;
};
getRollNumber(352); //352
getRollNumber("352"); //352
