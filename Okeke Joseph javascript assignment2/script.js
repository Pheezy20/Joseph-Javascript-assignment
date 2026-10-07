// Question 1: Create students objects
const students = [
    {
        id: 1,
        name: "Alice Johnson",
        age: 20,
        grades: [85, 90, 78]
    },

    {
        id: 2,
        name: "Brian Smith",
        age: 21,
        grades: [70, 65, 75]
    },

    {
        id: 3,
        name: "Chiamaka Okafor",
        age: 19,
        grades: [92, 88, 95]
    },

    {
        id: 4,
        name: "David Williams",
        age: 22,
        grades: [55, 60, 50]
    },

    {
        id: 5,
        name: "Esther Brown",
        age: 20,
        grades: [80, 72, 85]
    }
];


// QUESTION 2: Calculate averages


function calculateAverage(grades) {

    // Add all the grades
    const total = grades.reduce(function(sum, grade) {
        return sum + grade;
    }, 0);

    // Divide total by number of grades.
    const average = total / grades.length;

    // Round the average to 2 decimal places.
    return Number(average.toFixed(2));
}


// Add average property to every student.

const studentsWithAverage = students.map(function(student) {

    return {
        ...student,
        average: calculateAverage(student.grades)
    };

});


// Testing the result
console.log("STUDENTS WITH AVERAGES:");
console.log(studentsWithAverage);



// QUESTION 3: Filter passing students



function getPassingStudents(students) {

    return students.filter(function(student) {
        return student.average >= 60;
    });

}


// Testing the function

const passingStudents = getPassingStudents(studentsWithAverage);

console.log("PASSING STUDENTS:");
console.log(passingStudents);



// QUESTION 4: Functions and callbacks


// This function takes two things: An array of students and callback function

// The callback is applied to every student.

function processStudents(students, callback) {

    return students.map(function(student) {
        return callback(student);
    });

}



// CALLBACK 1: Add letter grade


// This function adds a letterGrade property based on the student's average.

function addLetterGrade(student) {

    let letterGrade;

    if (student.average >= 90) {
        letterGrade = "A";
    } 
    else if (student.average >= 80) {
        letterGrade = "B";
    } 
    else if (student.average >= 70) {
        letterGrade = "C";
    } 
    else if (student.average >= 60) {
        letterGrade = "D";
    } 
    else {
        letterGrade = "F";
    }

    // Return a new object (The original student object is not changed)

    return {
        ...student,
        letterGrade: letterGrade
    };

}



// CALLBACK 2: Add status


// This function adds a status property, where 60 or higher = Pass and  Below 60 = Fail


function addStatus(student) {

    let status;

    if (student.average >= 60) {
        status = "Pass";
    } 
    else {
        status = "Fail";
    }

    // Return a new object without changing the original student object.

    return {
        ...student,
        status: status
    };

}



// TEST addLetterGrade callback


const studentsWithGrades = processStudents(
    studentsWithAverage,
    addLetterGrade
);

console.log("STUDENTS WITH LETTER GRADES:");
console.log(studentsWithGrades);



// TEST addStatus callback


const studentsWithStatus = processStudents(
    studentsWithAverage,
    addStatus
);

console.log("STUDENTS WITH STATUS:");
console.log(studentsWithStatus);