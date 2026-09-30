// TASK 1 - VARIABLES & DATA TYPES

// firstName can change later
let firstName = "Joseph";

// lastName will not change
const lastName = "Okeke";

// age will not change
const age = 24;

// student ID will not change
const studentId = "STU-00123";

// GPA would never change
const gpa = 3.75;

// the student is currently enrolled
const isEnrolled = true;

// graduation date is not available yet
const graduationDate = null;


console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);
console.log("Student ID:", studentId);
console.log("GPA:", gpa);
console.log("Is Enrolled:", isEnrolled);
console.log("Graduation Date:", graduationDate);


// reassign firstName to nickname
firstName = "Joey";

// log the new firstName
console.log("New First Name:", firstName);


// TASK 2 - OPERATORS

// starting the total score at 0
let totalScore = 0;

// first test score
totalScore = totalScore + 45;
console.log("After first test:", totalScore);

// second test score
totalScore = totalScore + 30;
console.log("After second test:", totalScore);

// deduct 5 marks due to an error
totalScore = totalScore - 5;
console.log("After deducting 5 marks:", totalScore);

// doubling the score for the bonus round
totalScore = totalScore * 2;
console.log("After bonus round:", totalScore);

// add 1 point using the increment operator
totalScore++;
console.log("After adding 1 point:", totalScore);

// remainder when the score is divided by 7
console.log("Remainder when divided by 7:", totalScore % 7);


// TASK 3 - TYPE CONVERSION

// strings values
let studentAge = "19";
let examScore = "74.5";
let passMark = "50";
let studentName = 101;

// convert studentAge to a whole number
// parseInt() is used because we need whole number
studentAge = parseInt(studentAge);
console.log("Student Age:", studentAge);
console.log("Student Age Type:", typeof studentAge);


// convert examScore to a decimal number
// parseFloat() will keep the decimal value
examScore = parseFloat(examScore);
console.log("Exam Score:", examScore);
console.log("Exam Score Type:", typeof examScore);


// convert passMark using Number()
passMark = Number(passMark);
console.log("Pass Mark:", passMark);
console.log("Pass Mark Type:", typeof passMark);


// convert studentName to a string
// string() changes the number 101 into "101"
studentName = String(studentName);
console.log("Student Name:", studentName);
console.log("Student Name Type:", typeof studentName);


// Check and log boolean result
let passed = examScore > passMark;

console.log("Did the student pass?", passed);


// TASK 4 - CONDITIONAL STATEMENTS

let score = 73;

let grade;

// Check score and assign the correct grade
if (score >= 70) {
    grade = "A - Distinction";
} else if (score >= 60) {
    grade = "B - Merit";
} else if (score >= 50) {
    grade = "C - Pass";
} else if (score >= 40) {
    grade = "D - Near Pass";
} else {
    grade = "F - Fail";
}

// result display
console.log("Score:", score);
console.log("Grade:", grade);


// TESTING WITH DIFFERENT SCORES

// Test 1
/*
let score = 65;

if (score >= 70) {
    grade = "A - Distinction";
} else if (score >= 60) {
    grade = "B - Merit";
} else if (score >= 50) {
    grade = "C - Pass";
} else if (score >= 40) {
    grade = "D - Near Pass";
} else {
    grade = "F - Fail";
}

console.log("Score:", score);
console.log("Grade:", grade);
*/


// Test 2
/*
let score = 55;

if (score >= 70) {
    grade = "A - Distinction";
} else if (score >= 60) {
    grade = "B - Merit";
} else if (score >= 50) {
    grade = "C - Pass";
} else if (score >= 40) {
    grade = "D - Near Pass";
} else {
    grade = "F - Fail";
}

console.log("Score:", score);
console.log("Grade:", grade);
*/


// Test 3
/*
let score = 35;

if (score >= 70) {
    grade = "A - Distinction";
} else if (score >= 60) {
    grade = "B - Merit";
} else if (score >= 50) {
    grade = "C - Pass";
} else if (score >= 40) {
    grade = "D - Near Pass";
} else {
    grade = "F - Fail";
}

console.log("Score:", score);
console.log("Grade:", grade);
*/