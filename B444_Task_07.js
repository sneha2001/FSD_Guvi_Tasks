GUVI: Zen Class — Part 1: Find the culprits and nail them — debugging javascript
1.The error in the provided code is a syntax error in the alert() function call. 
The double quotation marks used around the string "I’m JavaScript!’ are not proper. 
The closing single quotation mark is incorrect; it should be a closing double quotation mark instead.
Here's the corrected code:
<!DOCTYPE html>
<html>
<body>
 <script>
 alert("I'm JavaScript!");
 </script>
 Whats the error in this ?
</body>
</html>

2. Find the culprit and invoke the alert
 The culprit in the given code is a typographical error in the script tag of the HTML file. 
 The double quotation marks used in the script source attribute are invalid.
 They should be replaced with valid double quotation marks ("") or single quotation marks ('').

Here's the corrected version of the code:
<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
alert("I'm invoked!");

3. The code you provided consists of an HTML file (explain.html) and a JavaScript file (script.js). 
Let's break it down and explain how it works:

explain.html:
<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>

This is an HTML file that sets up the basic structure of a web page.
Inside the <body> element, there is a <script> tag with the src attribute set to "script.js". 
This means that when the HTML file is loaded in a web browser, it will include and execute the JavaScript code from the script.js file.

alert("I'm JavaScript!");
alert('Hello') // this line is not having a semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and it's working

This is the JavaScript file that will be executed when the HTML file is loaded. It contains four alert() statements:

alert("I'm JavaScript!"); - This line displays a pop-up dialog box with the message "I'm JavaScript!".

alert('Hello') - This line displays a pop-up dialog box with the message "Hello". 
Note that this line does not end with a semicolon. In JavaScript, semicolons are generally optional at the end of statements, and the code will still work without them.
However, it's considered good practice to include semicolons to avoid potential issues and improve code readability.

alert(Wor ld) - This line uses a template literal to create a string that spans multiple lines. 
The resulting message displayed in the pop-up dialog box is "Wor ld". Template literals, denoted by backticks (`), allow for multiline strings and string interpolation.

alert(3 + 1 + 2); - This line performs a mathematical calculation and displays the result, which is 6, in the pop-up dialog box. 
The addition operation 3 + 1 + 2 evaluates to 6.

In summary, when explain.html is loaded in a web browser, it includes the script.js file, which contains JavaScript code. 
The JavaScript code consists of several alert() statements that display pop-up dialog boxes with different messages.
The code demonstrates basic JavaScript syntax, including string literals, template literals, and mathematical operations.

4. To fix the code and make it alert "Guvi geek", you can modify the script.js file as follows:

let admin = 9;
let fname = 10.5;
fname = "Guvi";
let lname = "geek";
admin = fname + " " + lname;
alert(admin); // "Guvi geek"
In the code above, the changes made are as follows:

1. Created a new variable lname and assigned the value "geek" to it.

2. Concatenated fname and lname with a space in between using the + operator and assigned the result to the admin variable.

3. The alert statement now displays the value of admin, which will be "Guvi geek" after concatenation.

With these modifications, when fix.html is loaded in a web browser, the JavaScript code in script.js will be executed.
It will assign the value "Guvi" to fname, "geek" to lname, concatenate them with a space, and display the result "Guvi geek" in an alert dialog box.

5. 
















