const character = "!";
const count = 10;
const rows = []; //create empty array
let inverted = false; //set true for an inverted pyramid

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
};

/* Code dictates that for the function padRow(), the parameters are rowNumber and rowCount
    calling the function padRow will return:
         1.an empty string and repeat it (rowCount minus rowNumber) times which will defined later by the if statement below
         2.the character(!) repeated rownumber x2 minus one times
         3.an empty string and repeat it (rowCount minus rowNumber) times
*/

for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count));
    } else {
      rows.push(padRow(i, count));
    }
};

/* The for loop above is used to set a counter that will generate the rows array
    - let i=1 is the iterator for the loop function
    - i<=count is the condition meaning that the loop will run 'i' number of times until i becomes less than or equal to the 
        count variable which was declared as 10 so the loop will run 10 times.
    - i++ is the iteration count which says that the loop will run incrementally till it reaches the condition set above which is 10

    The if statement is used to set rules which will apply each time the iterator counts:
    - if (inverted) was declared as false in line 4 hence:
        1.rows which was an empty array will have a new value added to the beginning by the unshift function.
        2.this new value will depend on the function padRow()
        3.within the function, two arguments have now been passed : i , count
        4.these two arguments have been passed to the parameters rowNumber and rowCount in that order
        5.for the first iteration count, i=1 and count=10 hence these values passed to the (rowNumber ,rowCount) parameters above
            will mean that the padRow function will return (rowCount - rowNumber) which is 9 empty strings and (2 * rowNumber - 1)
            which is 1 character and finally 9 empty strings as declared in line 7.
        6.the for loop will run this padRow() functions 10 times adding one less space and one extra character each time
    -else the loop will just add the first value which is i=1 towards the end of the array and the pyramid will be inverted.
*/

    let result = "";
    
    for (const row of rows) {
        result = result + "\n" + row;
    };
    
    console.log(result);

/* In this for of loop: 
        -the row variable is declared, this row variable will represent the first iterable value of the array rows[]
        -the empty string result declared above will then be used since we dont want to print anything on the console
        -we then add the empty string to an escape sequence \n and finally the array value we assigned to row which is a
        complicated way of having each array element occupying its own line
    Finally we log the result which is a pyramid
    change the character variable value to different value and have fun

/*

// TODO: use a different type of loop
// extra loops for practice
      
/*while (rows.length < count) {
        rows.push(padRow(rows.length + 1, count));
}*/

/*This while loop:
    - checks if the rows.length which is the number of elements in the array is less than the count(10)
    - for the first iteration count, rows.length has a value of zero since it is an empty array
    - hence the loop adds to the end of the array for the first iteration count rows.length +1(1) to the rowNumber parameter
       and 10 to the rowCount parameter and the padRow() function will return (rowCount - rowNumber) which is 9 empty strings
       and (2 * rowNumber - 1) which is 1 character and finally 9 empty strings
    - the loop continues until rows.length becomes equal to count
*/
      
/*for (let i = count; i > 0; i--) {
        rows.push(padRow(i, count));
}*/

/* This for loop just does the same thing as the one in line 17 but runs the sequence in reverse hence generating an inverse pyramid*/