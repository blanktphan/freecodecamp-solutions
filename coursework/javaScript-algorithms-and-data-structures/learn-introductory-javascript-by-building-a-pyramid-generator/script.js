// Configuration variables for the pyramid
const character = "!";    // The character used to build the pyramid
const count = 10;         // Number of rows in the pyramid
const rows = [];          // Array to store each row of the pyramid
let inverted = false;     // Boolean flag to control pyramid direction (normal/inverted)

// Function to create a single row of the pyramid
function padRow(rowNumber, rowCount) {
  // Calculate padding spaces on left/right: (total rows - current row number)
  // Calculate characters in row: (2 * row number - 1) for odd number progression
  // Structure: [left padding] + [characters] + [right padding]
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// Alternative approach 1: Using while loop (commented out)
// Builds pyramid row by row from top to bottom
/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

// Alternative approach 2: Using for loop in reverse (commented out)  
// Builds pyramid from bottom to top (inverted)
/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

// Main loop to build the pyramid with conditional direction
for (let i = 1; i <= count; i++) {
  if (inverted) {
    // If inverted is true, add rows to the beginning (creates upside-down pyramid)
    rows.unshift(padRow(i, count));
  } else {
    // If inverted is false, add rows to the end (creates normal pyramid)
    rows.push(padRow(i, count));
  }
}

// Initialize empty string to store the final pyramid output
let result = ""

// Loop through each row in the rows array and concatenate with newlines
for (const row of rows) {
  result = result + row + "\n";
}

// Display the completed pyramid in the console
console.log(result);