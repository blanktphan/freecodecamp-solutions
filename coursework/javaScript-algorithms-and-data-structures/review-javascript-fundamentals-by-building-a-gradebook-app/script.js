// Function to calculate the average of an array of scores
function getAverage(scores) {
  let sum = 0;

  // Loop through each score in the array and add it to the sum
  for (const score of scores) {
    sum += score;
  }

  // Return the average by dividing total sum by number of scores
  return sum / scores.length;
}

// Function to determine letter grade based on numerical score
function getGrade(score) {
  // Perfect score gets A++
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    // Any score below 60 is failing
    return "F";
  }
}

// Function to check if a student has a passing grade (not F)
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

// Function to generate a message for the student with class average and their performance
function studentMsg(totalScores, studentScore) {
  // Calculate the class average from all scores
  let getAvr = getAverage(totalScores)
  // Get the letter grade for the individual student
  let getGr = getGrade(studentScore)

  // Check if the student passed or failed and return appropriate message
  if (getGr !== 'F'){
    return 'Class average: ' + getAvr + '. Your grade: ' + getGr + '. You passed the course.'
  } else {
    return 'Class average: ' + getAvr + '. Your grade: ' + getGr + '. You failed the course.'
  }
}
// Test the function with sample data: class scores and individual student score of 37
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));