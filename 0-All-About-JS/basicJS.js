//Datatypes in javascript:
//Number, String, Boolean, Null, Undefined, Object, Array.

//Difference between var, let, const
/*Var: Variables declared with var are function-scoped. 
This means that they are only accessible within the function they are declared in.

Let: Variables declared with let are block-scoped. 
This means that they are only accessible within the block they are declared in.

Const: Variables declared with const are also block-scoped. 
However, the value of a const variable cannot be changed after it is defined. 
It is essentially a constant value.

Var and let can be redeclared, but const cannot. 
This is a key difference that allows for better control over the variable environment.

Global Var: When you declare a variable with var outside of any function, it becomes a global variable. 
This can potentially lead to conflicts and bugs.
*/

//Assignment operator:
var x = 10;
//where, var x is a variable that stores the value 10. this storing is done using assignment operator.
console.log(x); //Outputs: 10

/*Arithmetic Operators:
+, -, /, *, %
*/

/*Increment & Decrement 
++, --, +=, -=, *=, /=
*/

/* Escape Character 
"\" backslash is known as escape character.
*/
var myStr = 'I am a "double quoted" string inside " double quotes" ';
//Or we can simply use 'single quotes' or `backtics` for avoiding conflicts.

/*Concatenation: + */

/*Length of string is calcylated using .length */
var count = myStr.length;
console.log(count);

/*Bracket Notation: [n]-> refers to the nth character of the string also to the nth index of the array */

/*Strings immutability:  
if you want to change value assigned to the string you have to redeclare it.
e.g. var myStr="abc";
myStr[0]="d"; -> This will give an error because strings are immutable.
But if you do like below then it will work fine.
var myStr="dbc"; */

/*Array:
there are 2 types of arrays in JS.
1-d and multi-d */

/*accessing arrays using index*/
var arr=[5,6,7];
console.log(arr[0]); // Outputs: 5
/*same method can be used in accessing element in multi dimentional arrays. */
var myArray=[[1,2,3],[4,5,6],[7,8,9]];
var myData=myArray[2][1];
console.log(myData);
/*Methods available in Array object:
push(): pushing data at the end of the array*/
var myArray=[1,2,3];
myArray.push(4);
console.log(myArray)
/*pop(): removes the last element of the array and returns it.*/
myArray.pop();
console.log(myArray)
/*shift(): removes the first element of the array and returns it.*/
myArray.shift();
console.log(myArray)
/*unshift(): adds the data at the start of the array.*/
myArray.unshift(5);
console.log(myArray)
